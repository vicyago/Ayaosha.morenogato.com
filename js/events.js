var interval = 250;
window.onload = function () {
    var listItems = document.querySelectorAll("li");
    listItems.forEach(function (el, index) {
        var timeout = interval * index;
        setTimeout(function () {
            el.classList.add("show");
        }, timeout);
    });
};
