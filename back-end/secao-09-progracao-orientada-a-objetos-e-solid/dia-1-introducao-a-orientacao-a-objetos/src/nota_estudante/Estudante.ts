class Estudante {
  private _matricula: string;
  private _nome: string;
  private _notaProva: number[] = [];
  private _notaTrabalho: number[] = [];

  constructor(matricula: string, nome: string, provas: number[], trabalhos:number[]) {
    this._matricula = matricula;
    this._nome = nome;
    this.notaProva = provas;
    this.notaTrabalho = trabalhos;
  }

  get matricula(): string {
    return this._matricula;
  }

  get nome(): string {
    return this._nome;
  }

  get notaProva(): number[] {
    return this._notaProva;
  }

  get notaTrabalho(): number[] {
    return this._notaTrabalho;
  }
  
  set matricula(value: string){
    this._matricula = value;
  }
  
  set nome(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve conter no mínimo 3 caracteres.')
    }

    this._nome = value;
  }

  set notaProva(value: number[]){
    if (value.length !== 4) {
      throw new Error('A pessoa estudante deve possuir 4 notas de provas.')
    }

    this._notaProva = value;
  }

  set notaTrabalho(value: number[]) {
    if (value.length !== 2) {
      throw new Error('A pessoa estudante deve possuir 2 notas de trabalho.')
    }

    this._notaTrabalho = value;
  }

  somaNotas(): number {
    const notas = [...this._notaProva, ...this._notaTrabalho].reduce((acc, curr) => acc + curr);
    return notas;
  }

  mediaNotas(): number {
    const denomidor = this._notaProva.length + this._notaTrabalho.length;
    const numerador = this.somaNotas();
    const result = numerador / denomidor;
    return result;
  }
}

const estudante1 = new Estudante('123', 'Teste da Silva', [7, 7, 8, 7], [10, 9]);

console.log(estudante1);
console.log('Soma das Notas: ', estudante1.somaNotas());
console.log('Media das Notas: ', estudante1.mediaNotas());


