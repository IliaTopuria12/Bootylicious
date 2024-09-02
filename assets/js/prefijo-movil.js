// Inicializa intl-tel-input en el campo de teléfono
var input = document.querySelector("#telefono");
window.intlTelInput(input, {
    initialCountry: "es",  // Establece España como país predeterminado
    preferredCountries: ["es"],  // Lista de países preferidos (opcional)
    utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js"
});