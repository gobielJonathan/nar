<style>
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
        border-radius: 0 12px 12px 12px;

        padding: 0.7rem;
        max-width: 85%;
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

    .list-chat-detail.other> div > .chat-bubble {
        border-radius: 12px 0 12px 12px;

        margin-right: unset;
        margin-left: auto;
        background-color: #f1f1f1;
        color: rgba(0, 0, 0, .7);
    }


    .list-chat-detail.other>.chat-avatar{
        margin-left: auto;
    }

    .list-chat-detail.other>div>.chat-time {
        margin-left: auto;
    }
</style>
<div class="chat-personal-list px-3 py-2">

    <div class="d-flex align-items-end flex-column my-2 list-chat-detail other">
        <div class="chat-avatar d-flex">
            <img src="https://lorempixel.com/300/300/?65234" class="img-fluid" alt="">
            <span class="ml-2">Gobiel</span>
        </div>

        <div class="d-flex flex-column">
            <div class="chat-bubble">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, reprehenderit earum nobis
                doloribus,
                magni, harum repudiandae eius nihil similique possimus maiores quod tempora eos tenetur
                voluptates
                sed ea velit molestiae!
            </div>
            <small class="chat-time">12:00pm</small>
        </div>
    </div>

    <div class="d-flex align-items-end flex-column my-2 list-chat-detail">
        <div class="chat-avatar d-flex">
            <img src="https://lorempixel.com/300/300/?65234" class="img-fluid" alt="">
            <span class="ml-2">Gobiel</span>
        </div>

        <div class="d-flex flex-column">
            <div class="chat-bubble">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quo, reprehenderit earum nobis
                doloribus,
                magni, harum repudiandae eius nihil similique possimus maiores quod tempora eos tenetur
                voluptates
                sed ea velit molestiae!
            </div>
            <small class="chat-time">12:00pm</small>
        </div>
    </div>

</div>