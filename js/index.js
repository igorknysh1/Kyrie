
//clock
setInterval(function() {
	target.innerHTML = (new Date()).toLocaleTimeString();
}, 1000);

//scroll up
$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
    }});
    $('#toTop').click(function() {
        $('body,html').animate({scrollTop:0},2000);
    });
});

//statistics
document.querySelector('#button').addEventListener('click', getStat);
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

$(function(){
   new WOW().init()
});


