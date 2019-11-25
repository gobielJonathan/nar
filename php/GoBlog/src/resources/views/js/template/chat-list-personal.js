export default function ChatListPersonalTemplate(data) {
    const auth = sessionStorage.getItem("auth") == null ? null : JSON.parse(sessionStorage.getItem("auth"))
    const isMe = auth != null ? auth.username == data.username : false

    return `
    <div class="d-flex align-items-end flex-column my-2 list-chat-detail ${isMe ? "" : "other"}">
        <div class="chat-avatar d-flex">
            <img src="${data.picture_path}" class="img-fluid" alt="">
            <span class="ml-2 text-truncate">${data.username}</span>
        </div>

        <div class="d-flex flex-column">
            <div class="chat-bubble">
                ${data.content}
            </div>
            <small class="chat-time">${data.created_at}</small>
        </div>
    </div>
`
}