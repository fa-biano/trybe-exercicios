const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const fs = require('fs');
const app = require('../../src/app');

const { expect } = chai;
chai.use(chaiHttp);

const mockFile = JSON.stringify({ 
  brands: [
    {
      id: 1,
      name: 'Lindt & Sprungli',
    },
    {
      id: 2,
      name: 'Ferrero',
    },
    {
      id: 3,
      name: 'Ghirardelli',
    },
  ],
  chocolates: [
    {
      id: 1,
      name: 'Mint Intense',
      brandId: 1,
    },
    {
      id: 2,
      name: 'White Coconut',
      brandId: 1,
    },
    {
      id: 3,
      name: 'Mon Chéri',
      brandId: 2,
    },
    {
      id: 4,
      name: 'Mounds',
      brandId: 3,
    },
  ],
});

describe('Testando a API Cacau Trybe', function () {
  beforeEach(function () {
    sinon.stub(fs.promises, 'readFile')
      .resolves(mockFile);
  });

  afterEach(function () {
    sinon.restore();
  });

  describe('Usando o método GET em /chocolate', function () {
    it('Retorna a lista completa de chocolates!', async function () {
      const response = await chai
        .request(app)
        .get('/chocolate');
  
      expect(response.status).to.be.equals(200);
  
      const output = [
        { id: 1, name: 'Mint Intense', brandId: 1 },
        { id: 2, name: 'White Coconut', brandId: 1 },
        { id: 3, name: 'Mon Chéri', brandId: 2 },
        { id: 4, name: 'Mounds', brandId: 3 },
      ];
      
      expect(response.body.chocolates).to.deep.equal(output);
    });
  });

  describe('Usando o método GET em /chocolate/:id para buscar o ID 4', function () {
    it('Retorna o chocolate Mounds', async function () {
      const response = await chai.request(app).get('/chocolate/4');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolate).to.deep.equal({
        id: 4,
        name: 'Mounds',
        brandId: 3,
      })
    });
  });

  describe('Usando o método GET em /chocolate/:id para buscar o ID 99', function () {
    it('Retorna status 404 com a mensagem "Chocolate not found"', async function () {
      const response = await chai
        .request(app)
        .get('/chocolate/99');

      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal({ message: 'Chocolate not found' })
    });
  });

  describe('Usando o método GET em /chocolate/brand/:brandId para buscar brandId 1', function () {
    it('Retorna os chocolates da marca Lindt & Sprungli', async function () {
      const response = await chai
        .request(app)
        .get('/chocolate/brand/1');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal([
        {
          id: 1,
          name: 'Mint Intense',
          brandId: 1,
        },
        {
          id: 2,
          name: 'White Coconut',
          brandId: 1,
        },
      ]);
    });
  });

  describe('Usando o método GET em /chocolate/total para buscar a qtd total de chocolates', function () {
    it('Retornar o total de chocolates', async function () {
      const response = await chai.request(app).get('/chocolate/total');

      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal({ totalChocolates: 4 });
    });
  });

  describe('Usando o método GET em /chocolate/search para retornar o chocolate buscado', function () {
    it('Retornar os chocolates que contem Mo no nome', async function () {
      const response = await chai.request(app).get('/chocolate/search?name=Mo');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal([
        {
          "id": 3,
          "name": "Mon Chéri",
          "brandId": 2
        },
        {
          "id": 4,
          "name": "Mounds",
          "brandId": 3
        }
      ]);
    });

    it('Retorna array vazio quando o chocolate buscado nao existir', async function () {
      const response = await chai.request(app).get('/chocolate/search?name=ZZZ');

      expect(response.status).to.be.equal(200);
      expect(response.body.chocolates).to.deep.equal([]);
    });
  });

  describe('Usando o método PUT em /chocolate/:id para atualizar o ID 1', function () {
    it('Retorna chocolate com ID 1 atualizado', async function () {
      const response = await chai.request(app)
        .put('/chocolate/1')
        .send({ 
          "name": "Mint Pretty Good",
          "brandId": 2
        });

      expect(response.status).to.be.equal(200);
      expect(response.body).to.deep.equal({
        "chocolate": { 
          "id": 1,
          "name": "Mint Pretty Good",
          "brandId": 2
        }
      });
    });

    it('Retorna mensagem de erro caso chocolate nao exista', async function () {
      const response = await chai.request(app)
        .put('/chocolate/555')
        .send({ 
          "name": "Mint Pretty Good",
          "brandId": 2
        });

      expect(response.status).to.be.equal(404);
      expect(response.body).to.deep.equal({ message: 'Chocolate not found' });
    })
  });
});

