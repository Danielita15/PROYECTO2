// version 1.0.0

// No borrar ni modificar las constantes y variables que ya están declaradas, ya que son necesarias para el funcionamiento del juego.
// Simplemente comenta las líneas indicadas más abajo una vez hagas las pruebas del funcionamiento del código inicial.

let username = "";

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ------------------- Ejemplo para pedir datos al usuario ----------------------

// Llama a la función getUserInput para obtener la entrada del usuario.
// De esta manera debes pedir datos al usuario durante el juego.
// Simplemente guardarás la respuesta en otra variable para el fin que corresponda.
 // COMENTA esta linea cuando empieces a programar.


// ------------------- Función para pedir datos al usuario ----------------------
// Esta función se encarga de obtener la entrada del usuario a través de la consola. 
// Toma una pregunta como argumento, la muestra al usuario y espera su respuesta. 
// Una vez que el usuario ingresa su respuesta, la función devuelve esa respuesta como una cadena de texto.
function getUserInput(question) {
    return new Promise((resolve) => {
        rl.question(question + " ", (answer) => {
            resolve(answer);
        });
    });
}
let cedula = "33068408" ;
//-------------------- Fin del código Espacio Educa ----------------------

// Recuerda que debes seguir las instrucciones del proyecto para completar el juego.
// Y no borres el código que ya está escrito, ya que es necesario para el funcionamiento del juego.
// Solo comenta las líneas indicadas más arriba.

// Get ur coffee and Empieza a codear!!

// Declara las variables que necesitas para el juego antes de llamar a la función startGame.

// Luego llama a la función startGame para iniciar el juego.
let palabrasParaAdivinar = [
  "computadora", "automovil", "teclado", "pantalla", "audifonos", 
  "microondas", "proyector", "impresora", "semaforo", "ascensor", 
  "bicicleta", "telefono", "ventilador", "aspiradora", "lavadora", 
  "cafetera", "brujula", "microscopio", "telescopio", "satelite", 
  "elefante", "mariposa", "cocodrilo", "orquidea", "palmera", 
  "galaxia", "planeta", "universo", "gravedad", "evolucion", 
  "oxigeno", "nitrogeno", "hidrogeno", "mineral", "terremoto", 
  "tornado", "relampago", "desierto", "arrecife", "estalactita", 
  "libertad", "amistad", "felicidad", "esperanza", "ilusion", 
  "paciencia", "valentia", "gratitud", "optimismo", "justicia", 
  "victoria", "honestidad", "armonia", "respeto", "humildad", 
  "entusiasmo", "sabiduria", "curiosidad", "generosidad", "compromiso", 
  "arquitecto", "ingeniero", "abogado", "cientifico", "astronauta", 
  "bombero", "detective", "fotografo", "periodista", "cocinero", 
  "medicina", "literatura", "deporte", "senderismo", "escritura", 
  "escultura", "pintura", "historia", "geografia", "astronomia", 
  "elegante", "increible", "fabuloso", "brillante", "diferente", 
  "especial", "moderno", "antiguo", "precioso", "delicioso", 
  "proximo", "interior", "exterior", "permanente", "invisible", 
  "esencial", "perfecto", "gigante", "silencioso", "valioso"
]; 

// 1. Generar el índice aleatorio
const indiceAleatorio = Math.floor(Math.random() * palabrasParaAdivinar.length);

// 2. Extraer el valor usando ese índice
const palabraSeleccionada = palabrasParaAdivinar[indiceAleatorio];

// Eliminar 1 elemento en la posición 2 (la "3")
palabrasParaAdivinar.splice(indiceAleatorio, 1); // Resultado: ["1s", "2"]
let vidas = [];
startGame();

async function startGame(){
    do {
        console.log("1 para jugar");
        console.log("la cedula del programador para salir (33068408)");
        console.log("");
        console.log("");
        console.log("");
        opcion = await getUserInput("Ingrese una opcion");
        if (opcion === cedula) break;
    } while (opcion !== cedula);
    // Aquí va la lógica principal del juego.  
    return rl.close(); // Linea que hace que el programa se cierre una vez termine el juego. No la borres ni comentes.
}