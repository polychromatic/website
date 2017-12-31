/* Homepage */
if (window.location.pathname == "/" || window.location.pathname == "index.html") {
    var typed = new Typed("#typed", {
        stringsElement: "#typed-strings",
        typeSpeed: 50,
        backDelay: 4000,
        shuffle: true,
        loop: true,
        cursorChar: '_',
        autoInsertCss: false,
    });
}
