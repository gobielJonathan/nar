import React, { useState, useEffect } from 'react'
import { Cookies } from '../utils/cookies'
import Key from '../constant/key'

export const StyleTheme = {
    dark: {
        backgroundColor: '#1A1B1F'
    },
    light: {
        backgroundColor: '#FFF'
    }
}

export const ThemeContext = React.createContext(
    {
        theme: StyleTheme.dark,
        changeTheme: () => { },
    }
)

const ThemeProvider: React.FC = props => {
    const [theme, setTheme] = useState(StyleTheme.dark)

    useEffect(() => {

        const themeData = Cookies.get(Key.THEME)
        if (themeData) {
            themeData === 'dark' ? setTheme(StyleTheme.dark) : setTheme(StyleTheme.light)
        }
    }, [])

    useEffect(() => {
        Cookies.store(Key.THEME, theme === StyleTheme.dark ? "dark" : "light")
    }, [theme])

    const changeTheme = () => {
        setTheme(theme => theme === StyleTheme.dark ? StyleTheme.light : StyleTheme.dark)
    }
    return (
        <ThemeContext.Provider value={{
            theme,
            changeTheme
        }}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider