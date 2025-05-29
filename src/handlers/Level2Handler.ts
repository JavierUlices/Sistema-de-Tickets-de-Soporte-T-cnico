import { Handler } from './Handlers';
import { Ticket } from '../models/Ticket';
import { Prioridad } from '../enums/Prioridad';

export class Level2Handler extends Handler {
  procesar(ticket: Ticket): void {
    if (ticket.prioridad <= Prioridad.MEDIA) {
      this.notificar(ticket, 'Procesado por Soporte Nivel 2');
    } else if (this.siguiente) {
      this.notificar(ticket, 'Escalado a Especialista Senior');
      this.siguiente.procesar(ticket);
    } else {
      this.notificar(ticket, 'Sin handler disponible');
    }
  }
}
