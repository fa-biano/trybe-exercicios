import * as readline from 'readline-sync';

const scripts = [
  { name: "Converter comprimento", script: "./exercicio2" },
  { name: "Converter massa", script: "./exercicio3" },
  { name: "Converter capacidade", script: "./exercicio4" },
  { name: "Converter área", script: "./exercicio5" },
  { name: "Converter volume", script: "./exercicio6" }
];

const scriptNames = scripts.map(item => item.name);

const choice = readline.keyInSelect(scriptNames, "Escolha um número para executar o script de conversão de unidade");

require(scripts[choice].script)