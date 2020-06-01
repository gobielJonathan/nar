import React, { useState, useEffect } from 'react'
import SONGS from '../utils/dummy/songs.dummy.json'
import showAlert from '../utils/error'

interface Context { 
    fav: any[];
    onAdd: (songIdx: number, singerIdx: number) => void,
    onRemove: (songIdx: number, singerIdx: number) => void,
    onFind : (songIdx: number, singerIdx: number) => boolean,
    onGetDetail : (songIdx: number, singerIdx: number) => string[],
}

export const FavouriteContext = React.createContext({} as Context)

const KEY = "fav"

const FavouriteProvider: React.FC = props => {

    const [fav, setFav] = useState([])

    useEffect(() => {
        let favs: any = localStorage.getItem(KEY);
        if (favs) favs = JSON.parse(favs) as Array<string>
        setFav(favs || [])
    }, [])

    const onAdd = (songIdx: number, singerIdx: number) => {
        let favs: any = localStorage.getItem(KEY);
        const content = getFormat(songIdx, singerIdx);

        if (favs) {
            favs = JSON.parse(favs) as Array<string>
            if(!onFind(songIdx, singerIdx))
                favs.push(content)
        } else {
            favs = [content]
        }
        localStorage.setItem(KEY, JSON.stringify(favs))
        showAlert({
            message : `Success add to favourite list`,
            title : "Success",
            type : "info"
        })
        setFav(favs)
    }

    const onFind = (songIdx: number, singerIdx: number) : boolean => {
        let favs: any = localStorage.getItem(KEY);
        if (favs) {
            favs = JSON.parse(favs) as Array<string>
            return favs.find((data:string) => data === getFormat(songIdx, singerIdx))
        }
        return false
    }

    
    const onRemove = (songIdx: number, singerIdx: number) => {
        let favs: any = localStorage.getItem(KEY);
        const content = getFormat(songIdx, singerIdx);

        if (favs) {
            favs = JSON.parse(favs) as Array<string>
            favs = favs.filter((data:string) => data !== content)
        } else {
            favs = []
        }
        
        localStorage.setItem(KEY, JSON.stringify(favs))
        showAlert({
            message : `Success remove from favourite list`,
            title : "Success",
            type : "info"
        })
        setFav(favs)
    }

    const getFormat = (songIdx: number, singerIdx: number) => `${songIdx}-${singerIdx}`

    const onGetDetail  = (songIdx: number, singerIdx: number) : string[] => {
        const{singer, songs} = SONGS[singerIdx]
        return [singer, songs[songIdx]]
    }

    return (
        <FavouriteContext.Provider value={{
            onAdd,
            onFind,
            fav,
            onGetDetail,
            onRemove
        }}>
            {props.children}
        </FavouriteContext.Provider>
    )
}

export default FavouriteProvider