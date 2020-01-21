import CardAccount from "./template/card_account_template.js";

async function getFollow(id) {
    const {data} = await $.getJSON(`http://localhost:8000/src/api/get-follow.php?id=${id}`)
    return data
}

$(document).ready( async function () {
    const user = sessionStorage.getItem('auth') ? JSON.parse(sessionStorage.getItem('auth')) : null

    if (user != null) {
        const data = await getFollow(user.id)

        $("#main-row").prepend(CardAccount(user, data))
        $(".gedf-main").removeClass("col-md-9")
        $(".gedf-main").addClass("col-md-6")
        $("#auth-nav").hide()
    }

    $("#logout").click(function () {
        sessionStorage.clear()
        location.reload()
    })
    

}) 