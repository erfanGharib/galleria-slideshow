import image_data_$data, {image_overview_template_$d_html} from "../js/variable.js";
// make image overview template dynamic
image_data_$data.then((data)=> {
    return (`
        <figure class="img-box mb-6 w-74 relative">
            <img
                class="art-img"
                src="${data[img_data_num].src}" 
                alt="${data[img_data_num].image_name}"
            >
            <figcaption class="art/author-name w-74">
                <h1 class="capitalize font-bold text-5md">${data[img_data_num].image_name}</h1>
                <h3 class="capitalize">${data[img_data_num].author_name}</h3>
            </figcaption>
        </figure>
    `)
});

export default image_overview_template_$d_html;