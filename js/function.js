import image_data_$data, { image_grid_$html } from "./variable.js";
import main_$dom from "./main.js";
import art_info_$func, { art_info_$d_html } from "../components/art-info.js";
import progress_bar_$func, { progress_bar_$d_html } from "../components/progress-bar.js";
import image_overview_template_$func, { image_overview_template_$d_html } from "../components/image-overview-template.js";

let image_grid_div_$dom;
let image_overview_$dom;

let load_image_overview_$func =()=>{
    if(main_$dom.innerHTML==='') image_grid_$html.then((html_code)=> main_$dom.innerHTML=html_code); 
    image_grid_$html.then(()=> image_grid_div_$dom = document.querySelectorAll('.img-grid-div'))
    .then(()=>{
        image_data_$data.then((data)=>{
        let element_num=0;
        let num=2;

        for(let data_arr=0; data_arr<data.length; data_arr++) {
            image_overview_template_$func(data_arr);
            image_overview_template_$d_html.then((data)=>{
                if(element_num===4) element_num=0;   
                
                image_grid_div_$dom[element_num].innerHTML+=data;
                if(data_arr==num) {
                    num+=3;
                    element_num++;
                }
            })
            .then(()=> {
                image_overview_$dom = document.querySelectorAll('.img-box');;
                image_overview_$dom[data_arr].addEventListener(
                    'click',function () {
                        load_art_info_$func(this);
                    }
                );
            });
        }
        })
    })
}

let load_art_info_$func =(this_)=>{
    let image_overview_$arr = Array.from(image_overview_$dom);

    art_info_$func(image_overview_$arr.indexOf(this_));
    art_info_$d_html.then((data)=>{
        main_$dom.innerHTML=data;
        progress_bar_$func(image_overview_$arr.indexOf(this_));
        progress_bar_$d_html.then((data)=>{
            main_$dom.innerHTML+=data;
        })
        .then(()=>{
            document.querySelector('#veiw-btn').addEventListener('click', veiw_image_$func);
        });
    })
}

let veiw_image_$func =()=> {
    let art_info_img_src_$dom = document.querySelectorAll('img')[0].src;
    document.body.innerHTML+=(`
        <div class="absolute w-full h-full bg-black bg-opacity-80 z-20 flex justify-center items-center">
            <span class="flex flex-col w-1/2">
                <button
                    onclick="this.parentElement.parentElement.remove()" 
                    class="x-btn w-8 h-8 rounded-md p-3 mb-5 hover:bg-white hover:bg-opacity-50">
                </button>
                <img src="${art_info_img_src_$dom}">
            </span>
        </div>
    `) 
    document.querySelector('#veiw-btn').addEventListener('click', veiw_image_$func)
}

let start_stop_slideshow =()=> {
    progressBar
    art_info_$func(0);
    art_info_$d_html.then((data)=>{
        main_$dom.innerHTML=data;
    }).then(()=>{
        document.querySelector('#veiw-btn').addEventListener('click', veiw_image_$func)
    });
}
export default load_image_overview_$func;
export {};