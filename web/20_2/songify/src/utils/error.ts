import Swall from 'sweetalert2'

export type Alert = 'error' | 'info' | 'success' | 'warning'
export type IAlert = {
    title: string,
    message: string,
    type: Alert
}

export default function showAlert(alert: IAlert) {
    Swall.fire({
        position: 'center',
        icon: alert.type,
        title: alert.title,
        text: alert.message,
        showConfirmButton: false,
        timer: 1500,
    })
}

export function showMixAlert(alert: IAlert) {
    const Toast = Swall.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
        onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swall.stopTimer)
            toast.addEventListener('mouseleave', Swall.resumeTimer)
        }
    })

    Toast.fire({
        icon: alert.type,
        title: alert.title
    })
}