import Clube from './Clube';
import QuadraFutebol from './QuadraFutebol';

const testClub = new Clube();
const quadraFutebol = new QuadraFutebol();

testClub.adicionarQuadra(quadraFutebol);

const dataJogo = new Date('2023/02/20');
const reservaDaQuadra = testClub.buscarQuadra<QuadraFutebol>(0).reservar(dataJogo)
console.log(reservaDaQuadra);
