import Clube from './Clube';
import QuadraFutebol from './QuadraFutebol';
import QuadraTenis from './QuadraTenis';

const testClub = new Clube();
const quadraFutebol = new QuadraFutebol();

testClub.adicionarQuadra(quadraFutebol);

const dataJogo = new Date('2023/02/20');
const reservaQuadraFutebol = testClub.buscarQuadra<QuadraFutebol>(0).reservar(dataJogo)
console.log('reservaQuadraFutebol', reservaQuadraFutebol);

const quadraTenis = new QuadraTenis();

testClub.adicionarQuadra(quadraTenis);
const reservarQuadraTenis = testClub.buscarQuadra<QuadraTenis>(1).reservar(dataJogo);
console.log('reservarQuadraTenis', reservarQuadraTenis);

