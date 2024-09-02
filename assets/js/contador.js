function iniciarContador(duracion, elemento) {
    var tiempo = duracion, horas, minutos, segundos, dias;
    setInterval(function () {
        dias = parseInt(tiempo / 86400, 10);
        horas = parseInt((tiempo % 86400) / 3600, 10);
        minutos = parseInt((tiempo % 3600) / 60, 10);
        segundos = parseInt(tiempo % 60, 10);

        horas = horas < 10 ? "0" + horas : horas;
        minutos = minutos < 10 ? "0" + minutos : minutos;
        segundos = segundos < 10 ? "0" + segundos : segundos;

        elemento.textContent = dias + ":" + horas + ":" + minutos + ":" + segundos;

        if (--tiempo < 0) {
            tiempo = 0;
        }
    }, 1000);
}

window.onload = function () {
    var duracion = 7 * 24 * 60 * 60 + 18 * 60 * 60 + 54 * 60; // Duración en segundos (7 días, 18 horas, 54 minutos)
    var display = document.querySelector('#contador');
    iniciarContador(duracion, display);
};

function reservar() {
    alert("Reserva realizada!");
}
