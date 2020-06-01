import React, { useState, useContext } from 'react'
import './search-suggestion.component.scss'
import GModal, { ModalProps } from '../modal.component'
import SONGS from '../../../utils/dummy/songs.dummy.json'
import MusicExplore from '../../music-explore/music-explore.component'
import { ThemeContext, StyleTheme } from '../../../provider/theme.provider'
import classnames from 'classnames'

const SearchSuggestionModal: React.FC<ModalProps> = ({
    onClose,
    show
}) => {
    
    const {theme} = useContext(ThemeContext)

    const [albums, setAlbums] = useState<any[]>(SONGS.map((data, singerIdx) => data.songs.map((song, songIdx) => ({
        singer: data.singer,
        song,
        singerIdx,
        songIdx
    }))).flat())

    const [searchAlbum, setsearchAlbum] = useState<any[]>(albums)

    const onSearchChange = (event: any) => {
        let { target: { value } } = event
        setsearchAlbum(albums.filter(data => {
            const singer = data.singer.toLowerCase();
            const song = data.song.toLowerCase();
            value = value.toLowerCase().trim()
            return song.includes(value) || singer.includes(value)
        }))
    }

    const classes = classnames('modal-suggestion__search', {
        'light' : theme === StyleTheme.light
    })

    return (
        <GModal
            onClose={onClose}
            show={show}>
            <section className={"modal-suggestion"}>
                <input type="text" name="search" id="" onChange={onSearchChange} placeholder="Search music" className="color-mid-gray modal-suggestion__search__input" />
                <div className={classes}>
                    {
                        searchAlbum.length > 0  ? searchAlbum.map((data, _) => {
                            const { singer, song, singerIdx, songIdx } = data
                            return <MusicExplore singerIdx={singerIdx} songIdx={_} singer={singer} song={song} key={_} />
                        }) : <h5 className="text-center">No Result.</h5>
                    }
                </div>
            </section>
        </GModal>
    )
}

export default SearchSuggestionModal