import IAgenda from './interfaces/IAgenda';
import IFutbebol from './interfaces/IFutebol';
import normas from './normas/normasDeUso';
import Quadra from './Quadra';

export default class QuadraFutebol extends Quadra {
  public futebolData: IFutbebol = normas.futebol;

  public reservar<IFutbebol>(horaReservada: Date): IAgenda<IFutbebol> {
    const protocolo = (Math.random() + 1).toString(30).substring(3);

    return {
      protocolo,
      date: horaReservada,
      regras: this.futebolData as IFutbebol,
    };
  }
}