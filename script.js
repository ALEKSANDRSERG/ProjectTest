const viewport = document.querySelector("#viewport").offsetWidth;
const btnNext = document.querySelector("#next");
const btnPrev = document.querySelector("#prev");
let slider = document.querySelector(".slider");
let i =0;



btnNext.addEventListener("click", function(){
if(i>=3){
    i=0;  
}else{
    i++;
}
slider.style.left = -i*viewport + "px";
});



btnPrev.addEventListener("click", function(){
    if(i>0){
        i--;
    }else{
         i=3;
    }
    slider.style.left = -i*viewport + "px";
});