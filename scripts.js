let numberOfFaces = 5;

const theLeftSide = document.getElementById("leftSide");

document.addEventListener('DOMContentLoaded', function generateFaces() {
        //adding 5 random smiles to the left
        for (i = 0; i < numberOfFaces; i++) {
            let img = document.createElement("img");
            img.src = "smile.png";
            img.style.top = `${Math.floor((Math.random() * 400) + 0)}px`;
            img.style.left = `${Math.floor((Math.random() * 350) + 0)}px`;

            theLeftSide.appendChild(img);
        };

        //handling the right side
        const theRightSide = document.getElementById("rightSide");
        
        let rightSideImages = theLeftSide.cloneNode(true);
        rightSideImages.removeChild(rightSideImages.lastChild);
        theRightSide.appendChild(rightSideImages);

        //building the game itself
        const theBody = document.getElementsByTagName("body")[0];

        theLeftSide.lastChild.addEventListener('click', function nextLevel(event) {
                event.stopPropagation();
                numberOfFaces += 5;
                generateFaces();           
        })

        theBody.addEventListener('click', function gameOver() {
            alert("You chose the wrong smile! Try again!");
            theBody = null;
            theLeftSide.lastChild = null;
        });
});

console.log("Everything is working globally")

