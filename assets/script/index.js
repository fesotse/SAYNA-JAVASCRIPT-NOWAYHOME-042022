function headerlinethrough(obj){
    obj.style.textDecoration = 'line-through';
}
function headernormal(obj){
    obj.style.textDecoration = 'none';

}
function changebtn1(obj){
    obj.style.color = "var(--white-ad-color) ";
    obj.style.fontWeight = "bold";
    obj.style.backgroundColor = "var(--primary-ad-color)";
    obj.style.boxShadow = "0px 10px 22px var(--white-ad-color)";
}
function returnbtn1(obj){
    obj.style.color = "var(--primary-ad-color)";
    obj.style.fontWeight = "normal";
    obj.style.backgroundColor = "var(--white-ad-color)";
    obj.style.boxShadow = "none";
}

function changebtn2(obj){
    obj.style.color = "var(--primary-ad-color)";
    obj.style.fontWeight = "bold";
    obj.style.backgroundColor = "var(--white-ad-color)";
    obj.style.boxShadow = "0px 10px 22px var(--white-ad-color)";
    
}
function returnbtn2(obj){
    obj.style.color = "var(--white-ad-color)";
    obj.style.fontWeight = "normal";
    obj.style.backgroundColor = "transparent";
    obj.style.boxShadow = "none"
}
function footerover(obj){
    obj.style.color = "var(--white-ad-color)";
}
function footerretourn(obj){
    obj.style.color = "black";
}
$(".boxh").ready(function(){
    $(".boxh").animate({left:'3'},{duration:2000});
    $(".description").hide().fadeIn(9000, "linear");
    $(".marvel").hide().fadeIn(7000, "linear");
    $(".marvel").animate({left:'36'},{duration:2000});
    // $('.marvel').hide().fadeIn('slow').animate({ right: "-10px" }, 1200);
})
// mise en place de la fonction pour le défilement de spiderman.
const scroll= document.querySelector(".scroller");
// scrolleffect for colorspiderman and black spiderman
$(document).ready(function(){
    $(window).scroll(function(){
        let scroll = $(window).scrollTop();
        if (scroll>275.20001220703125 && scroll<1840 ){
            $(".scroller").css('top',scroll - 345 +'px');
            scroll<1650 ? $(".scroller").css('z-index', 1): $(".scroller").css('z-index', -1);
        }
        else{
            if(scroll>1840 && scroll<2396){
                $(".blackspiderman").css("top",scroll - 1855 + "px");
            }
            $(".blackspiderman").css('top')
            $(".scroller").css('top');
        }
        console.log(scroll)
    })
})
