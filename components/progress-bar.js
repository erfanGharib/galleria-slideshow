import {image_data_$data} from "../js/main.js";
// make progressbar dynamic 
let progress_bar_$d_html;
let progress_bar_$func =(image_data_num)=>{
    progress_bar_$d_html = image_data_$data.then((data) => {
        return (`
            <div class="w-full h-20 flex flex-col">
                <span class="h-0.5 w-full block bg-gray-100">
                    <span id="progressBar-child" class="h-0.5 block w-0 bg-gray-600"></span>
                </span>
    
                <div class="flex justify-between w-full items-center px-6 pt-3.5">
                    <span class="capitalize flex flex-col justify-start items-start">
                        <h2 class="font-bold text-5md">${data[image_data_num].image_name}</h2>
                        <h3 class="h-5 mr-auto">${data[image_data_num].author_name}</h3>
                    </span>
                    <span class="flex">
                        <button class="forward-backward-btn rounded-md p-2 hover:bg-opacity-10 flex hover:bg-gray-900 w-9 h-9 mr-4"><i class="backward-btn w-5 h-5"></i></button>
                        <button class="forward-backward-btn rounded-md p-2 hover:bg-opacity-10 flex hover:bg-gray-900 w-9 h-9"><i class="forward-btn w-5 h-5"></i></button>                
                    </span>
                </div>
            </div>
        `);
    });
};
export default progress_bar_$func;
export { progress_bar_$d_html };