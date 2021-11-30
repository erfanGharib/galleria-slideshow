// variables , array and objects put here

// let art_info_$html,header_$html, image_grid_$html, progress_bar_$html, image_overview_$html;
// load project components
let header_$html = fetch("/components/header.html").then((res)=> res.text());
let art_info_$html = fetch("/components/art-info.html").then((res)=> res.text());
let image_grid_$html = fetch("/components/image-grid.html").then((res)=> res.text());
let progress_bar_$html = fetch("/components/progress-bar.html").then((res)=> res.text());
let image_overview_$html = fetch("/components/image-overview-template.html").then((res)=> res.text());

export default header_$html;
export {art_info_$html, image_grid_$html, progress_bar_$html, image_overview_$html};