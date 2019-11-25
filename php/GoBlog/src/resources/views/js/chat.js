import ChatListPersonalTemplate from "../js/template/chat-list-personal.js";

let conn = new WebSocket('ws://localhost:8090');

conn.onopen = function(e) {
    console.log("Connection established!");
};

conn.onmessage = function(e) {
    const data = JSON.parse(e.data)
    let chatsHTML = "";

    if(data.chats instanceof Array)
        data.chats.forEach(chat => {
            chatsHTML += ChatListPersonalTemplate(chat)    
        });
    else 
        chatsHTML = ChatListPersonalTemplate(data)
    $(".chat-personal-list").append(chatsHTML)
};

$("#input-chat").keypress(function (e) {
    if (e.key === "Enter") {
        const auth = sessionStorage.getItem("auth") != null ? JSON.parse(sessionStorage.getItem("auth")) : null;
        if(auth == null){
            swal({
                title: "Not Authenticated",
                text : "Please login first...",
                icon : "warning"
            })
            return 
        }

        const msg = {
           ...auth, 
           content : $(this).val()
        }
        conn.send(JSON.stringify(msg))
    }
})
