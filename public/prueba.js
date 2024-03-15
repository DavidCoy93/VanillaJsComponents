import { auto, showLittleMessage, createButton } from './main.js';


class customTag extends HTMLElement {
    constructor() {
        super();
        this.addEventListener('mouseover', function() {
          document.getElementsByTagName('title')[0].innerText = "Entra mierda"  
        });
    }

    auto = new auto(4, 4, 'blanco', 'manual');
    button = createButton('red', '#ffffff');
    span = showLittleMessage(this.auto);

    async initTag() {
        const h2 = document.createElement('h2');
        const br = document.createElement('br');
        h2.innerText = this.message || "Me mando a al chingada";
        this.append(h2);
        this.append(br);
        this.append(this.button);
        this.append(br);
        this.append(this.span);


        
        
        const cameras =  await navigator.mediaDevices.getUserMedia({ video: true });
        navigator.permissions.query({ name: 'camera' }).then((permCam) => {
            if (permCam.state === 'granted') {
                if (cameras instanceof MediaStream) {
                    const video = document.createElement('video');
                    video.srcObject = cameras;
                    video.playsInline = true;
                    video.autoplay = true;
                    video.width = 120;
                    video.height = 160;
                    this.append(video);
                    const canvas = document.createElement('canvas');
                    canvas.height = 240;
                    canvas.width = 320;
                    this.append(canvas);
                }
            }
        })
        

        navigator.geolocation.getCurrentPosition((position) => {
            navigator.permissions.query({ name: 'geolocation' }).then((perm) => {
                if (perm.state === 'granted') {
                    const h1 = document.createElement('h1');
                    h1.innerText = `Su posición es Longitud: ${position.coords.longitude}, Latitud: ${position.coords.latitude}`;
                    this.append(h1);
                }
            })
        });   
    }

    get message() { return this.getAttribute('message') }

    connectedCallback(){
        this.initTag();
    }

}

customElements.define('prueba-tag', customTag);

document.addEventListener('DOMContentLoaded', function() {
    const autoPrueba = new auto(4, 4, 'Blanco', 'Manual');
    const spanDescAuto = showLittleMessage(autoPrueba);
    const button = createButton('red', 'blue', 'Mande un saludo');
    var nodesArray = [spanDescAuto, button];
    nodesArray.forEach(function(value, i) {
        if (value instanceof HTMLSpanElement) {
            console.log('Es un span');
        } else if (value instanceof HTMLButtonElement) {
            console.log('Es un botón');
        }
        document.getElementById('divPrueba').append(value);
    });
    const myPruebaTag = document.createElement('prueba-tag');
    document.getElementById('divPrueba').append(myPruebaTag);
})