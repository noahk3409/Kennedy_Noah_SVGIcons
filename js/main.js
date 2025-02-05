console.log("JS file connected");

// Get each svg image by their id.
const chocolateImage = document.getElementById("chocolate");
const strawberryImage = document.getElementById("strawberry");
const bananaImage = document.getElementById("banana");

// If Chocolate Image Exists, add a click event listener to it that will print to console.
if(chocolateImage){
    chocolateImage.addEventListener("click", (event) => {
        console.log("Chocolate was clicked!")
    });
}

// If Strawberry Image Exists, add a click event listener to it that will print to console.
if(strawberryImage){
    strawberryImage.addEventListener("click", (event) => {
        console.log("Strawberry was clicked!")
    });
}

// If Banana Image Exists, add a click event listener to it that will print to console.
if(bananaImage){
    bananaImage.addEventListener("click", (event) => {
        console.log("Banana was clicked!")
    });
}
