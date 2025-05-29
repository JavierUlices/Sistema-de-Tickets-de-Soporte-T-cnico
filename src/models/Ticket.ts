import { Prioridad } from '../enums/Prioridad';
import { Estado } from '../enums/Estado';

export interface Ticket {
  id: number;
  titulo: string;
  descripcion: string;
  prioridad: Prioridad;
  estado: Estado;
  historial: string[];
  creadoEn: Date;
  actualizadoEn: Date;
}
