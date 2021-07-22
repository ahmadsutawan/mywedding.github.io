$(window).on("load", function(){

    // nama tamu undangan
    function getParameterByName(nama, url = window.location.href) {
        nama = nama.replace(/[\[\]]/g, '\\$&');
        var regex = new RegExp('[?&]' + nama + '(=([^&#]*)|&|#|$)'),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }
        document.querySelector('#nama').innerHTML = getParameterByName('nama');

    // preloader
    $(".preloader").fadeOut(600);

    // nav toggle
    $(document).ready(function(){
        $(".hamburger-btn").click(function(){
            $(".navbar .nav").slideToggle();
        })
        $(".navbar .nav a").click(function(){
            if($(window).width() < 768){
                $(".navbar .nav").slideToggle();
            }
        })
    });

    //fixed navbar
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $(".navbar").addClass("fixed");
        }else{
            $(".navbar").removeClass("fixed");
        }
    });

    // scrollit.js
    $.scrollIt({
        topOffset: -30
    });

});


const nav =document.querySelector("#nav1");
const coup = document.querySelector(".coup");
nav1.addEventListener('click', () => {
    coup.classList.add("slide-mode");
});
nav0.addEventListener('click', () => {
    coup.classList.remove("slide-mode");
});

// popup
const popup = document.querySelector('.popup');
const close = document.querySelector('.music');
window.onload = function(){
    setTimeout(function(){
        popup.style.display = "block";
    },1000);
}
close.addEventListener('click', () => {
    popup.style.display = "none";
})
// audio
$(".music").click(function(){
    if($(this).hasClass("pause")){
        $("#audio")[0].play();
    }else{
        $("#audio")[0].pause();
    }
    $(this).toggleClass("pause");
});