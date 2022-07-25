const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
// 🚀 1 - Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

const bookStrings = (param) => {
  return param.map((element) => `${element.name} - Gênero: ${element.genre} - Autor: ${element.author.name}`);
}

console.log(bookStrings(books));

// 🚀 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.

const authorAgeWhenReleaseBook = (param) => {
  return param.map((element) => {
    const result = {};
    result.author = element.author.name;
    result.years = element.releaseYear - element.author.birthYear
    return result;
  }).sort((a, b) => a.years - b.years);
}

console.log(authorAgeWhenReleaseBook(books));

// 🚀 3 - Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

const siFiAndPhantasyBooks = (param) => {
  return param.filter((element) => element.genre === 'Ficção Científica' || element.genre === 'Fantasia');
}

console.log(siFiAndPhantasyBooks(books));

// 🚀 4 - Crie um array ordenado pelos livros com mais de 60 anos de publicação e ordene-o pelo livro mais velho.

const bookReleasedMoreThan60Years = (param) => {
  return param.filter((element) => (2022 - element.releaseYear) >= 60).sort((a, b) => a.releaseYear - b.releaseYear);

}
console.log(bookReleasedMoreThan60Years(books));

// 🚀 5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

const siFiAndPhantasyAuthors = (param) => {
  const sifiAndPhantasy = param.filter((element) => element.genre === 'Ficção Científica' || element.genre === 'Fantasia');
  return sifiAndPhantasy.map((element) => element.author.name).sort();
}

console.log(siFiAndPhantasyAuthors(books));

// 🚀 6 - Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

const oldBooks = (param) => {
  return param.filter((element) => (2022 - element.releaseYear) >= 60).map((element) => element.name)
}

console.log(oldBooks(books));

// 🚀 7 - Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.

const authorWith3DotsOnName = (param) => {
  return param.find((element) => (element.author.name.split(' ').filter((word) => word.endsWith('.')).length === 3)).name;
}

console.log(authorWith3DotsOnName(books));