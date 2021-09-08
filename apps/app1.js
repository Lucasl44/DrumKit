document.addEventListener("keydown", logKey)
function logKey(event){    
    let key = event.key;
    console.log(key)
    if (key == "a") {
        boom();
    } else if (key == "s") {
        clap();
    } else if (key == "d") {
        hihat();
    } else if (key == "f") {
        kick();
    } else if (key == "g") {
        openhat();
    } else if (key == "h") {
        ride();
    } else if (key == "j") {
        snare();
    } else if (key == "k") {
        tink();
    } else if (key == "l") {
        tom();
    }
}

function boom() {
    const boom = new Audio("sounds/boom.wav");
    boom.play();
}

function clap() {
    const clap = new Audio("sounds/clap.wav");
    clap.play();
}

function hihat() {
    const hihat = new Audio("sounds/hihat.wav");
    hihat.play();
}

function kick() {
    const kick = new Audio("sounds/kick.wav");
    kick.play();
}

function openhat() {
    const openhat = new Audio("sounds/openhat.wav");
    openhat.play();
}

function ride() {
    const ride = new Audio("sounds/ride.wav");
    ride.play();
}

function snare() {
    const snare = new Audio("sounds/snare.wav");
    snare.play();
}

function tink() {
    const tink = new Audio("sounds/tink.wav");
    tink.play();
}

function tom() {
    const tom = new Audio("sounds/tom.wav");
    tom.play();
}

const boom1 = document.getElementById("boom");
const clap1 = document.getElementById("clap");
const hihat1 = document.getElementById("hihat");
const kick1 = document.getElementById("kick");
const openhat1 = document.getElementById("openhat");
const ride1 = document.getElementById("ride");
const snare1 = document.getElementById("snare");
const tink1 = document.getElementById("tink");
const tom1 = document.getElementById("tom");

boom1.addEventListener("click", () => {
    boom();
});

clap1.addEventListener("click", () => {
    clap();
});

hihat1.addEventListener("click", () => {
    hihat();
});

kick1.addEventListener("click", () => {
    kick();
});

openhat1.addEventListener("click", () => {
    openhat();
});

ride1.addEventListener("click", () => {
    ride();
});

snare1.addEventListener("click", () => {
    snare();
});

tink1.addEventListener("click", () => {
    tink();
});

tom1.addEventListener("click", () => {
    tom();
});

