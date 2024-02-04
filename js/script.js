// Add an event listener to the document to run a function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Get the left and right image elements by their ids
    const leftImage = document.getElementById("leftImage");
    const rightImage = document.getElementById("rightImage");
    // Declare a function to apply an exit animation to the images
    const applyExitAnimation = () => {
        // Move the left image to the left by 100% of its width
        leftImage.style.transform = "translateX(-100%)";
        // Move the right image to the right by 100% of its width
        rightImage.style.transform = "translateX(100%)";
    };
    // Call the function to apply the exit animation
    applyExitAnimation();
});

// Get the neon image element by its id
const neonImage = document.getElementById("neonImage");

// Declare a function to apply a neon effect to the image
const applyNeonEffect = () => {
    // Set the cssText property of the image element using a template literal
    neonImage.style.cssText = `
    filter: drop-shadow(0 0 20px rgba(255, 0, 255, 0.7)); // Add a neon pink drop shadow effect
    transform: scale(1.03); // Slightly increase the image size
    transition: filter 0.3s ease-out, transform 0.4s ease-out; // Add transitions for filter and transform properties
  `;
};

// Declare a function to start an automatic color transition for the image
const startColorTransition = () => {
    // Declare a variable to store the current color index
    let colorIndex = 0;
    // Declare a constant array to store the colors for the transition
    const colors = [
        "rgba(255, 0, 255, 0.7)",
        "rgba(255, 204, 0, 0.7)",
        "rgba(255, 102, 0, 0.7)",
        "rgba(255, 204, 0, 0.7)",
        "rgba(0, 26, 255, 0.7)",
    ];
    // Use setInterval to run a function every 500 milliseconds
    setInterval(() => {
        // Set the filter property of the image element using a template literal
        neonImage.style.filter = `drop-shadow(0 0 20px ${colors[colorIndex]})`; // Change the color of the drop shadow effect
        // Update the color index using the modulo operator
        colorIndex = (colorIndex + 1) % colors.length; // Cycle through the colors array
    }, 500);
};

// Apply neon effect on page load
applyNeonEffect();

// Start automatic color transition
startColorTransition();

// Add event listener for hover
document.body.addEventListener("mouseenter", () => {
    // Apply exit animation for left and right images on hover
    applyExitAnimation();
});

// Function to create a random neon word
function createNeonWord() {
    // Declare a constant array to store the possible neon words
    const neonWords = [
        "MORENA",
        "MORENO",
        "MORENE",
        ".COM",
        "GATA",
        "GATE",
        "GATO",
    ]; // Add more words
    // Declare a constant variable to store a random word from the array
    const randomWord = neonWords[Math.floor(Math.random() * neonWords.length)];
    // Declare a constant variable to create a span element
    const neonWord = document.createElement("span");
    // Set the class name of the span element to "neon-word"
    neonWord.className = "neon-word";
    // Set the text content of the span element to the random word
    neonWord.textContent = randomWord;
    // Randomly position the neon word across a wider range
    // Declare constant variables to store random x and y coordinates
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;
    // Set the left and top properties of the span element using template literals
    neonWord.style.left = `${randomX}px`;
    neonWord.style.top = `${randomY}px`;
    // Set specific neon word colors (same as before)
    // ...
    // Append the span element to the neon words container
    document.getElementById("neon-words-container").appendChild(neonWord);
}

// Create fewer neon words for a balanced effect
// Use a for loop to call the createNeonWord function 30 times
for (let i = 0; i < 30; i++) {
    createNeonWord();
}

// Randomly show/hide neon words
// Use setInterval to run a function every 500 milliseconds
setInterval(() => {
    // Declare a constant variable to store all the neon word elements
    const allNeonWords = document.querySelectorAll(".neon-word");
    // Use forEach to loop through each neon word element
    allNeonWords.forEach((word) => {
        // Declare a constant variable to store a random opacity value between 0 and 1
        const randomOpacity = Math.random();
        // Set the opacity property of the neon word element to the random value
        word.style.opacity = randomOpacity;
    });
}, 500); // Adjust timing as desired
