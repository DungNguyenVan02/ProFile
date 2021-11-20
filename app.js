// slide auto
var counter = 1;
setInterval(function() {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 5) {
        counter = 1;
    }
},5000);
const $ = document.querySelector.bind(document)
var taskbar = $('.side__bars');
window.onscroll = function() {
    if (document.documentElement.scrollTop > 350 || document.body.scrollTop > 350){
        taskbar.style.position = "fixed";
        taskbar.style.top = 0;
        taskbar.style.width = "163.32px" ;
        taskbar.style.marginTop = "30px" ;
        taskbar.style.transition = "all 0.3s linear" ;
    } else {
        taskbar.style.position = "static";
        taskbar.style.marginTop = 0 ;
        taskbar.style.transition = "all 0.3s linear" ;
    }
}
