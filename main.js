// Quitar la pausa inicial al cargar la página
window.onload = () => {
  document.body.classList.remove("container");
};

var audio = document.getElementById("bg-music");
var lyrics = document.querySelector("#lyrics");

function playMusic() {
  if (!audio) return;

  audio.volume = 0.35;



  audio
    .play()
    .catch(function () {
      // El navegador bloquea autoplay hasta la primera interacción del usuario.
    });
}

window.addEventListener("load", function () {
  setTimeout(playMusic, 300);
});

var START_TIME = 0;

function timeToSeconds(value) {
  if (typeof value === "number") return value;
  var parts = String(value).split(":").map(Number);
  if (parts.length === 2) {
    return parts[0] * 60 + parts[1];
  }
  return Number(parts[0]) || 0;
}

var lyricsData = [
  { text: "Mi amor, quiero que escuches esta canción. Te la dedico. Te extraño", time: "0:00" },
  { text: "Ya no puedo más", time: "0:13" },
  { text: "Llevo tres días sin soñar", time: "0:17" },
  { text: "Ya cuatro noches sin cantar", time: "0:20" },
  { text: "Un buen tiempo sin alguien con quien hablar", time: "0:23" },
  { text: "No sé si estoy tan bien así", time: "0:27" },
  { text: "O solo un poco solo y no lo acepto", time: "0:29" },
  { text: "Hay un poco de miedo", time: "0:32" },
  { text: "Al analizar, si pudiera", time: "0:36" },
  { text: "Devolver el tiempo algún momento y", time: "0:39" },
  { text: "Ser sincero para ver", time: "0:42" },
  { text: "Lo que nunca pude ver", time: "0:46" },
  { text: "Tal vez", time: "0:48" },
  { text: "Es que me ha pasado algo", time: "0:50" },
  { text: "Que me ha puesto a comprender", time: "0:52" },
  { text: "Tal vez", time: "0:54" },
  { text: "Es que la vida me ha mostrado", time: "0:56" },
  { text: "Que NO QUIERO otra mujer", time: "0:58" },
  { text: "Tal vez", time: "0:59" },
  { text: "Aunque sea demasiado tarde", time: "1:01" },
  { text: "Y no pretendas escucharme", time: "1:03" },
  { text: "Te tengo que decir", time: "1:05" },
  { text: "Que tú me hacías muy feliz", time: "1:07" },
  { text: "Que si pudiera darle vueltas a la Tierra una y otra vez", time: "1:09" },
  { text: "Yo buscaría de alguien con tus mismos ojos, con tus mismos labios", time: "1:11" },
  { text: "Con tu misma boca y con tu misma piel", time: "1:20" },
  { text: "Que si pudiera darle al tiempo otro poco de tiempo", time: "1:23" },
  { text: "Para comprender que SIN TI, mi vida ya no la siento", time: "1:25" },
  { text: "Que el color se vuelve a blanco y negro", time: "1:28" },
  { text: "Y sé que la distancia me hizo ciego", time: "1:30" },
  { text: "En todos los momentos", time: "1:31" },
  { text: "En los que tenía que verte aquí", time: "1:34" },
  { text: "Mmh, mmh-mmh, mmh-mmh, mmh-mmh-mmh", time: "1:46" },
  { text: "Mmh, mmh-mmh, mmh-mmh, mmh-mmh-mmh", time: "1:53" },
  { text: "Ya no puedo más", time: "2:00" },
  { text: "Llevo tres días sin soñar", time: "2:04" },
  { text: "Ya cuatro noches sin cantar", time: "2:07" },
  { text: "Un buen tiempo sin alguien con quien hablar", time: "2:10" },
  { text: "No sé si estoy tan bien así", time: "2:12" },
  { text: "O solo un poco solo y no lo acepto", time: "2:15" },
  { text: "Hay un poco de miedo", time: "2:17" },
  { text: "Al analizar, si pudiera darle vuelta a la Tierra una y otra vez", time: "2:20" },
  { text: "Yo buscaría de alguien con tus mismos ojos, con tus mismos labios, con tu misma boca y con tu misma piel", time: "2:31" },
  { text: "Si pudiera darle al tiempo un poco de tiempo", time: "2:38" },
  { text: "Para comprender que, sin ti, mi vida ya no la siento", time: "2:42" },
  { text: "Que el color se vuelve a blanco y negro", time: "2:47" },
  { text: "Y sé que la distancia me hizo ciego", time: "2:50" },
  { text: "En todos los momentos", time: "2:52" },
  { text: "En los que tenía que verte aquí", time: "2:54" },
  { text: "Mmh, mmh-mmh, mmh-mmh, mmh-mmh-mmh", time: "2:59" },
  { text: "Mmh, mmh-mmh, mmh-mmh, mmh-mmh-mmh", time: "3:05" },
  { text: "Que si pudiera darle vueltas a la Tierra una y otra vez", time: "3:14" },
  { text: "Yo buscaría de alguien con tus mismos ojos, con tus mismos labios", time: "3:20" },
  { text: "Con tu misma boca y con tu misma piel", time: "3:23" },
  { text: "Que si pudiera darle al tiempo otro poco de tiempo", time: "3:26" },
  { text: "Para comprender que sin ti, mi vida ya no la siento", time: "3:30" },
  { text: "Que el color se vuelve a blanco y negro", time: "3:35" },
  { text: "Y sé que la distancia me hizo ciego", time: "3:38" },
  { text: "En todos los momentos", time: "3:40" },
  { text: "En los que tenía que verte aquí", time: "3:42" },
  { text: "Mmh, mmh-mmh, mmh-mmh, mmh-mmh-mmh", time: "3:46" },
  { text: "Pamela te amo mucho, no puedo perderte. Hice esto con el fin de intentar recuperarte. TE AMO", time: "3:47" },
];

let lastText = "";

// Actualización sutil del texto con desvanecido
function updateLyrics() {
  if (!audio || !lyrics) return;

  var elapsed = Math.max(audio.currentTime - START_TIME, 0);
  var time = Math.floor(elapsed);
  var currentLine = lyricsData.find(function (line) {
    var lineTime = timeToSeconds(line.time);
    return time >= lineTime && time < lineTime + 5;
  });

  if (currentLine) {
    if (lastText !== currentLine.text) {
      lastText = currentLine.text;
      lyrics.style.opacity = 0;

      setTimeout(() => {
        lyrics.innerHTML = currentLine.text;
        lyrics.style.opacity = 1;
      }, 250);
    }
  } else {
    lyrics.style.opacity = 0;
    lastText = "";
  }
}

setInterval(updateLyrics, 500);

// Desvanecer el título romántico después de 3.5 minutos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  if (titulo) {
    titulo.style.animation = "fadeOut 3.5s ease-in-out forwards";
    setTimeout(function () {
      titulo.style.display = "none";
    }, 3500);
  }
}

setTimeout(ocultarTitulo, 216000);