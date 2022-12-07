const fs = require('fs').promises;

const readAll = async () => {
  const fileContent = await fs.readFile('./simpsons.json', 'utf-8');
  const simpsons = JSON.parse(fileContent);
  return simpsons
};

const getAllSimpsons = async () => {
  const simpsons = await readAll();
  const simpsonName = simpsons.map((simpson) => console.log(`${simpson.id} - ${simpson.name}`))
};

const getSimpsonById = async (id) => {
  const simpsons = await readAll();
  const chosenSimpson = simpsons.find((simpson) => Number(simpson.id) === id)

  if (!chosenSimpson) throw new Error('id não encontrado');
  return chosenSimpson
}


const main = async () => {
  await getAllSimpsons();
  const simpson = await getSimpsonById(1);
  console.log(simpson);
};

main();


// try {
// } catch(err) {
//   console.error(err.message);
// }