// variables , array and objects put here 
let image_grid_$html = fetch("/components/image-grid.html").then((res)=> res.text()); // load project components
let image_data_$data = fetch("/data/image-data.json").then((res)=> res); // load json data
let image_overview_template_$d_html;

export default image_data_$data;
export {image_overview_template_$d_html};