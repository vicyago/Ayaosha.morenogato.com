function handleModal(modalId, btnDesktopId, btnMobileId, spanClass) {
    // Get the modal
    var modal = document.getElementById(modalId);

    // Get the modal content
    var modalContent = modal.getElementsByClassName("modal-content")[0];

    // Get the buttons that open the modal
    var btnDesktop = document.getElementById(btnDesktopId);
    var btnMobile = document.getElementById(btnMobileId);

    // Get the <span> element that closes the modal
    var span = modal.getElementsByClassName(spanClass)[0];

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
}

// Handle the first modal
handleModal("myModal", "myBtn", "myBtnMobile", "close");

// Handle the second modal
handleModal("myEventsModal", "myEvents", "myEventsMobile", "close");
