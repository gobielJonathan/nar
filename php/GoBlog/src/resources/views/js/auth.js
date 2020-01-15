import CardAccount from "./template/card_account_template.js";

$(document).ready(function () {
    const user = sessionStorage.getItem('auth') ? JSON.parse(sessionStorage.getItem('auth')) : null

    if (user != null) {
        $("#main-row").prepend(CardAccount(user))
        $(".gedf-main").removeClass("col-md-9")
        $(".gedf-main").addClass("col-md-6")
        $("#auth-nav").hide()
    }

    $("#logout").click(function () {
        sessionStorage.clear()
        location.reload()
    })
    

})