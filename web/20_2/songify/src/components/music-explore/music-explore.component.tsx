import React, { useContext } from 'react'
import './music-explore.component.scss'
import { ThemeContext, StyleTheme } from '../../provider/theme.provider'
import classnames from 'classnames'
import { MusicPlayerContext } from '../../provider/music-player.provider'

interface IProps {
    singer: string,
    song: string,
    singerIdx: number,
    songIdx : number
}

const MusicExplore: React.FC<IProps> = ({
    singer,
    song,
    singerIdx,
    songIdx
}) => {

    const { setSingerIdx, setSongIdx, playPause} = useContext(MusicPlayerContext)
    const { theme } = useContext(ThemeContext)

    const classes = classnames('music-explore hover', {
        'dark': theme === StyleTheme.dark,
        'light': theme === StyleTheme.light
    })

    const onClick = () => {
        setSingerIdx(singerIdx);
        setSongIdx(songIdx);
    }

    return (
        <section className={classes} onClick={onClick}>
            <img src={"https://png.pngtree.com/thumb_back/fw800/back_our/20190622/ourmid/pngtree-flat-vector-music-background-image_211142.jpg"} alt="" className="music-explore__thumbnail" />

            <h6 className="music-explore__title mt-2  mb-0 text-white">{singer}</h6>
            <p className="music-explore__sub mt-1 text-truncate">{song}</p>
        </section>
    )
}
export default MusicExplore