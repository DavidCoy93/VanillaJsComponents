export class auto {
    /**
     * 
     * @param {number} numeroLlantas 
     * @param {number} numeroPuertas 
     * @param {string} color 
     * @param {string} tipoTransmision 
     */
    constructor(numeroLlantas, numeroPuertas, color, tipoTransmision) {
        this.numeroLlantas = numeroLlantas;
        this.numeroPuertas = numeroPuertas;
        this.color = color;
        this.tipoTransmision = tipoTransmision;
    }
}


/**
 * @summary Funcion para crear un elemento tipo span personalizado
 * @param {auto} auto mensaje a mostrar
 * @returns {HTMLSpanElement} regresa el elemento a agrgar al html
 */
export function showLittleMessage(auto) {
    const span = document.createElement('span');
    const descripciónAuto = `No. de llantas ${auto.numeroLlantas}, No. de puertas ${auto.numeroPuertas}, color ${auto.color}, tipo de transmisión ${auto.tipoTransmision}`;
    span.innerHTML = descripciónAuto;
    span.innerText = descripciónAuto;
    span.style.backgroundColor = '#000000';
    span.style.color = '#ffffff'
    return span;
}


/**
 * 
 * @param {string} backgroundColor 
 * @param {string} fontColor
 * @param {string} text
 * @returns {HTMLButtonElement} crea un nuevo elemento tipo botón
 */
export function createButton(backgroundColor, fontColor, text) {
    const button = document.createElement('button');
    button.style.backgroundColor = backgroundColor;
    button.style.color = fontColor;
    button.innerText = text;
    button.type = 'button';
    button.addEventListener('click', function(ev){
        alert('Que chingue a su madre el america ');
    })
    return button;
}