import React, { useContext } from 'react'
import './modal.component.scss'
import classnames from 'classnames'
import { Modal } from 'react-bootstrap'
import { ThemeContext, StyleTheme } from '../../provider/theme.provider'

export interface ModalProps{
    show: boolean,
    onClose : () => void
}

const GModal: React.FC<ModalProps> = ({
    show,
    children,
    onClose
}) => {

    const { theme } = useContext(ThemeContext)

    const classes = classnames({
        dark: theme === StyleTheme.dark,
        light: theme === StyleTheme.light
    })

    return (
        <Modal show={show} onHide={onClose} className={classes}>
            {children}
        </Modal>
    )
}

export default GModal