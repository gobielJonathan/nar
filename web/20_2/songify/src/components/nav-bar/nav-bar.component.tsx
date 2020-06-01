import React, { useContext, useState } from 'react'
import './nav-bar.component.scss'
import { useHistory } from 'react-router-dom'
import { Form } from 'react-bootstrap'
import { ThemeContext, StyleTheme } from '../../provider/theme.provider'
import LoginModal from '../modal/login/modal-login.component'
import SearchSuggestionModal from '../modal/search-suggestion/search-suggestion.component'

interface IProps { }

const NavBar: React.FC<IProps> = () => {

    const { go } = useHistory()
    const { theme, changeTheme } = useContext(ThemeContext)
    const [showSuggestion, setShowSuggestion] = useState(false)
    const [showLogin, setShowLogin] = useState(false)
   
    const onToggleShowLogin = () => setShowLogin(show => !show)

    const onToggleShowSuggestion = () => setShowSuggestion(show => !show)

    return (
        <>
            {/* <LoginModal show={showLogin} onClose={onToggleShowLogin}/> */}
            <SearchSuggestionModal show={showSuggestion} onClose={onToggleShowSuggestion} />

            <nav className={'nav-bar d-flex'} style={theme}>
                <button className="nav-bar__btn btn bg-transparent color-mid-gray px-0 mr-3" onClick={() => go(-1)}>
                    <i className="fa fa-angle-left nav-bar__icon" aria-hidden="true"></i>
                </button>
                <button className="nav-bar__btn btn bg-transparent color-mid-gray ml-2" onClick={() => go(1)}>
                    <i className="fa fa-angle-right nav-bar__icon" aria-hidden="true"></i>
                </button>

                <section className="nav-bar__search">
                    <i className="fa fa-search nav-bar__icon" aria-hidden="true"></i>
                    <input type="text" name="search" id="" onClick={onToggleShowSuggestion} placeholder="Search music" className="color-mid-gray" />
                </section>

                <section className="nav-bar__auth d-flex ml-auto align-items-center">
                    <Form.Check
                        onChange={changeTheme}
                        type="switch"
                        id="custom-switch"
                        label={theme === StyleTheme.dark ? "Dark" : "Light"}
                    />
                    {/* <button type="button" onClick={onToggleShowLogin}
                        className="btn bg-transparent color-mid-gray ml-4 mr-4 mb-0" data-toggle="modal" data-target="#loginModal">Login</button> */}
                </section>
            </nav>
        </>
    )
}

export default NavBar