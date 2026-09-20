// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Llevo tres días sin soñar", time: 0 },
  { text: "Ya cuatro noches sin cantar", time: 6 },
  { text: "Un buen tiempo sin alguien con quien hablar", time: 11 },
  { text: "No sé si estoy tan bien así", time: 19 },
  { text: "O solo un poco solo y no lo acepto", time: 25 },
  { text: "Hay un poco de miedo", time: 32 },
  { text: "Al analizar, si pudiera", time: 38 },
  { text: "Devolver el tiempo algún momento y", time: 43 },
  { text: "Ser sincero para ver", time: 49 },
  { text: "Lo que nunca pude ver", time: 54 },
  { text: "Tal vez", time: 60 },
  { text: "Es que me ha pasado algo", time: 64 },
  { text: "Que me ha puesto a comprender", time: 69 },
  { text: "Tal vez", time: 75 },
  { text: "Es que la vida me ha mostrado", time: 79 },
  { text: "Que no quiero otra mujer", time: 86 },
  { text: "Tal vez", time: 92 },
  { text: "Aunque sea demasiado tarde", time: 96 },
  { text: "Y no pretendas escucharme", time: 101 },
  { text: "Te tengo que decir", time: 108 },
  { text: "Que tú me hacías muy feliz", time: 113 },
  { text: "Que si pudiera darle vueltas a la Tierra una y otra vez", time: 120 },
  { text: "Yo buscaría de alguien con tus mismos ojos, con tus mismos labios", time: 128 },
  { text: "Con tu misma boca y con tu misma piel", time: 137 },
  { text: "Que si pudiera darle al tiempo otro poco de tiempo", time: 145 },
  { text: "Para comprender que sin ti, mi vida ya no la siento", time: 153 },
  { text: "Sin ti el color se vuelve a blanco y negro", time: 163 },
  { text: "Y sé que la distancia me hizo ciego", time: 171 },
  { text: "En todos los momentos", time: 177 },
  { text: "Los que tenía que verte aquí", time: 183 },
  { text: "Mmh, mmh-mmh, mmh-mmh, mmh-mmh-mmh", time: 190 },
  { text: "Mmh, mmh-mmh, mmh-mmh, mmh-mmh-mmh", time: 196 },
  { text: "Ya no puedo más", time: 205 },
  { text: "Llevo tres días sin soñar", time: 210 },
  { text: "Ya cuatro noches sin cantar", time: 216 },
  { text: "Un buen tiempo sin alguien con quien hablar", time: 221 },
  { text: "No sé si estoy tan bien así", time: 229 },
  { text: "O solo un poco solo y no lo acepto", time: 235 },
  { text: "Hay un poco de miedo", time: 242 },
  { text: "Al analizar, si pudiera darle vuelta a la Tierra una y otra vez", time: 248 },
  { text: "Yo buscaría de alguien con tus mismos ojos, con tus mismos labios, con tu misma boca y con tu misma piel", time: 260 },
  { text: "Si pudiera darle al tiempo un poco de tiempo", time: 274 },
  { text: "Para comprender que, sin ti, mi vida ya no la siento", time: 281 },
  { text: "Sin ti el color se vuelve a blanco y negro", time: 291 },
  { text: "Y sé que la distancia me hizo ciego", time: 299 },
  { text: "En todos los momentos", time: 305 },
  { text: "En los que tenía que verte aquí", time: 311 },
  { text: "Mmh, mmh-mmh, mmh-mmh, mmh-mmh-mmh", time: 318 },
  { text: "Mmh, mmh-mmh, mmh-mmh, mmh-mmh-mmh", time: 324 },
  { text: "Que si pudiera darle vueltas a la Tierra una y otra vez", time: 330 },
  { text: "Yo buscaría de alguien con tus mismos ojos, con tus mismos labios", time: 338 },
  { text: "Con tu misma boca y con tu misma piel", time: 346 },
  { text: "Que si pudiera darle al tiempo otro poco de tiempo", time: 354 },
  { text: "Para comprender que sin ti, mi vida ya no la siento", time: 362 },
  { text: "Sin ti el color se vuelve a blanco y negro", time: 372 },
  { text: "Y sé que la distancia me hizo ciego", time: 380 },
  { text: "En todos los momentos", time: 386 },
  { text: "En los que tenía que verte aquí", time: 392 },
  { text: "Mmh, mmh-mmh, mmh-mmh, mmh-mmh-mmh", time: 398 },
  { text: "Mmh, mmh-mmh, mmh-mmh, mmh-mmh-mmh", time: 404 },
  { text: "Mmh, mmh-mmh, mmh-mmh, mmh-mmh-mmh", time: 410 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);