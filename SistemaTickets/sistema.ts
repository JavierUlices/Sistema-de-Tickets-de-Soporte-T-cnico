// Definimos una interfaz para el usuario
interface Usuario {
  nombre: string;
  edad: number;
}

// Funcion que devuelve un saludo
function saludar(usuario: Usuario): string {
  return `Hola, ${usuario.nombre}. Tienes ${usuario.edad} años.`;
}

// Creamos un objeto que cumple con la interfaz
const usuarioEjemplo: Usuario = {
  nombre: "Javier",
  edad: 25
};

// Imprimimos el saludo
console.log(saludar(usuarioEjemplo));
