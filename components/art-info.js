import image_data_$data from "../js/variable.js";
// make art info dynamic
let art_info_$d_html;
let art_info_$func =(image_data_num)=>{
    art_info_$d_html = image_data_$data.then((data) => {
        return (`
            <div class="flex justify-center xsm:justify-between w-12/13 my-auto overflow-y-scroll xsm:overflow-y-visible flex-wrap lg:h-75 pt-10 pb-24 lg:py-0 h-full">
                <figure class="w-12/13 sm:w-2/3 xl:w-1/2 lg:h-full md:h-96 sm:h-70 items-center justify-start relative flex">
                    <div class="justify-center md:justify-start items-start flex">
                        <span class="z-0 relative h-full w-11/12">
                            <img class="dynamic-image-size" src="${data[image_data_num].src}" alt="${data[image_data_num].image_name}">
                            <button class="bg-gray-900 bg-opacity-90 hover:bg-opacity-100 p-3 absolute top-3 sm:top-auto sm:bottom-3 left-3 text-xs flex justify-evenly items-center text-white">
                                <i class="full-screen-btn w-4 h-4"></i>
                                <span class="mt-1 ml-2">VIEW IMAGE</span>
                            </button>
                        </span>
                
                        <div class="flex sm:justify-end justify-start items-end absolute sm:bottom-auto bottom-0 h-32 transform lg:-translate-y-4 lg:h-56 w-12/13">
                            <figcaption class="bg-white transform pl-5 pb-3 pr-5 pt-5 sm:pb-4 sm:pr-0 sm:pt-0 lg:pl-14 lg:pb-16 absolute h-10 sm:h-32 sm:w-34 z-10 lg:h-52 lg:w-52 flex flex-col">
                                <h1 class="font-bold tracking-tighter text-3xl lg:text-6xl">${data[image_data_num].image_name}</h1>
                                <h6 class="mt-3 text-black break-normal text-opacity-50 font-bold">${data[image_data_num].author_name}</h6>
                            </figcaption>
                        </div>
                    </div>
                </figure>

                <div class="w-96 pt-16 sm:pt-0 flex justify-end relative my-auto h-96">
                    <h1 class="lg:text-9xl text-8xl lg:transform img-year-translate font-bold text-black text-opacity-5 absolute z-0">
                        ${data[image_data_num].year}
                    </h1>
                    <p class="text-black img-info-translate w-76 text-opacity-50 font-bold absolute z-10">
                        ${data[image_data_num].informations}
                    </p>
                </div>
            </div>
        `)
    })
};
export default art_info_$func;
export {art_info_$d_html};