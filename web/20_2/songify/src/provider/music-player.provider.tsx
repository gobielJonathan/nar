import React, { useState, useEffect } from 'react'
import Songs from '../utils/dummy/songs.dummy.json'
import { URL } from '../constant/url';
import showAlert, { showMixAlert } from '../utils/error';

interface Context {
    singer: string,
    song: string,
    currentTime: string,
    percentTime: number,
    endTime: string,
    isPlay: boolean,
    playPause: () => void,
    next: () => void,
    prev: () => void,
    setSongIdx: (idx: number) => void,
    setSingerIdx: (idx: number) => void,
    seek: (percent: number) => void,
    onGetSingerIdx : (singer : string) => number,
    onGetSongIdx : (singer_idx : number, song: string) => number
}

export const MusicPlayerContext = React.createContext({} as Context)

enum Action {
    NEXT = 1,
    PREV = -1,
    STANDBY = 0
}


let audio = new Audio();
audio.loop = false;
audio.crossOrigin = "anonymous"
audio.volume = 1;

const MusicPlayerProvider: React.FC = props => {

    const [percentTime, setPercentTime] = useState(0)
    const [endTime, setEndTime] = useState("")
    const [currentTime, setCurrentTime] = useState("")

    const [currSong, setCurrSong] = useState(0)
    const [currSinger, setCurrSinger] = useState(0)
    const [song, setSong] = useState("")
    const [_singer, setSinger] = useState("")
    const [isPlay, setIsPlay] = useState(false)
    const [flag, setFlag] = useState<Action>(Action.STANDBY)


    useEffect(() => {
        const { singer, songs } = Songs[currSinger];

        if ((currSong >= 0) && (currSong < songs.length)) {
            audio.pause();
            audio.src = getSongURL(currSinger, currSong);
            setSinger(singer);
            setSong(songs[currSong]);
        }
            setIsPlay(play => false);
    }, [currSong, currSinger])

    useEffect(() => {
        if(flag == Action.PREV || flag == Action.NEXT){
            setCurrSong(curr => curr + flag)
        }
    }, [flag])

    useEffect(() => {
        audio.addEventListener("timeupdate", updateCurrentTime)
        return () => {
            audio.removeEventListener("timeupdate", updateCurrentTime)
        }
    }, [])

    const onGetSingerIdx=  (singer : string) => {
        return Songs.findIndex(data =>data.singer === singer);
    }

    const onGetSongIdx=(singer_idx : number, song: string) => {
        return Songs[singer_idx].songs.findIndex(data => data === song);
    }

    function getTimeSongFormat(minute: number, sec: number) {
        let minString: string = minute.toString();
        let secString: string = sec.toString();

        if (minute < 10)
            minString = "0" + minString;
        if (sec < 10)
            secString = "0" + secString;

        return `${minString}:${secString}`
    }

    function updateCurrentTime() {
        const mins = Math.floor(audio.currentTime / 60);
        const secs = Math.floor(audio.currentTime - mins * 60);

        setCurrentTime(getTimeSongFormat(mins, secs))
        if (audio.ended) {
            showAlert({
                message: `${song} already ended`,
                title: "Ended",
                type: "info"
            })
        }
        setPercentTime(audio.currentTime / audio.duration * 100)
    }

    function getSongURL(singerIdx: number, songIdx: number): string {
        const { singer, songs } = Songs[singerIdx]
        return `${URL.MUSIC}${singer}/${singer} - ${songs[songIdx]}.mp3`
    }

    function reset() {
        setEndTime("")
    }

    function selectTrack(flag: Action) {
        setCurrSong(song => song + flag)
        setFlag(flag)
        reset()
    }

    function play() {
        audio.play()
        .then(() => {
            const mins = Math.floor(audio.duration / 60);
            const secs = Math.floor(audio.duration - mins * 60);

            setEndTime(getTimeSongFormat(mins, secs))

            showMixAlert({
                title: `${song} is playing`,
                type: "info",
                message: ""
            });
        })
        .catch(err => {
            showAlert({
                message: `${song} can't play`,
                title: "Sorry, Something Error",
                type: "error"
            })
        })
    }

    function playPause() {
        if (audio.paused) {
            play();
        }
        else
            audio.pause();
        setIsPlay(play => !play)
    }

    const next = () => selectTrack(Action.NEXT)

    const prev = () => selectTrack(Action.PREV)

    const setSongIdx = (idx: number) => setCurrSong(idx)

    const setSingerIdx = (idx: number) => setCurrSinger(idx)

    const seek = (percent: number) => {
        audio.currentTime = percent * audio.duration
        setPercentTime(percent * 100)
    }

    return (
        <MusicPlayerContext.Provider value={{
            currentTime,
            percentTime,
            endTime,
            singer: _singer,
            song,
            playPause,
            isPlay,
            next,
            prev,
            setSongIdx,
            setSingerIdx,
            seek,
            onGetSingerIdx,
            onGetSongIdx
        }}>
            {props.children}
        </MusicPlayerContext.Provider>
    )
}

export default MusicPlayerProvider