export default function PaginateTemplate(page) {
    let pageHTML = `<nav aria-label="Page navigation">
                <ul class="pagination justify-content-center">
            ${
        page.first ?
            `<li class="page-item">
                        <a class="page-link"  href="${page.first}" aria-label="Previous">
                            <span aria-hidden="true">&laquo;</span>
                            <span class="sr-only">First</span>
                        </a>
                    </li> `
            : ""
        } `


    page.pages.forEach(p => {
        pageHTML += `
            <li class="page-item ${p.current_page ? 'active' : ''}"><a class="page-link"  href="${p.url}">${p.page}</a></li>
        `
    });

    pageHTML += `
            <li class="page-item">
                    <a class="page-link" href="${page.last}" aria-label="Next" >
                        <span aria-hidden="true">&raquo;</span>
                        <span class="sr-only">Last</span>
                    </a>
                </li>
            </ul>
        </nav>`

    return pageHTML
}