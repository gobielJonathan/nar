import ChatListPersonalTemplate from "../js/template/chat-list-personal.js";



let conn = new WebSocket('ws://localhost:8090');

conn.onopen = function(e) {
    console.log("Connection established!");
};

conn.onmessage = function(e) {
    const data = JSON.parse(e.data)
    console.log(data);
    let chatsHTML = "";

    data.chats.forEach(chat => {
        chatsHTML += ChatListPersonalTemplate(chat)    
    });
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
            chat_user : auth.id,
            chat_message : $(this).val()
        }
        conn.send(JSON.stringify(msg))
    }
})
