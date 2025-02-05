console.log("JS file connected");

// Get each svg image by their id.
const chocolateImage = document.getElementById("chocolate");
const strawberryImage = document.getElementById("strawberry");
const bananaImage = document.getElementById("banana");

const onSvgClicked = (event) => {
    console.log(`SVG with ID: ${event.currentTarget.id} has been clicked`)
}
    
// If Chocolate Image Exists, add a click event listener to it that will print to console.
if(chocolateImage){
    chocolateImage.addEventListener("click", onSvgClicked);
}

// If Strawberry Image Exists, add a click event listener to it that will print to console.
if(strawberryImage){
    strawberryImage.addEventListener("click", onSvgClicked);
}

// If Banana Image Exists, add a click event listener to it that will print to console.
if(bananaImage){
    bananaImage.addEventListener("click", onSvgClicked);
}
