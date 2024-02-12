// Declare the function in the global scope
const applyExitAnimation = () => {
    // Get the left and right image elements by their ids
    const leftImage = document.getElementById("leftImage");
    const rightImage = document.getElementById("rightImage");
    // Move the left image to the left by 100% of its width
    leftImage.style.transform = "translateX(-100%)";
    // Move the right image to the right by 100% of its width
    rightImage.style.transform = "translateX(100%)";
};

// Add an event listener to the document to run a function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Call the function to apply the exit animation
    applyExitAnimation();
});

// Get the elements by their class name or id
const neonImage = document.getElementById("neonImage");
const menuLinks = document.querySelectorAll(".menu a");
const logoImage = document.querySelector(".logo img");
const biographyButton = document.getElementById("myBtn");

// Declare a function to apply a neon effect to the image
const applyNeonEffect = () => {
    neonImage.style.cssText = `
    filter: drop-shadow(0 0 20px rgba(255, 0, 255, 0.7)); // Add a neon pink drop shadow effect
    transition: filter 0.3s ease-out; // Add transitions for filter and transform properties
  `;
};

// Declare a function to start an automatic color transition for the given elements
const startColorTransition = (...elements) => {
    let colorIndex = 0;
    const colors = [
        "rgba(255, 0, 255, 0.7)",
        "rgba(255, 204, 0, 0.7)",
        "rgba(255, 102, 0, 0.7)",
        "rgba(255, 204, 0, 0.7)",
        "rgba(0, 26, 255, 0.7)",
    ];
    setInterval(() => {
        elements.forEach((element) => {
            element.style.filter = `drop-shadow(0 0 20px ${colors[colorIndex]})`;
        });
        colorIndex = (colorIndex + 1) % colors.length;
    }, 500);
};

// Apply neon effect on page load
applyNeonEffect();

// Start automatic color transitions
startColorTransition(neonImage, ...menuLinks, logoImage, biographyButton);



