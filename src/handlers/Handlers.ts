import { Ticket } from '../models/Ticket';
import { Observer } from '../observers/Observer';

export abstract class Handler {
  protected siguiente: Handler | null = null;
  protected observadores: Observer[] = [];

  setSiguiente(handler: Handler): Handler {
    this.siguiente = handler;
    return handler;
  }

  agregarObserver(observer: Observer): void {
    this.observadores.push(observer);
  }

  protected notificar(ticket: Ticket, mensaje: string): void {
    for (const obs of this.observadores) {
      obs.notificar(ticket.id, mensaje);
    }
    ticket.historial.push(mensaje);
    ticket.actualizadoEn = new Date();
  }

  abstract procesar(ticket: Ticket): void;
}