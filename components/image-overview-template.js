import image_data_$data from "../js/variable.js";
// make image overview template dynamic
let image_overview_template_$d_html;
let image_overview_template_$func =(image_data_num)=>{
    return image_overview_template_$d_html = image_data_$data.then((data) => {
        return (`
            <figure class="img-box mb-6 w-74 relative">
                <img
                    class="art-img"
                    src="${data[image_data_num].src}" 
                    alt="${data[image_data_num].image_name}"
                >
                <figcaption class="art/author-name w-74">
                    <h1 class="capitalize font-bold text-5md">${data[image_data_num].image_name}</h1>
                    <h3 class="capitalize">${data[image_data_num].author_name}</h3>
                </figcaption>
            </figure>
        `);
    });
};
export default image_overview_template_$func;
export {image_overview_template_$d_html};