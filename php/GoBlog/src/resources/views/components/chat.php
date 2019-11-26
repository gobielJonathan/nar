<style>
    .chat,
    .chat-popup {
        position: fixed;
        right: 20px;
        border-radius: 20px;
    }

    .chat {
        z-index: 5;
        padding: 8px 16px;
        color: white;
        background-color: #007bff;
        bottom: 20px;
    }

    .chat-popup.show {
        transform: rotateX(0deg);
        opacity: 1;
    }

    .chat-popup {
        transform-style: preserve-3d;
        transition: all 0.75s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        opacity: 0;
        transform: rotateX(-90deg);
        width: 600px;
        height: 450px;
        box-shadow: 0 0 8px 1px rgba(0, 0, 0, 0.1);
        background-color: white;
        z-index: 5;
        bottom: 20px;
    }

    .chat-popup .chat-general {
        border-right: 1px solid #ddd;
        height: inherit;
    }

    .chat-popup .chat-header {
        height: 70px;
    }

    .chat-popup .list-chat-general {
        height: calc(100% - 70px);
        overflow-y: auto;
    }

    .chat-popup .list-chat-general .list-chat {
        display: flex;
        align-items: center;
    }

    .chat-popup .list-chat-general .list-chat .chat-username {
        border-bottom: 1px solid #ddd;
    }

    .chat-popup .chat-detail {
        border-top-right-radius: 20px;
        height: inherit;
    }

    .chat-popup .chat-detail .chat-personal {
        border-top-right-radius: 20px;
        height: inherit;
    }

    .chat-popup .chat-detail .chat-personal-header {
        box-shadow: 0 4px 8px 1px rgba(0, 0, 0, 0.1);
        border-top-right-radius: 20px;
        height: 64px;
    }

    .chat-popup .chat-detail .chat-textbox {
        height: 50px;
        border-bottom-right-radius: 20px;
    }

    .chat-popup .chat-detail .chat-textbox .input-group {
        box-shadow: 0 -2px 8px 1px rgba(0, 0, 0, 0.1);
        border-bottom-right-radius: 20px;
    }

    .chat-popup .chat-detail .chat-textbox .input-group .form-control {
        border-bottom-left-radius: 20px;
    }

    @media screen and (max-width: 568px) {

        .chat,
        .chat-popup {
            display: none;
        }
    }

    .chat-personal-list {
        height: calc(100% - 114px);
        overflow-y: auto;
        position: relative;
    }

    .chat-personal-list {
        height: calc(100% - 114px);
        overflow-y: auto;
        position: relative;
    }

    .chat-bubble {
        max-width: 300px;
        word-wrap: break-word;
        border-radius: 0 12px 12px 12px;
        padding: 0.7rem;
        background-color: #007bff;
        color: white;
    }

    .chat-avatar {
        margin-right: .25rem;
        margin-bottom: .5rem;
        align-self: flex-start;
    }

    .chat-avatar img {
        border-radius: 50%;
        width: 36px;
        height: 36px;
        border-radius: 50%;
    }

    .list-chat-detail> .chat-bubble-wrapper{
        margin-right:auto;
    }

    .list-chat-detail.other>div>.chat-bubble {
        border-radius: 12px 0 12px 12px;
        background-color: #f1f1f1;
        color: rgba(0, 0, 0, .7);
        margin-left : auto;
    }

    .list-chat-detail.other> .chat-bubble-wrapper{
        margin-right: unset;
        margin-left: auto;
    }

    .list-chat-detail.other>.chat-avatar {
        margin-left: auto;
    }

    .list-chat-detail.other>div>.chat-time {
        margin-left: auto;
    }
</style>

<div class="chat hover" onclick="onToggleChatPopup()">
    <i class="fa fa-comment" aria-hidden="true"></i>
    <span class="ml-2">
        Chat
    </span>
</div>

<div class="chat-popup">

    <div class="chat-detail d-flex">

        <!-- <div class="chat-empty m-auto d-flex justify-content-center flex-column">
            <img src="../../../assets/empty.png" class="img-fluid" alt="">
        </div> -->

        <div class="chat-personal w-100">
            <div class="chat-personal-header w-100 d-flex align-items-center px-3 py-2">
                <div class="chat-username ml-2 w-100 pb-2"><b>You ask?, We answer.</b></div>

                <div class="chat-personal-options ml-auto d-flex align-items-center">
                    <button type="button" class="btn bg-transparent" onclick="onToggleChatPopup()">
                        <i class="fa fa-times" aria-hidden="true"></i>
                    </button>
                </div>
            </div>

            <div class="chat-personal-list px-3 py-2">

            </div> 


            <div class="chat-textbox">
                <div class="input-group h-100">
                    <input type="text" name="" id="input-chat" class="form-control border-0 h-100" placeholder="Let's talk..." aria-describedby="sufixId">
                    <span class="input-group-addon color-primary px-3 d-flex justify-content-center align-items-center hover" id="sufixId">
                        <i class="fa fa-paper-plane" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>

<script>
    function onToggleChatPopup() {
        $(".chat-popup").toggleClass("show")
    }
</script>

<script src="./js/chat.js" type="module"></script>