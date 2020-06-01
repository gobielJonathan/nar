import React, { useState, useEffect } from 'react'
import './splash-screen.component.scss'
import classnames from 'classnames'
import TextLogo from '../text-logo/text-logo.component'

const SPLASH_SCREEN_TIMEOUT = 2.7 * 1000

const SplashScreen: React.FC = props => {
    const [show, setShow] = useState(true)
    const [clear, setClear] = useState(false)

    useEffect(() => {
        let clearElTimeout: NodeJS.Timeout

        const timeout = setTimeout(() => {
            setShow(false)
            clearElTimeout = setTimeout(() => {
                setClear(true)
            }, 1000);
        }, SPLASH_SCREEN_TIMEOUT);
        return () => {
            clearTimeout(timeout)
            clearTimeout(clearElTimeout)
        }
    }, [])

    const classes = classnames('h-100 w-100 d-flex justify-content-center align-items-center bg-shark', {
        'splash-screen__show': show,
        'splash-screen__out': !show
    })

    return (
        <>
            {
                !clear && <div className={classes} style={{
                    position : "fixed",
                    top : "0",
                    left : "0",
                    zIndex : 1
                }}>
                    <TextLogo className={'splash-screen'} />
                </div>
            }
        </>
    )
}

export default SplashScreen