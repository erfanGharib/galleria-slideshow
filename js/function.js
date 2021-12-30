import main_$dom, { 
    start_stop_slideshow_$dom, 
    image_grid_$html, image_data_$data
} from "./main.js";
import art_info_$func, { art_info_$d_html } from "../components/art-info.js";
import progress_bar_$func, { progress_bar_$d_html } from "../components/progress-bar.js";
import image_overview_template_$func, { image_overview_template_$d_html } from "../components/image-overview-template.js";

let image_grid_div_$dom;
let image_overview_$dom;
let forward_backward_btn_$dom;
let progress_bar_timeout;
let progress_bar_child_$dom;
let progress_bar_1_$d_html;
let slideshow_status=1;

// load all image data from json files
let load_image_overview_$func =()=>{
    start_stop_slideshow_$dom.addEventListener('click', ()=>{
        start_stop_slideshow_$func(slideshow_status,0);
    });

    // add image grid html code one time
    if(main_$dom.innerHTML==='') image_grid_$html.then((html_code)=> main_$dom.innerHTML=html_code); 
    // put image grid dom in variable when loaded 
    image_grid_$html.then(()=> image_grid_div_$dom = document.querySelectorAll('.img-grid-div'))
    .then(()=>{
        // after loading image grid put image overview in page
        image_data_$data.then((data)=>{
            /*
                in image grid we have 4 child element
                and we have to put image overview in them 3 by 3 or more
                to make a responsive grid view
            */
            let element_num=0;
            let num=2;

            for(let data_arr=0; data_arr<data.length; data_arr++) {
                /*
                    this type of functions and var that hase been loaded from
                    other html and js files is for having an SPA page
                */ 
                image_overview_template_$func(data_arr);
                image_overview_template_$d_html.then((data)=>{
                    if(element_num===4) element_num=0;   
                    
                    image_grid_div_$dom[element_num].innerHTML+=data;
                    if(data_arr==num) {
                        num+=3;
                        element_num++;
                    }
                })
                // set event listener on all image overview when loaded
                .then(()=> {
                    image_overview_$dom = document.querySelectorAll('.img-box');
                    image_overview_$dom[data_arr].addEventListener(
                        'click',function () {
                            load_art_info_$func((Array.from(image_overview_$dom)).indexOf(this));
                        }
                    );
                });
            }
        })
    })
}

// load art info page by image onclick
let load_art_info_$func =(this_)=> {
    // load art info from components
    art_info_$func(this_);
    art_info_$d_html.then((data)=>{
        main_$dom.innerHTML=data;
    });

    // load progress bar from components
    progress_bar_$func(this_);
    progress_bar_1_$d_html = progress_bar_$d_html.then((data)=>{
        main_$dom.innerHTML+=data;
        progress_bar_child_$dom = document.querySelector('#progressBar-child');

        // set event listener on "view image" button
        document.querySelector('#veiw-btn').addEventListener('click', veiw_image_$func);
        // call function to set event listener on forward and backward button
        forward_backward_btn_$dom = document.querySelectorAll('.forward-backward-btn');
        forward_backward_btn_$func();
    });
}

// view image button function
let veiw_image_$func =()=> {
    document.querySelector('#view-image-btn-img').src=document.querySelectorAll('img')[0].src;
    document.querySelector('#veiw-image-box').style.display='flex';
}

// start and stop slideshow button
let start_stop_slideshow_$func =(status_,num1)=> {
    let art_info_$dom = document.querySelector('#art-info');
    // get click status - if clicked do this
    if(status_===1) {
        if(art_info_$dom===null) {
            load_art_info_$func(num1);
        }
        start_stop_slideshow_$dom.innerHTML='stop slideshow';
    
        // go to next slide after 20 seconds
        progress_bar_timeout = setTimeout(() => {
            go_forward_backward_$func(document.querySelector('#img-name').innerHTML, 0)
        }, 20000);
    
        progress_bar_$d_html.then(()=>{
            progress_bar_child_$dom.classList.add('progressBar');
        });
        // set status to 1
        slideshow_status=0;
    }
    // if click again do this
    else if(status_===0) {
        start_stop_slideshow_$dom.innerHTML='start slideshow';
        progress_bar_child_$dom.classList.remove('progressBar');
        clearTimeout(progress_bar_timeout);
        // set status to 0
        slideshow_status=1;
    }
}

// go forward and backward function - use in art info
let go_forward_backward_$func =(this_img_name, status_)=>{
    /*
        * this_img_name get name of image that show in art info
        * status_ determine that which one of "backward", "forward" and "start slideshow"
        button clicked
    */
    image_data_$data.then((data)=>{
        /*
            set foreach method on all data to check all image name
            and compare with this_img_name
        */
        data.forEach((value, index) => {
            // status 1 for go forward when start/stop slideshow button
            if(value.image_name===this_img_name && index!==data.length-1 && status_===0) {
                load_art_info_$func(index+=1);
                start_stop_slideshow_$func(1,index);
            }

            // status 1 for go forward
            else if(value.image_name===this_img_name && index!==data.length-1 && status_===1) {
                load_art_info_$func(index+=1);
                add_progress_bar_class_$func();
            }

            // status 2 for go backward
            else if(value.image_name===this_img_name && index!==0 && status_===2) {
                load_art_info_$func(index-=1);
                add_progress_bar_class_$func();
            }

            if(value.image_name===this_img_name && index===data.length-1) {
                document.querySelector('#progressBar-child').classList.remove('progressBar');
            }
        });
    });
};

// set event listener on backward and forward button
let forward_backward_btn_$func=()=>{
    let btns_ = document.querySelectorAll('.forward-backward-btn');
    // if(document.querySelector('#progressBar-child').classList.contains('progressBar'))

    btns_[0].addEventListener('click', ()=>{
        go_forward_backward_$func(document.querySelector('#img-name').innerHTML, 2);
    });
    btns_[1].addEventListener('click', ()=>{
        go_forward_backward_$func(document.querySelector('#img-name').innerHTML, 1);
    });
}

// add progressBar css class when slideshow button clicked
let add_progress_bar_class_$func =()=>{
    progress_bar_1_$d_html.then(()=>{
        if(slideshow_status===0)
            progress_bar_child_$dom.classList.add('progressBar');
    })
}

export default load_image_overview_$func;
export {};