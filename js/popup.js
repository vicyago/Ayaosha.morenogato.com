// Get the modal
var modal = document.getElementById("myModal");

// Get the modal content
var modalContent = document.getElementsByClassName("modal-content")[0];

// Get the buttons that open the modal
var btnDesktop = document.getElementById("myBtn");
var btnMobile = document.getElementById("myBtnMobile");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Function to open the modal
var openModal = function () {
    modal.style.display = "block";
    // Reset the top position of the modal content
    modalContent.style.top = "0";
};

// When the user clicks the buttons, open the modal
btnDesktop.onclick = openModal;
btnMobile.onclick = openModal;

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
