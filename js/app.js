
// Constructores
function seguro(marca, year, tipo){
    this.marca = marca;
    this.year = year;
    this.tipo = tipo;
}

function UI() {}


// Llena las opciones de los years
UI.prototype.llenarOpciones = () => {
    const maximo = new Date().getFullYear(),
        minimo = maximo - 20;

    const selectYear= document.querySelector('#year');
    for(let i = maximo; i > minimo; i--){
        const option = document.createElement('option');
        option.textContent = i;
        option.value = i;
        selectYear.appendChild(option);
    }
}


// Instanciar UI
const ui = new UI();


document.addEventListener('DOMContentLoaded', () => {
    ui.llenarOpciones();
})