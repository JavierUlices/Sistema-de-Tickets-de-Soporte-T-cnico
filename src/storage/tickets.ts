import { Ticket } from '../models/Ticket';
export const tickets: Ticket[] = [];
let idActual = 1;
export function generarId(): number {
  return idActual++;
}