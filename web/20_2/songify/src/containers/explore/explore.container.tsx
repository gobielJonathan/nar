import React, { useContext } from 'react'
import './explore.container.scss'
import MusicExplore from '../../components/music-explore/music-explore.component'
import { Row, Col } from 'react-bootstrap'
import PopularList from '../../components/popular-list/popular-list.component'
import classnames from 'classnames'
import { StyleTheme, ThemeContext } from '../../provider/theme.provider'
import Mood from '../../components/last-song/last-song.component'
import SONGS from '../../utils/dummy/songs.dummy.json'

const Explore: React.FC = props => {

    const { theme } = useContext(ThemeContext)

    const classes = classnames('explore', {
        light: theme === StyleTheme.light,
        dark: theme === StyleTheme.dark
    })

    return (
        <section className={classes}>
            <h6 className="explore__title">Explore</h6>
            <section className="explore__content">
                {SONGS.map((data,singerIdx) => {
                    const { singer, songs } = data
                    return songs.map((song, _) => <MusicExplore singerIdx={singerIdx} songIdx={_} singer={singer} song={song} key={_} />)
                })}
            </section>

            <Row className="mx-0" style={{ marginTop: "4rem" }}>
                <Col sm="12" md="12" className="pl-0">
                    <h6 className="explore__title">Popular</h6>
                    <section className="explore__content flex-column">
                        {SONGS[0].songs.map((song, idx) => <PopularList songIdx={idx} singerIdx={0} song={song} key={idx} index={idx + 1} />)}
                    </section>
                </Col>

                {/* <Col sm="12" md="6">
                    <h6 className="explore__title">Last Song</h6>
                    <section className="explore__content explore__last-song">
                        <Mood>Love Song</Mood>
                        <Mood>Love Song</Mood>
                        <Mood>Love Song</Mood>
                        <Mood>Love Song</Mood>
                    </section>
                </Col> */}
            </Row>
        </section>
    )
}

export default Explore