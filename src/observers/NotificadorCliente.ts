import { Observer } from './Observer';
export class NotificadorCliente implements Observer {
  notificar(ticketId: number, mensaje: string): void {
    console.log(`[Cliente] Ticket ${ticketId}: ${mensaje}`);
  }
}


