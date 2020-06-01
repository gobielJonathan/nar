import React, { useContext, useRef, useLayoutEffect } from 'react'
import './music-player.component.scss'
import { MusicPlayerContext } from '../../provider/music-player.provider'

interface IProps { }

const MusicPlayer: React.FC<IProps> = props => {
    const { currentTime, endTime, percentTime, seek } = useContext(MusicPlayerContext)
    const playerRef = useRef<HTMLProgressElement>(null)

    useLayoutEffect(() => {
        const onClick = (event:any) => {
            const offsetWidth = playerRef.current?.offsetWidth || 0
            const percent = event.offsetX / offsetWidth;
            seek(percent)
        }
        playerRef.current?.addEventListener("click", onClick)

        return () => {
            playerRef.current?.removeEventListener("click", onClick)
        };
    }, [playerRef])

    return (
        <section className="player-seeker d-flex align-items-center">
            <span>{currentTime || "00:00"}</span>
            <div className="player-seeker__track">
                <progress id="seekObj" ref={playerRef} value={percentTime} className="hover" max="100" ></progress>
            </div>
            <span>{endTime || "00:00"}</span>
        </section>
    )
}

export default React.memo(MusicPlayer)