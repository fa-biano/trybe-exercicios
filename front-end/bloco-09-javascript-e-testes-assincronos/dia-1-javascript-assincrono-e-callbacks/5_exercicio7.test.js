const uppercase = require('./5_exercicio7');

describe('Teste do exercicio 7', () => {
  it('Checa retorno da funcao uppercase de modo assincrono', (done) => {
    uppercase('test', (str) => {
      try {
        expect(str).toBe('TEST');
        done();
      } catch (error) {
        done(error)
      }
    })
  })
})