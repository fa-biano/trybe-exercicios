// 9 - A fim de evitar que futuros treinadores sejam prejudicados, o Professor Carvalho pediu que você o ajude a escrever testes para o sistema que distribui os pokémons. Crie um novo arquivo .test.js ou .spec.js e copie o código abaixo. Complete os testes para a função getPokemonDetails de acordo com as especificações.

const { getPokemonDetails } = require("./6_exercicio8");

describe("A função getPokemonDetails", () => {
  it("retorna erro quando procuramos um pokemon que não existe no banco de dados", (done) => {
    // Escreva aqui seu código
    const expectedError = new Error('Não temos esse pokémon para você :(');
    const callback = (error, result) => {
      expect(error).toEqual(expectedError);
      done();
    }
    
    getPokemonDetails((pokemon) => pokemon.name === 'Pikachu', callback);
  }); 

  it("retorna um pokemon que existe no banco de dados", (done) => {
    // Escreva aqui seu código
    const expectedResult = 'Olá, seu pokémon é o Charmander, o tipo dele é Fire e a habilidade principal dele é Ember';
    const callback = (error, result) => {
      expect(result).toEqual(expectedResult);
      done();
    }

    getPokemonDetails((pokemon) => pokemon.name === 'Charmander', callback);
  });
});