const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

// 1 - Crie uma função que retorna o dano do dragão.
// O dano será um número aleatório entre 15 (dano mínimo) e o valor do atributo strength (dano máximo)
const dragonHit = () => {
  const maxDmg = dragon.strength
  const minDmg = 15;
  const dmg = Math.floor((Math.random() * (maxDmg - minDmg)) + minDmg);
  return dragon.damage = dmg;
}

// 2 - Crie uma função que retorna o dano causado pelo warrior.
// O dano será um número aleatório entre o valor do atributo strength (dano mínimo) e o valor de strength * weaponDmg (dano máximo).
const warriorHit = () => {
  const maxDmg = warrior.strength * warrior.weaponDmg;
  const minDmg = warrior.strength;
  const dmg = Math.floor((Math.random() * (maxDmg - minDmg)) + minDmg);
  return warrior.damage = dmg ;
}

// 3 - Crie uma função que retorna um objeto com duas chaves e dois valores contendo o dano e a mana gasta pelo mago em um turno.
// O dano será um número aleatório entre o valor do atributo intelligence (dano mínimo) e o valor de intelligence * 2 (dano máximo).
// A mana consumida por turno é 15. Além disto a função deve ter uma condicional, caso o mago tenha menos de 15 de mana o valor de dano recebe uma mensagem (Ex: "Não possui mana suficiente") e a mana gasta é 0.
const mageHit = () => {
  const maxDmg = mage.intelligence * 2;
  const minDmg = mage.intelligence;
  const manaCost = 15;
  const dmg = Math.floor((Math.random() * (maxDmg - minDmg)) + minDmg);
  const manaPool = mage.mana;

  let checkAtk = 0;
  if (manaPool < 15) {
    checkAtk = 'Out of mana'
    mage.damage = 0;
    mage.mana = checkAtk;
  } else {
    mage.damage = dmg;
    checkAtk = { dmg: mage.damage, manaSpend: manaCost }
  }
  return checkAtk;
}
// console.log(`Dragon: ${dragonHit()}`);
// console.log(`Warrior: ${warriorHit()}`);
// console.log(`Mage: ${(mageHit())}`);
// console.log(mageHit());

// Parte II
// Agora que você já possui a implementação das funções relativas aos três exercícios anteriores, passe-as como parâmetro para outras funções que irão compor um objeto gameActions. O objeto será composto por ações do jogo e cada ação é por denifição uma HOF, pois neste caso, são funções que recebem como parâmetro outra função.

// 1 - Crie a primeira HOF que compõe o objeto gameActions. Ela será a função que simula o turno do personagem warrior. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem warrior e atualizará os healthPoints do monstro dragon. Além disto ela também deve atualizar o valor da chave damage do warrior.

// 2 - Crie a segunda HOF que compõe o objeto gameActions. Ela será a função que simula o turno do personagem mage. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo personagem mage e atualizará os healthPoints do monstro dragon. Além disto ela também deve atualizar o valor das chaves damage e mana do mage.

// 3 - Crie a terceira HOF que compõe o objeto gameActions. Ela será a função que simula o turno do monstro dragon. Esta HOF receberá como parâmetro a função que calcula o dano deferido pelo monstro dragon e atualizará os healthPoints dos personagens mage e warrior. Além disto ela também deve atualizar o valor da chave damage do monstro.

// 4 - Adicione ao objeto gameActions uma função que retorne o objeto battleMembers atualizado e faça um console.log para visualizar o resultado final do turno.

const gameActions = {
  // Turn 1:
  turn1: warriorTurn = (toHit) => {
    const hit = toHit();
    dragon.healthPoints -= hit;
    if (dragon.healthPoints < 0) {
      dragon.healthPoints = 0;
    }
  },
  turn2: mageTurn = (toHit) => {
    const hit = toHit();
    dragon.healthPoints -= hit.dmg;
    mage.mana -= hit.manaSpend;
    if (dragon.healthPoints < 0) {
      dragon.healthPoints = 0;
    }
  },
  turn3: dragonTurn = (toHit) => {
    const hit = toHit();
    warrior.healthPoints -= hit;
    mage.healthPoints -= hit;
  },
  checkPoint: Object.entries(battleMembers),
};

// gameActions.turn1(warriorHit);
// console.log(`Warrior hits dragon for ${warrior.damage} damage (Dragon HP: ${dragon.healthPoints})`);
// gameActions.turn2(mageHit);
// console.log(`Mage hits dragon for ${mage.damage} damge, mana pool: ${mage.mana} (Dragon HP: ${dragon.healthPoints})`);
// gameActions.turn3(dragonHit);
// console.log(`Dragon hits warrior and mage for ${dragon.damage} damge (Warrior HP: ${warrior.healthPoints} and Mage HP: ${mage.healthPoints})`);
// console.log(gameActions.checkPoint);

const battle = () => {
  for (let turn = 1; dragon.healthPoints >= 0; turn += 1) {
    console.log(`Turno ${turn} ---------------------------`);
    gameActions.turn1(warriorHit);
    console.log(`Warrior hits dragon for ${warrior.damage} damage (Dragon HP: ${dragon.healthPoints})`);
    gameActions.turn2(mageHit);
    console.log(`Mage hits dragon for ${mage.damage} damge, mana pool: ${mage.mana} (Dragon HP: ${dragon.healthPoints})`);
    gameActions.turn3(dragonHit);
    console.log(`Dragon hits warrior and mage for ${dragon.damage} damge (Warrior HP: ${warrior.healthPoints} and Mage HP: ${mage.healthPoints})`);
    console.log('');
  }
}

battle();