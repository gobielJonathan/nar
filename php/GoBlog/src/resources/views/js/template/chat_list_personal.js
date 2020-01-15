let latestUsername = ""
let printAvatar = true

export default function ChatListPersonalTemplate(data) {
    const auth = sessionStorage.getItem("auth") == null ? null : JSON.parse(sessionStorage.getItem("auth"))
    const isMe = auth != null ? auth.username == data.username : false

    printAvatar = latestUsername !== data.username
    latestUsername = data.username

    if (data == null || data.length == 0)
        return `
            <div class="d-flex justify-content-center align-items-center flex-column h-100" id="empty">
                <img src="../../../public/assets/empty-icon.png" alt="">
                <small class="text-center">Empty</small>
            </div>
        `

    return `
    <div class="d-flex align-items-end flex-column my-2 list-chat-detail ${isMe ? "" : "other"}">
        ${
        printAvatar ?
            `
                <div class="chat-avatar d-flex">
                    <img src="${data.picture_path}" class="img-fluid" alt="">
                    <span class="ml-2 text-truncate">${data.username}</span>
                </div>
            ` : ""
        }
        <div class="d-flex flex-column chat-bubble-wrapper">
            <div class="chat-bubble">
                ${data.content}
            </div>
            <small class="chat-time">${data.created_at}</small>
        </div>
    </div>
`
}