//clock
setInterval(function() {
	target.innerHTML = (new Date()).toLocaleTimeString();
}, 1000);
    //scroll
$(function() {
$(window).scroll(function() {
if($(this).scrollTop() != 0) {
$('#toTop').fadeIn();
} else {
$('#toTop').fadeOut();
}});
$('#toTop').click(function() {
$('body,html').animate({scrollTop:0},1000);
});
});
//burger
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}


// $("#hide").click(function(){
//     $("p").hide();
// });

