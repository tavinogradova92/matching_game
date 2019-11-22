let numberOfFaces = 5;

const theLeftSide = document.getElementById("leftSide");

document.addEventListener('DOMContentLoaded', function generateFaces() {
        for (i = 0; i < 5; i++) {
        let img = document.createElement("img");
        img.src = "smile.png";
        img.style.top = `${Math.floor((Math.random() * 400) + 0)}px`;
        img.style.left = `${Math.floor((Math.random() * 400) + 0)}px`;

        theLeftSide.appendChild(img);
    };
});

console.log("Everything is working globally")

