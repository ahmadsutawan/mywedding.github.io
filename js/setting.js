const color = [
    {
        name : 'pink',
        code : '#ff09ad',
        url  : 'css/skins/pink.css'
    },
    {
        name : 'blue',
        code : '#12b4ff',
        url  : 'css/skins/blue.css'
    },
    {
        name : 'green',
        code : '#08dfcd',
        url  : 'css/skins/green.css'
    },
    {
        name : 'red',
        code : '#fc1616',
        url  : 'css/skins/red.css'
    },
    {
        name : 'yellow',
        code : '#f0e002',
        url  : 'css/skins/yellow.css'
    }
]

$(document).ready(function(){

    setColors();
    function setColors(){
        for(let i=0; i<color.length; i++){
            const span = document.createElement("span");
            span.style.backgroundColor = color[i].code;
            $(".colors").append(span);
        }
    }
    $(".colors span").click(function(){
        const index = $(this).index();
        $(".alternate-style").attr("href",color[index].url);
    });

    // theme 
    $(".theme-mode").change(function(){
        if($(this).val() == "light"){
            $("body").removeClass("dark")
        }else{
            $("body").addClass("dark")
        }
    });

    // toglle setting
    $(".s-toggle-btn").click(function(){
        $(".setting").toggleClass("open");
    });

});