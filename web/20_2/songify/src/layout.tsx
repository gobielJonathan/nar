import React, { useContext } from 'react'
import './layout.scss';
import Aside from './components/aside/aside.component'
import Player from './components/player/player.component'
import NavBar from './components/nav-bar/nav-bar.component';
import { ThemeContext } from './provider/theme.provider';
import SplashScreen from './components/splash-screen/splash-screen.component';

const Layout: React.FC = props => {

    const {theme} = useContext(ThemeContext)

    return (
        <>
            {/* <SplashScreen /> */}
            <main className="d-flex main" style={theme}>
                <section className="main-aside"><Aside /></section>
                <section className="main-content">
                    <NavBar />
                    {props.children}
                </section>
            </main>

            <Player />
        </>
    )
}

export default Layout