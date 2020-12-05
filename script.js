const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0
//in milliseconds
let int = setInterval(blurring, 0.3);

//text fades out as loading percentage gets closer to 100
function blurring(){
    load++
    if(load > 99 ){
        clearInterval(int);
    }
    loadText.innerText = `${load}%`;
    loadText.style.opacity = scale(load, 0 , 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers

//map loading to opacity: 
//num = load, 
// interval: in_min = 0, in_max = 100, 
//opacity: out_min = 100, out_max = 0
const scale = (num, in_min, in_max, out_min, out_max) => {
    return(num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

