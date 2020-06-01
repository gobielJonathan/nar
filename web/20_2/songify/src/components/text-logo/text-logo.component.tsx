import React from 'react'
import './text-logo.component.scss'
import classnames from 'classnames'

interface IProps {
    className?: string
}

const TextLogo : React.FC<IProps> = props => {
    const {className} = props

    const classes = classnames('text-logo',className )

    return (
        <h2 className={classes}>Songify</h2>
    )
}

export default TextLogo