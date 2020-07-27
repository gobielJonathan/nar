import React, { useContext } from 'react'
import { CHILL, INDO, JAZZ, ROMANCE, SLEEP, SOUL } from '../../utils/image';
import './genre.container.scss';
import { MusicPlayerContext } from '../../provider/music-player.provider';
import GENRE_DUMMY from '../../utils/dummy/genre.dummy.json';
import { Button } from 'react-bootstrap';
import classNames from 'classnames';
import { ThemeContext, StyleTheme } from '../../provider/theme.provider';


const Genre: React.FC = ({

}) => {

    const { theme } = useContext(ThemeContext);

    const { setSingerIdx, setSongIdx, onGetSongIdx, onGetSingerIdx } = useContext(MusicPlayerContext);

    const onClick = (singer: string, song: string) => {
        const singerIdx = onGetSingerIdx(singer);
        const songIdx = onGetSongIdx(singerIdx, song);
        setSingerIdx(singerIdx);
        setSongIdx(songIdx);
    }

    const classes = classNames('genre', {
        'light': theme === StyleTheme.light,
        'dark': theme === StyleTheme.dark
    })

    return (
        <div className="genre-container">
            <div className={classes}>
                <img src={CHILL} alt="chill" />
                <div className="genre-content">
                    {
                        GENRE_DUMMY['chill'].map((data, _) => {
                            const { singer, songs } = data;
                            return (
                                <div key={_} className="genre-list">
                                    <div className="genre-list-title">{singer}</div>
                                    {
                                        songs.map((song, _) => {
                                            return (
                                                <div className="d-flex mb-3 align-items-center" key={_}>
                                                    <Button onClick={() => onClick(singer, song)} className='bg-transparent'>
                                                        <i className="fa fa-play-circle text-primary" aria-hidden="true"></i>
                                                    </Button>
                                                    <div className="genre-list-item">{song}</div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={classes}>
                <img src={INDO} alt="chill" />
                <div className="genre-content">
                    {
                        GENRE_DUMMY['indo'].map((data, _) => {
                            const { singer, songs } = data;
                            return (
                                <div key={_} className="genre-list">
                                    <div className="genre-list-title">{singer}</div>
                                    {
                                        songs.map((song, _) => {
                                            return (
                                                <div className="d-flex mb-3 align-items-center" key={_}>
                                                    <Button onClick={() => onClick(singer, song)} className='bg-transparent'>
                                                        <i className="fa fa-play-circle text-primary" aria-hidden="true"></i>
                                                    </Button>
                                                    <div className="genre-list-item">{song}</div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={classes}>
                <img src={JAZZ} alt="chill" />
                <div className="genre-content">
                    {
                        GENRE_DUMMY['jazz'].map((data, _) => {
                            const { singer, songs } = data;
                            return (
                                <div key={_} className="genre-list">
                                    <div className="genre-list-title">{singer}</div>
                                    {
                                        songs.map((song, _) => {
                                            return (
                                                <div className="d-flex mb-3 align-items-center" key={_}>
                                                    <Button onClick={() => onClick(singer, song)} className='bg-transparent'>
                                                        <i className="fa fa-play-circle text-primary" aria-hidden="true"></i>
                                                    </Button>
                                                    <div className="genre-list-item">{song}</div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={classes}>
                <img src={ROMANCE} alt="chill" />
                <div className="genre-content">
                    {
                        GENRE_DUMMY['romance'].map((data, _) => {
                            const { singer, songs } = data;
                            return (
                                <div key={_} className="genre-list">
                                    <div className="genre-list-title">{singer}</div>
                                    {
                                        songs.map((song, _) => {
                                            return (
                                                <div className="d-flex mb-3 align-items-center" key={_}>
                                                    <Button onClick={() => onClick(singer, song)} className='bg-transparent'>
                                                        <i className="fa fa-play-circle text-primary" aria-hidden="true"></i>
                                                    </Button>
                                                    <div className="genre-list-item">{song}</div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className={classes}>
                <img src={SLEEP} alt="chill" />
                <div className="genre-content">
                    {
                        GENRE_DUMMY['sleep'].map((data, _) => {
                            const { singer, songs } = data;
                            return (
                                <div key={_} className="genre-list">
                                    <div className="genre-list-title">{singer}</div>
                                    {
                                        songs.map((song, _) => {
                                            return (
                                                <div className="d-flex mb-3 align-items-center" key={_}>
                                                    <Button onClick={() => onClick(singer, song)} className='bg-transparent'>
                                                        <i className="fa fa-play-circle text-primary" aria-hidden="true"></i>
                                                    </Button>
                                                    <div className="genre-list-item">{song}</div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className={classes}>
                <img src={SOUL} alt="chill" />
                <div className="genre-content">
                    {
                        GENRE_DUMMY['soul'].map((data, _) => {
                            const { singer, songs } = data;
                            return (
                                <div key={_} className="genre-list">
                                    <div className="genre-list-title">{singer}</div>
                                    {
                                        songs.map((song, _) => {
                                            return (
                                                <div className="d-flex mb-3 align-items-center" key={_}>
                                                    <Button onClick={() => onClick(singer, song)} className='bg-transparent'>
                                                        <i className="fa fa-play-circle text-primary" aria-hidden="true"></i>
                                                    </Button>
                                                    <div className="genre-list-item">{song}</div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Genre;