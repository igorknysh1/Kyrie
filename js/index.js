
$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
    }});
    $('#toTop').click(function() {
        $('body,html').animate({scrollTop:0},1500);
    });
  if($(window).width() <= 766 ){
 $( "#nav" ).removeClass( "navbar navbar-inverse" ).addClass( "navbar navbar-inverse navbar-default navbar-fixed-bottom" );
} 
if($(window).width() > 766 ){
 $( "#nav" ).removeClass( "navbar navbar-inverse  navbar-default navbar-fixed-bottom" ).addClass( "navbar navbar-inverse" );
} 

function resizeScreen(){ 
if($(window).width() <= 766 ){
 $( "#nav" ).removeClass( "navbar navbar-inverse" ).addClass( "navbar navbar-inverse navbar-default navbar-fixed-bottom" );
} 
if($(window).width() > 766 ){
 $( "#nav" ).removeClass( "navbar navbar-inverse  navbar-default navbar-fixed-bottom" ).addClass( "navbar navbar-inverse" );
} 
} 
$(window).resize(function() { 
resizeScreen(); 
}); 
     new WOW().init();
     setInterval(function() {
	target.innerHTML = (new Date()).toLocaleTimeString();
}, 1000);
});


//statistics
$("#stats").bind("click", getStat);
function getStat() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var statData = JSON.parse(xhr.responseText);
            document.querySelector('#stat-mpg').innerHTML = statData.mpg;
            document.querySelector('#stat-fg').innerHTML = statData.fg;
            document.querySelector('#stat-tp').innerHTML = statData.tp;
            document.querySelector('#stat-ft').innerHTML = statData.ft;
            document.querySelector('#stat-ppg').innerHTML = statData.ppg;
            document.querySelector('#stat-rpg').innerHTML = statData.rpg;
            document.querySelector('#stat-apg').innerHTML = statData.apg;
            document.querySelector('#stat-bpg').innerHTML = statData.bpg;
        }
    }
    xhr.open('GET', 'data.json', true);
    xhr.send();
}

