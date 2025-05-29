import { Handler } from './Handlers';
import { Ticket } from '../models/Ticket';
import { Prioridad } from '../enums/Prioridad';

export class SeniorHandler extends Handler {
  procesar(ticket: Ticket): void {
    if (ticket.prioridad <= Prioridad.ALTA) {
      this.notificar(ticket, 'Procesado por Especialista Senior');
    } else if (this.siguiente) {
      this.notificar(ticket, 'Escalado a Manager');
      this.siguiente.procesar(ticket);
    } else {
      this.notificar(ticket, 'Sin handler disponible');
    }
  }
}