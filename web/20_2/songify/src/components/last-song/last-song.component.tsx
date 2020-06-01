import React, { useContext } from 'react'
import './last-song.component.scss'
import { ThemeContext, StyleTheme } from '../../provider/theme.provider'
import classnames from 'classnames'

interface IProps {

}

const Mood : React.FC<IProps> = props => {
    const {children} = props

    const {theme} = useContext(ThemeContext)

    const classes = classnames('mood d-flex align-items-center hover justify-content-center', {
        dark : theme === StyleTheme.dark,
        light : theme === StyleTheme.light
    })
    
    return (
        <section className={classes}>
            {children}
        </section>
    )
}

export default Mood