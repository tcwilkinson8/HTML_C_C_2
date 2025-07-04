const canvas = document.getElementById("banner");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
   
}
resizeCanvas();
canvas.style.width = "100%";     // This affects layout
canvas.style.height = "25px";   // Controls visual size

// Now set internal resolution (pixel density)
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

window.addEventListener('resize', resizeCanvas);

// Arrow setup
let arrowX = 0;
const speed = 1;

function draw() {
    // Gradient background
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "blue");
    gradient.addColorStop(1, "purple");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Stylized arrow drawing
    ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
    ctx.beginPath();
    ctx.moveTo(arrowX, canvas.height / 2);                         // Tip
    ctx.lineTo(arrowX - 20, canvas.height / 2 - 12);              // Upper flare
    ctx.lineTo(arrowX - 35, canvas.height / 2 - 6);               // Upper waist
    ctx.lineTo(arrowX - 30, canvas.height / 2);                   // Notch center
    ctx.lineTo(arrowX - 35, canvas.height / 2 + 6);               // Lower waist
    ctx.lineTo(arrowX - 20, canvas.height / 2 + 12);              // Lower flare
    ctx.closePath();
    ctx.fill();

    // Update arrow position
    arrowX += speed;
    if (arrowX > canvas.width + 40) arrowX = -40;

    requestAnimationFrame(draw);
}

draw();
