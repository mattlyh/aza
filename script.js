
let cartaAbierta = false;
let segundaCartaAbierta = false;

let toques = 0;

const totalToques = 8;


// =========================
// ABRIR PRIMER SOBRE
// =========================

function abrirCarta() {

    if (cartaAbierta) return;

    cartaAbierta = true;

    const sobre = document.getElementById("sobre");
    const portada = document.getElementById("portada");
    const contenido = document.getElementById("contenido");

    sobre.classList.add("abierto");

    setTimeout(() => {

        portada.classList.add("oculto");
        contenido.classList.remove("oculto");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 800);

}


// =========================
// CAMBIAR COLOR DE LA CARTA
// =========================

function cambiarColor(color) {

    const carta = document.getElementById("carta");

    if (color === "rosa") {

        carta.style.setProperty("--fondo-carta", "#c55778");
        carta.style.setProperty("--texto-carta", "#ffffff");

        carta.classList.add("decoraciones-blancas");

    }

    else if (color === "amarillo") {

        carta.style.setProperty("--fondo-carta", "#f5e6a9");
        carta.style.setProperty("--texto-carta", "#805866");

        carta.classList.remove("decoraciones-blancas");

    }

    else if (color === "crema") {

        carta.style.setProperty("--fondo-carta", "#850a0a");
        carta.style.setProperty("--texto-carta", "#ffffff");

        carta.classList.add("decoraciones-blancas");

    }

}


// =========================
// JUEGO DE POMPOMPURIN
// =========================

function tocarPurin() {

    if (toques >= totalToques) return;

    toques++;

    const purin = document.getElementById("purin");
    const imagen = document.getElementById("purinImagen");
    const texto = document.getElementById("purinTexto");
    const ayuda = document.getElementById("purinAyuda");
    const contador = document.getElementById("contador");


    contador.textContent = toques + " / " + totalToques;


    // TOQUES 1 Y 2: FELIZ

    if (toques <= 2) {

        imagen.src = "imagen1.png.png";
        imagen.alt = "Pompompurin feliz";

        texto.textContent = "jejeje";
        ayuda.textContent = "Otra vez!!";

    }


    // TOQUES 3 Y 4: CONFUNDIDO

    else if (toques <= 4) {

        imagen.src = "imagen2.png.png";
        imagen.alt = "Pompompurin confundido";

        texto.textContent = "que haces? jsjs";
        ayuda.textContent = "ya casi se rinde, sigue!";

    }


    // TOQUES 5, 6 Y 7: ENOJADO

    else if (toques <= 7) {

        imagen.src = "imagen3.png.png";
        imagen.alt = "Pompompurin enojado";

        texto.textContent = "bastaa jeje";
        ayuda.textContent = "ya casi lo logras!";

    }


    // TOQUE 8: ENTREGA LA CARTA

    if (toques === totalToques) {

        purin.classList.add("oculto");

        texto.textContent = "Lo lograste!!";
        ayuda.textContent = "Para ti";

        const entrega = document.getElementById("entrega");

        entrega.classList.remove("oculto");

        setTimeout(() => {

            entrega.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

        }, 500);

    }

}


// =========================
// ABRIR SEGUNDO SOBRE
// =========================

function abrirSegundaCarta() {

    if (segundaCartaAbierta || toques < totalToques) return;

    segundaCartaAbierta = true;

    const sobre = document.getElementById("segundoSobre");
    const segundaCarta = document.getElementById("segundaCarta");

    sobre.classList.add("abierto");

    setTimeout(() => {

        segundaCarta.classList.remove("oculto");

        segundaCarta.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }, 800);

}

// =========================
// REPRODUCTOR DE MÚSICA
// =========================

const musica = document.getElementById("musica");
const controlVolumen = document.getElementById("volumen");
const volumenTexto = document.getElementById("volumenTexto");


// VOLUMEN INICIAL: 15%

musica.volume = 0.15;


// REPRODUCIR

function reproducirMusica() {

    musica.play().catch(error => {
        console.log("No se pudo reproducir la canción:", error);
    });

}


// PAUSAR

function pausarMusica() {

    musica.pause();

}


// CAMBIAR VOLUMEN

controlVolumen.addEventListener("input", function() {

    musica.volume = Number(this.value);

    const porcentaje = Math.round(musica.volume * 100);

    volumenTexto.textContent = "Volumen: " + porcentaje + "%";
    // =========================
// REPRODUCCIÓN AUTOMÁTICA
// =========================

window.addEventListener("load", function() {
    musica.volume = 0.15;
    reproducirMusica();
});

// Si el navegador bloquea el inicio automático,
// intentar reproducir al primer toque o clic.
document.addEventListener("click", function iniciarMusica() {
    if (musica.paused) {
        reproducirMusica();
    }
}, { once: true });

});

