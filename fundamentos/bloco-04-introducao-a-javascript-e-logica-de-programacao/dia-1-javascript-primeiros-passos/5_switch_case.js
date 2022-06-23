const nota = 90;

let resultado;

switch (true) {
    case (nota >= 80):
        resultado = 'aprovada';
        break;
        
    case (nota >= 60):
        resultado = 'lista';
        break;
    
    case (nota < 60):
        resultado = 'reprovada';
        break;

    default:
        resultado = 'não se aplica';
}

console.log(resultado);

