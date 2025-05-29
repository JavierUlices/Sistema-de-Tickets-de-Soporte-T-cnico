import { Observer } from './Observer';
export class NotificadorGestion implements Observer {
  notificar(ticketId: number, mensaje: string): void {
    console.log(`[Gestion] ALERTA: Ticket ${ticketId}: ${mensaje}`);
  }
}
