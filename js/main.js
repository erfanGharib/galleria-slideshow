"use strict";

/*
    * in this project we use a variables structor to
    understand what will be put in variables.

    _$obj = object
    _$arr = array
    _$data = xml/json data
    _$html = html code - components
    _$d_html = dynamic html code - components
    _$func = es6 functions
*/

import load_image_overview_$func from "./function.js";

// load dom
let main_$dom = document.querySelector('main');
let start_stop_slideshow_$dom = document.querySelector('#start-stop-slideshow');
let image_grid_$html = fetch("/components/image-grid.html").then((res)=> res.text()); // load project components
let image_data_$data = fetch("/data/image-data.json").then((res)=> res.json()); 

export default main_$dom;
export { 
    start_stop_slideshow_$dom,
    image_data_$data, image_grid_$html
};

load_image_overview_$func();