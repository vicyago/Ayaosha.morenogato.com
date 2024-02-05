// Add an event listener to the body element to handle clicks
document.querySelector("body").addEventListener("click", function (e) {
    clickListener(e);
});

// Close the side navigation by setting its width to zero
function closeSideNav() {
    document.getElementById("mySidenav").style.width = "0px";
}

// Handle clicks on the body element
function clickListener(e) {
    // Get the id of the clicked element
    const clickedId = e.target.id;
    // Get the current width of the side navigation
    const navState = window.getComputedStyle(
        document.getElementById("mySidenav")
    ).width;
    // If the clicked element is not the side navigation and the side navigation is open, close it
    if (clickedId !== "mySidenav" && navState === "200px") {
        closeSideNav();
    }
    // If the clicked element is the menu icon and the side navigation is closed, open it
    if (clickedId === "menuIcon" && navState === "0px") {
        // Set the width of the side navigation to 250px using a ternary operator
        document.getElementById("mySidenav").style.width =
            clickedId === "menuIcon" ? "200px" : "0px";
    }
}
