// import ChatListPersonalTemplate from "../js/template/chat_list_personal.js";

// let conn = new WebSocket('ws://localhost:8090');

// conn.onopen = function (e) {
//     console.log("Connection established!");
// };

// conn.onmessage = function (e) {
//     const data = JSON.parse(e.data)

//     if (data.key === "chats") {
//         let chatsHTML = createChatList(data);
//         $(".chat-personal-list").append(chatsHTML)
//     }

//     $(".chat-personal-list").animate({
//         scrollTop: $(".chat-personal-list").prop("scrollHeight")
//     }, 50)

// };


// $("#input-chat").keypress(function (e) {
//     if (e.key === "Enter") {
//         const auth = sessionStorage.getItem("auth") != null ? JSON.parse(sessionStorage.getItem("auth")) : null;
//         if (auth == null) {
//             swal({
//                 title: "Not Authenticated",
//                 text: "Please login first...",
//                 icon: "warning"
//             })
//             return
//         }

//         const msg = {
//             ...auth,
//             content: $(this).val()
//         }

//         $(this).val('')
//         conn.send(JSON.stringify(msg))
//     }
// })


// function createChatList(data) {
//     let chatsHTML = "";

//     if (data.chats) {
//         if (data.chats.length == 0) {
//             chatsHTML += ChatListPersonalTemplate(data.chats);
//         } else {
//             data.chats.reverse();
//             data.chats.forEach(chat => {
//                 chatsHTML += ChatListPersonalTemplate(chat);
//             });
//         }
//     }
//     else {
//         $("#empty").removeClass('d-flex').addClass('d-none')
//         if(sessionStorage.getItem('auth')){
//             if (data.username !== JSON.parse(
//                 sessionStorage.getItem("auth")
//             ).username) {
//                  Snackbar.show({text: `${data.username} sent a message`,pos: 'top-center'})
//             }
//         }
//         chatsHTML = ChatListPersonalTemplate(data);
//     }
//     return chatsHTML;
// }


// let currentPage = 1
// let canFetch = true

// function fetch() {
//     $.getJSON(`http://localhost:8000/src/api/get-chat.php?page=${currentPage += 1}`, function (data) {
//         const chats = data.data.data
//         if (chats.length == 0) {
//             canFetch = false
//         } else {
//             const chatHTML = createChatList({ "chats": chats })

//             $(".chat-personal-list").scrollTop(
//                 $(".chat-personal-list").prop("scrollHeight") / 3
//             )
//             $(".chat-personal-list").prepend(chatHTML)
//         }

//     })
// }

// $(".chat-personal-list").scroll(function () {
//     if ($(this).prop("scrollTop") == 0) {
//         if (canFetch)
//             fetch()
//     }
// })