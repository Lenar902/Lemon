window.onload = function() {
    var menu = document.getElementsByClassName("menu__list")[0];		
    var button = document.getElementsByClassName("open_menu")[0];			
    var lock = document.getElementsByTagName("body")[0];
    var main = document.querySelector(".main");
    var images = document.querySelectorAll(".slider-line img");
    var sliderline = document.querySelector(".slider-line");
    
    var count = 0;
    var widt;
    var timer;

    let preloader = document.querySelector("#preloader");
    let timerPr = setTimeout(function() {       
        preloader.style.display = 'none';
        clearTimeout(timerPr);       
      
    }, 1000);


    function init() {
        widt = document.querySelector('.main__phone').offsetWidth;
        console.log(widt);
        main.style.height = 'auto';
        sliderline.style.width = widt * images.length + "px";
        images.forEach(item => {
            item.style.width = widt + 'px';
            item.style.maxHeight = '445px';
            item.style.height = 'auto';
            item.style.objectfit = 'cover';
        });
    }

    function autoSlider() {
        timer = setTimeout(function() {
            count++;
            if (count >= images.length) {
                count = 0;
                clearTimeout(timer);
            }
            rollSlider();
            autoSlider();
        }, 3000);
    }

    function rollSlider() {
        sliderline.style.transform = 'translate(-' + count * widt + 'px)';
    }

    button.addEventListener("click", function(){
        button.classList.toggle("active");
        menu.classList.toggle("active");				
        lock.classList.toggle("lock");
    }, false);

    window.addEventListener('resize', init);
    init();
    autoSlider();  
    
}
