import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
import { generarId, tickets } from './src/storage/tickets';
import { Ticket } from './src/models/Ticket';
import { Prioridad } from './src/enums/Prioridad';
import { Estado } from './src/enums/Estado';
import { Level1Handler } from './src/handlers/Level1Handler';
import { Level2Handler } from './src/handlers/Level2Handler';
import { SeniorHandler } from './src/handlers/SeniorHandler';
import { ManagerHandler } from './src/handlers/ManagerHandler';
import { NotificadorCliente } from './src/observers/NotificadorCliente';
import { NotificadorGestion } from './src/observers/NotificadorGestion';

async function main() {
  const rl = readline.createInterface({ input, output });

  const cliente = new NotificadorCliente();
  const gestion = new NotificadorGestion();

  const level1 = new Level1Handler();
  const level2 = new Level2Handler();
  const senior = new SeniorHandler();
  const manager = new ManagerHandler();

  level1.setSiguiente(level2).setSiguiente(senior).setSiguiente(manager);
  level1.agregarObserver(cliente);
  level2.agregarObserver(cliente);
  senior.agregarObserver(cliente);
  manager.agregarObserver(cliente);
  manager.agregarObserver(gestion);

  console.log('\n=== Sistema de Tickets de Soporte Técnico ===');

  const titulo = await rl.question('Ingrese el título del ticket: ');
  const descripcion = await rl.question('Ingrese la descripción del ticket: ');

  let prioridad: Prioridad;
  while (true) {
    const prioridadInput = await rl.question('Ingrese la prioridad (1.BAJA, 2.MEDIA, 3.ALTA, 4.CRITICA): ');
    const valor = parseInt(prioridadInput);
    if (valor >= 1 && valor <= 4) {
      prioridad = valor as Prioridad;
      break;
    } else {
      console.log('Prioridad no válida. Intente de nuevo.');
    }
  }

  const nuevoTicket: Ticket = {
    id: generarId(),
    titulo,
    descripcion,
    prioridad,
    estado: Estado.ABIERTO,
    historial: [],
    creadoEn: new Date(),
    actualizadoEn: new Date(),
  };

  tickets.push(nuevoTicket);
  level1.procesar(nuevoTicket);

  console.log('\nTicket creado y procesado exitosamente.\nHistorial del ticket:');
  console.log(nuevoTicket.historial);

  rl.close();
}

main();
