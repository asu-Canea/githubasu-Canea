function addBody() {
const body = document.getElementById("planetBody");
body.classList.remove("empty");
body.classList.add("filled");
setTimeout(() => location.href = 'water.html', 700);
}


function addWater() {
const water = document.getElementById("planetWater");
water.classList.add("filled");
setTimeout(() => location.href = 'land.html', 700);
}

/*chatgpt code*/ 
function addLand() {
const planet = document.getElementById("planetFinal");

    const land = document.createElement("div");
    land.classList.add("land-piece");

    // random size
    const w = Math.random() * 80 + 20;  // 20–100px
    const h = Math.random() * 60 + 20;  // 20–80px

    land.style.width = w + "px";
    land.style.height = h + "px";

    // random green colors
    const greens = ["#042f11ff", "#c2efb2ff", "#2f3833ff", "#00ff00ff"];
    const color = greens[Math.floor(Math.random() * greens.length)];

    land.style.background = color;

    // random position
    land.style.top = Math.random() * 180 + "px";
    land.style.left = Math.random() * 180 + "px";

    // random border radius shape blob
    land.style.borderRadius =
        `${Math.random()*50}% ${Math.random()*50}% ${Math.random()*50}% ${Math.random()*50}%`;

    planet.appendChild(land);
}