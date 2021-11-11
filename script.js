$(document).ready(function(){

  $('#loginAluno').submit(function(event){

    var usuario = $('#inputUsuario').val()
    var senha = $('#inputSenha').val()

    //Testar se o usuário e sneha estão corretos
    if(usuario == "admin" && senha == "admin"){
      
      $('#mensagem').removeClass('alert-warning')
      //Adiciona classes CSS a DIV #mensagem
      $('#mensagem').addClass('alert alert-success alert-dismissible fade show')
      $('#mensagem').text('Usuário Logado!').show().fadeOut(3000)

    }
    else{
      $('#mensagem').removeClass('alert-success')
      //Adiciona classes CSS a DIV #mensagem
      $('#mensagem').addClass('alert alert-warning alert-dismissible fade show')
      $('#mensagem').text('Usuário ou senha inválida!').show().fadeOut(3000)
      event.preventDefault() //bloqueia o evento de submit
    }




  })



})