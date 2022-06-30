// Acesse o elemento elementoOndeVoceEsta.
// Acesse pai a partir de elementoOndeVoceEsta e adicione uma color a ele.
document.getElementById('elementoOndeVoceEsta').parentNode.style.color = 'red';

// Acesse o primeiroFilhoDoFilho e adicione um texto a ele. Você se lembra dos vídeos da aula anterior, como fazer isso?
document.getElementById('primeiroFilhoDoFilho').innerText = 'Texto de primeiroFilhoDoFilho';

// Acesse o primeiroFilho a partir de pai.
document.getElementById('pai').firstElementChild;

// Agora acesse o primeiroFilho a partir de elementoOndeVoceEsta.
document.getElementById('elementoOndeVoceEsta').previousElementSibling;

// Agora acesse o texto Atenção! a partir de elementoOndeVoceEsta.
document.getElementById('elementoOndeVoceEsta').nextSibling;

// Agora acesse o terceiroFilho a partir de elementoOndeVoceEsta.
document.getElementById('elementoOndeVoceEsta').nextElementSibling;

// Agora acesse o terceiroFilho a partir de pai.
document.getElementById('pai').children[2];

// Crie um irmão para elementoOndeVoceEsta.
let sectionPai = document.getElementById('elementoOndeVoceEsta').parentElement;
let irmaoElementoOndeVoceEsta = document.createElement('section');
sectionPai.appendChild(irmaoElementoOndeVoceEsta);

// Crie um filho para elementoOndeVoceEsta.
let elementoOndeVoceEsta = document.getElementById('elementoOndeVoceEsta');
let filhoElementoOndeVoceEsta = document.createElement('section');
elementoOndeVoceEsta.appendChild(filhoElementoOndeVoceEsta);

// Crie um filho para primeiroFilhoDoFilho.
let primeiroFilhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
let filhoDePrimeiroFilhoDoFilho = document.createElement('section');
primeiroFilhoDoFilho.appendChild(filhoDePrimeiroFilhoDoFilho);

// A partir desse filho criado, acesse terceiroFilho.
document.querySelector('#primeiroFilhoDoFilho section').parentElement.parentElement.nextElementSibling;

// Remova todos os elementos filhos de paiDoPai exceto pai, elementoOndeVoceEsta e primeiroFilhoDoFilho.
let pai = document.getElementById('paiDoPai').firstElementChild
let netos = document.getElementById('paiDoPai').firstElementChild.childNodes

for (let index = 0; index < netos.length; index += 1) {
  if (netos[index].id !== 'elementoOndeVoceEsta') {
    netos[index].remove();
    index -= 1;
  }
}

pai.firstChild.children[1].remove();
pai.firstChild.children[1].remove();