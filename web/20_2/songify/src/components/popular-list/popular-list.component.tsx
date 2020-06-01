import React, { useContext, useState } from 'react'
import './popular-list.component.scss'
import { Row, Col } from 'react-bootstrap'
import classnames from 'classnames'
import { StyleTheme, ThemeContext } from '../../provider/theme.provider'
import { MusicPlayerContext } from '../../provider/music-player.provider'
import { FavouriteContext } from '../../provider/favourite.provider'

interface IProps {
    index: number,
    song: string,
    songIdx: number,
    singerIdx: number,
}

const PopularList: React.FC<IProps> = ({
    index,
    song,
    songIdx,
    singerIdx,
}) => {

    const { setSingerIdx, setSongIdx } = useContext(MusicPlayerContext)
    const { theme } = useContext(ThemeContext)
    const { onAdd, onFind, onRemove } = useContext(FavouriteContext)

    const [isFav, setIsFav] = useState(onFind(songIdx, singerIdx))

    const classes = classnames('popular hover', {
        dark: theme === StyleTheme.dark,
        light: theme === StyleTheme.light,
    })

    const onClick = () => {
        setSingerIdx(singerIdx)
        setSongIdx(songIdx)
    }

    const onToggleFav = () => setIsFav(fav => !fav)

    const onToggle = () => {
        !isFav ? onAdd(songIdx, singerIdx) : onRemove(songIdx, singerIdx)
        onToggleFav()
    }

    return (
        <Row className={classes}>
            <Col sm="2">
                <img src="https://asset-a.grid.id/crop/0x0:0x0/360x240/photo/2018/11/07/4358706.png" alt="" className="popular__thumbnail" />
                <span className="ml-3">{index}</span>
            </Col>
            <Col sm="10" className="d-flex justify-content-between align-items-center" style={{ padding: "0 2rem" }}>
                <span className="popular__song-title" onClick={onClick}>{song}</span>
                <span className="popular__song-dur" onClick={onToggle}>
                    {!isFav ? <i className="fa fa-heart-o" aria-hidden="true"></i> : <i className="fa fa-heart" aria-hidden="true"></i>}
                </span>
            </Col>
        </Row>
    )
}

export default PopularList