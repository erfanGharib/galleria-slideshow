import image_data_$data from "../js/variable.js";
// make image overview template dynamic
let image_overview_template_$d_html = image_data_$data.then((data) => {
    return (`
        <figure class="img-box mb-6 w-74 relative">
            <img
                class="art-img"
                src="${data[0].src}" 
                alt="${data[0].image_name}"
            >
            <figcaption class="art/author-name w-74">
                <h1 class="capitalize font-bold text-5md">${data[0].image_name}</h1>
                <h3 class="capitalize">${data[0].author_name}</h3>
            </figcaption>
        </figure>
    `)
});

export default image_overview_template_$d_html;