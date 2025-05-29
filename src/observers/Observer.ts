export interface Observer {
  notificar(ticketId: number, mensaje: string): void;
}

