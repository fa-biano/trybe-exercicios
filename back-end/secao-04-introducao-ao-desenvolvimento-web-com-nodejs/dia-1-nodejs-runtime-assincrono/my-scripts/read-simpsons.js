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

const filterSimpson = async () => {
  const simpsons = await readAll();
  const newArray = simpsons.filter((simpson) => simpson.id !== '10' && simpson.id !== '6');
  await fs.writeFile('./simpsons.json', JSON.stringify(newArray));
};

const createSimpsonsFamily = async () => {
  const simpsons = await readAll();
  const familyIds = [1, 2, 3, 4];
  const simpsonsFamily = simpsons.filter((simpson) => familyIds.includes(Number(simpson.id)));
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonsFamily));
};

const addNelsonToFamily = async () => {
  const fileContent = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const simpsonsFamily  = JSON.parse(fileContent); 
  simpsonsFamily.push({ id: '8', name: 'Nelson Muntz' });
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(simpsonsFamily));
};

const switchNelsonToMaggie = async () => {
  const fileContent = await fs.readFile('./simpsonFamily.json', 'utf-8');
  const simpsonsFamily  = JSON.parse(fileContent);
  const removeNelson = simpsonsFamily.filter((simpson) => simpson.id !== '8');
  const addMaggieToFamily = [ ...removeNelson, { id: '5', name:'Maggie Simpson' } ];
  await fs.writeFile('./simpsonFamily.json', JSON.stringify(addMaggieToFamily));
};


const main = async () => {
  await getAllSimpsons();
  const simpson = await getSimpsonById(1);
  console.log(simpson);
  await filterSimpson();
  await createSimpsonsFamily();
  await addNelsonToFamily();
  await switchNelsonToMaggie();
};

main();


// try {
// } catch(err) {
//   console.error(err.message);
// }