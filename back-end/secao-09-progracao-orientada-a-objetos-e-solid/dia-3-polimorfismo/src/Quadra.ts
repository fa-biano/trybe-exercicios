import IAgenda from './interfaces/IAgenda';

abstract class Quadra {
  protected abstract reservar<T>(horaReservada: Date): IAgenda<T>;
}

export default Quadra;