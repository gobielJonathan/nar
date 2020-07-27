import React, { useContext } from 'react'
import './player.component.scss'
import { ThemeContext, StyleTheme } from '../../provider/theme.provider'
import classnames from 'classnames'
import { Button } from 'react-bootstrap'
import MusicPlayer from '../music-player/music-player.component'
import { MusicPlayerContext } from '../../provider/music-player.provider'

interface IProps {

}

const Player: React.FC<IProps> = props => {

    const { theme } = useContext(ThemeContext)
    const { playPause,next, prev, singer, song, isPlay } = useContext(MusicPlayerContext)

    const classes = classnames('player', {
        'dark': theme === StyleTheme.dark,
        'light': theme === StyleTheme.light
    })

    return (
        <section className={classes}>

            <section className="player-action h-100 d-flex align-items-center justify-content-around">
                <button id="play" onClick={prev} className="color-pattens_blue player-action__btn btn bg-transparent">
                    <i className="fa fa-backward" aria-hidden="true"></i>
                </button>
                <button id="play" onClick={playPause} className="color-pattens_blue player-action__btn btn bg-transparent">
                    {
                        isPlay ? <i className="fa fa-pause" aria-hidden="true"></i> : <i className="fa fa-play" aria-hidden="true"></i>
                    }

                </button>
                <button id="play" onClick={next} className="color-pattens_blue player-action__btn btn bg-transparent">
                    <i className="fa fa-forward" aria-hidden="true"></i>
                </button>
            </section>

            <section className="player-detail d-flex align-items-center">
                {/* <Button as="button" className="bg-transparent border-0">
                    <i className="fa fa-volume-up" aria-hidden="true"></i>
                </Button> */}

                <section className="player-detail__thumbnail d-flex">
                    <img src="https://asset-a.grid.id/crop/0x0:0x0/360x240/photo/2018/11/07/4358706.png" alt="" />

                    <div className="player-detail__thumbnail-desc ml-3">
                        <h6 className="player-detail__thumbnail-desc__title mb-0">{song || "-"}</h6>
                        <small className="color-mid-gray mb-0">{singer || "-"}</small>
                    </div>
                </section>
            </section>

            <MusicPlayer />
        </section>
    )
}

export default Player