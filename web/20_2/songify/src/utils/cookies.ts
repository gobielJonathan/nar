export class Cookies {

    public static store(key: string, value: string) {
        document.cookie = `${key}=${btoa(value)}`
    }

    public static get(key: string): string | undefined {
        
        const cookie = document.cookie.split(";")
            .find((cookie: string) => {
                const [keyCookie] = cookie.split("=")
                if (keyCookie === key)
                    return cookie
            })

        if (cookie) {
            const [_, data] = cookie.split("=")
            return atob(data)
        }
        return undefined
    }
}