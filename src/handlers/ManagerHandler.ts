import { Handler } from './Handlers';
import { Ticket } from '../models/Ticket';

export class ManagerHandler extends Handler {
  procesar(ticket: Ticket): void {
    this.notificar(ticket, 'Procesado por Manager - Atención crítica inmediata');
  }
}
