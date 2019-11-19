function activeTab(e, id) {
    $(".nav-link").removeClass('active')
    $(e.currentTarget).addClass('active')
}

function removeTab(e) {

    const selfContainer = $(e.currentTarget).parent().parent()
    if ($(".nav-link:not('.tmpl-nav-link')").length === 2)
        selfContainer.prev().addClass('active')
    else
        selfContainer.next().addClass('active')
    selfContainer.remove()
    delete selfContainer
}

addNewTab()

$("#add-tab-btn").click(function () {
    addNewTab()
})

function addNewTab() {
    const id = Math.random()
    const newTab = $(".tmpl-nav-link").clone().click((e) => activeTab(e, id))

    newTab.removeClass(['d-none', 'tmpl-nav-link'])
    newTab.attr('id', id)
    //first tab auto active
    if ($('.nav>.nav-link').length == 0)
        newTab.addClass("active")
    $("#add-tab-btn").before(newTab)
    delete id
}

function searchURL(e) {
    //enter to search
    if (e.keyCode === 13) {
        let url = $("#search-bar").val()

        if (url.indexOf("http://") == -1 &&
                url.indexOf("https://") == -1)
            url = "http://" + url

        $("#web-content").attr('src', url)
        delete url
    }
}