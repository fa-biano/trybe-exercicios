const fs = require('fs').promises;
const { join } = require('path');

const readCacauTrybeFile = async () => {
  const path = '/files/cacauTrybeFile.json';
  try {
    const contentFile = await fs.readFile(join(__dirname, path), 'utf-8');
    return JSON.parse(contentFile);
  } catch (error) {
    return null;
  }
};

const getAllChocolates = async () => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates;
};

const getChocolateById = async (id) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .find((chocolate) => chocolate.id === id);
};

const getChocolatesByBrand = async (brandId) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .filter((chocolate) => chocolate.brandId === brandId);
};

const filterChocolatesByName = async (filterName) => {
  const cacauTrybe = await readCacauTrybeFile();
  return cacauTrybe.chocolates
    .filter((chocolate) => chocolate.name.toLowerCase().includes(filterName.toLowerCase()));
};

const updateChocolateById = async (id, name, brandId) => {
  const cacauTrybe = await readCacauTrybeFile();
  const chocolateIndex = cacauTrybe.chocolates.findIndex((chocolate) => chocolate.id === id);

  let updateChocolate = false;
  if(cacauTrybe.chocolates[chocolateIndex]) {
    cacauTrybe.chocolates[chocolateIndex] = {
      id,
      name,
      brandId,
    };
    updateChocolate = cacauTrybe.chocolates[chocolateIndex]
  }

  // o return abaixo seria para escrever no arquivo cacauTrybeFile.json
  // return cacauTrybe.chocolates;

  return updateChocolate;
};

module.exports = {
  getAllChocolates,
  getChocolateById,
  getChocolatesByBrand,
  filterChocolatesByName,
  updateChocolateById,
};
