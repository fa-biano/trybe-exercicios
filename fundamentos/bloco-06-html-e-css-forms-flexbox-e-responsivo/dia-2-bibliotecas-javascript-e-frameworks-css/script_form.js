let btnSubmit = document.getElementById('btn-submit');
let auth = document.getElementById('autorizacao2');
let nameSize = document.getElementById('nome-completo');
let emailSize = document.getElementById('email');

btnSubmit.addEventListener('click', (event) => {
  if (nameSize.value.length < 10 || emailSize.value.length < 10) {
    alert('Dados Inválidos')
    event.preventDefault();
  } else if (auth.checked !== true){
    alert('Necessário marcar a opção que autoriza a utilização das imagens')
    event.preventDefault();
  } else {
    alert('Dados enviados com sucesso! Obrigado por participar do concurso TrybeTrip.')
  }
})

