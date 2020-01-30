import CardAccount from "./template/card_account_template.js";
import { BASE_API_URL } from "./constant.js";

$(document).ready(function () {

    getFollow()

})

$("#main-row").on('click', $("#card-account #logout"), function (event) {
    if ($(event.target).attr('id') === "logout") {
        sessionStorage.clear()
        location.reload()
    }
})

export async function getFollow() {
    const user = sessionStorage.getItem('auth') ? JSON.parse(sessionStorage.getItem('auth')) : null

    if (user != null) {
        const { data } = await $.getJSON(`http://${BASE_API_URL}/get-follow.php?id=${user.id}`)

        $("#main-row").children("#card-account").remove()
        $("#main-row").prepend(CardAccount(user, data))
        $("#auth-nav").hide()
    }

}