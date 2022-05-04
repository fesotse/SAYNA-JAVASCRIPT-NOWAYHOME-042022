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
    $(".boxh").ready(function(){
        $(".boxh").animate({left:'3'},{duration:3000});
        $(".description").fadeOut(10, "swing");
        $(".description").fadeIn(7000, "linear");
    })
})
