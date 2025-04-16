$(document).ready(function() {
    $('.form-test').submit(function(e) {
      e.preventDefault();
      var form = $(this);
      var form_data = form.serialize();
      $.ajax({
        type: 'POST',
        url: 'https://formsubmit.co/caemicfe@gmail.com',
        data: form_data,
        success: function() {
          alert('Obrigado! Sua mensagem foi enviada com sucesso.');
          form.trigger('reset');
        },
        error: function() {
          alert('Ocorreu um problema com o envio do seu formulário, por favor, tente novamente.');
        }
      });
    });
  });