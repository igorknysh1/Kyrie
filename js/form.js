document.querySelector('input[type=submit]').addEventListener('click', sendForm);
function sendForm(e) {
  e.preventDefault();
  var form = document.querySelector('form');
  if (!form[0].checkValidity()) {
    form.find(':submit').click(); 
  } else {
    $.ajax({
            url: "https://formspree.io/lukasskott100@gmail.com", 
            method: "POST",
            data: {
                clientName: $('#client-name').val(),
                clientEmail: $('#client-email').val(),
                comment: $('#comment').val()
            },
            dataType: "json"
        }).done(function() {
            $('form').html('<h1>Thank you!</h1><p>Цe will keep you informed of news</p>')
        });
  }
}