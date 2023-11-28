let stars = document.getElementById("stars1");
let moon = document.getElementById("moon2");
let mountains3 = document.getElementById("mountains3");
let mountains4 = document.getElementById("mountains4");
let river5 = document.getElementById("river5");
let boat6 = document.getElementById("boat6");
let nouvil = document.querySelector(".nouvil");

window.onscroll = function(){
    let value = scrollY;
    console.log(value)
    stars.style.left = value + 'px';
    moon.style.top = value*4 + 'px';
    mountains3.style.top = value*2 + 'px';
    mountains4.style.top = value*1.5 + 'px';
    river5.style.top = value + 'px';
    boat6.style.top = value + 'px';
    boat6.style.left = value*3 + 'px';
    nouvil.style.fontSize = value + 'px';
    if(value >= 90){
        nouvil.style.fontSize = 90;
        nouvil.style.position = "fixed";
        if(value >= 532){
            nouvil.style.display = "none";

        }else{
            nouvil.style.display = "block";
        }
        if(value >= 150){
            document.querySelector(".main").style.background = "#00008b32"
        }
    }
}