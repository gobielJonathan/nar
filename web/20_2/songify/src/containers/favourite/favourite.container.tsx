import React, { useContext } from 'react'
import MusicExplore from '../../components/music-explore/music-explore.component'
import { FavouriteContext } from '../../provider/favourite.provider'
import './favourite.container.scss'

const Favourite: React.FC = () => {
    const { fav, onGetDetail } = useContext(FavouriteContext)
    return (
        <div className="fav">
            {
                fav.map((data: string, _) => {
                    const [songIdx, singerIdx] = data.split("-")
                    const [singer, song] = onGetDetail(parseInt(songIdx), parseInt(singerIdx))
                    return <MusicExplore singerIdx={parseInt(singerIdx)} songIdx={parseInt(songIdx)} singer={singer} song={song} key={_} />
                })
            }
        </div>
    )
}

export default Favourite