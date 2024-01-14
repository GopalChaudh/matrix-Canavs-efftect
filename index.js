/**@type {HTMLCanvasElement} */

const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext('2d');
let canvasWidth = canvas.width = window.innerWidth;
let canvasHeight = canvas.height = window.innerHeight;
const lineColor = "#7a7979";
const matrix = 20;
let hue = 0;

function animation(){
    ctx.fillStyle = "rgba(0,0,0,0.03)";
    ctx.fillRect(0,0,canvasWidth,canvasHeight);
    drawMatrix();
    requestAnimationFrame(animation);
}

animation();

window.addEventListener('mousemove',(event)=>{
    ctx.fillStyle = `hsl(${hue},100%,50%)`
    hue++;
    ctx.fillRect(Math.floor(event.x/matrix)*matrix, Math.floor(event.y/matrix)*matrix, matrix, matrix);
});

function drawMatrix() {
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = 0.5; 
    for (let i = matrix; i < canvasWidth; i += matrix) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, canvasHeight);
        ctx.stroke();
    }

    // Horizontal lines
    for (let i = matrix; i < canvasHeight; i += matrix) {
        ctx.beginPath();
        ctx.moveTo(0, i);
        ctx.lineTo(canvasWidth, i);
        ctx.stroke();
    }
}

window.addEventListener("resize", () => {
    canvasWidth = canvas.width = window.innerWidth;
    canvasHeight = canvas.height = window.innerHeight;
    drawMatrix();
});
