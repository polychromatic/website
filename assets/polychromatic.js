// Smooth Page Transitions
var docs_sidebar_shown = false;

const options = {
    animateHistoryBrowsing: true,
    linkSelector: 'a[href^="/"]:not([data-no-swup]), a[href^="../"]:not([data-no-swup])',
};

function _do_smooth_scroll() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}

const swup = new Swup(options);
swup.on("transitionStart", page_exit);
swup.on("contentReplaced", page_enter);

function page_enter() {
    _do_smooth_scroll();

    // Update navigation 'active' class
    var nav_class = document.getElementById("current-page-class").value;
    var nav_active = document.getElementById("nav-" + nav_class);
    var nav_btns = document.getElementsByClassName("nav-btn");

    for (b = 0; b < nav_btns.length; b++) {
        nav_btns[b].classList.remove("active");
    }

    if (nav_active != null) {
        nav_active.classList.add("active");
    }

    // On mobile, close the navigation menu
    document.getElementById("mobile-menu-toggle").checked = false;


    // Smoothly scroll to the top when clicking internal links
    var links = document.querySelectorAll("a");
    for (a = 0; a < links.length; a++) {
        var link = links[a];
        var same_domain = link.protocol == window.location.protocol && link.host == window.location.host;
        if (link.smooth == true)
            continue;
        if (same_domain != false) {
            link.addEventListener("click", _do_smooth_scroll);
            link.smooth = true;
        }
    }
}

function page_exit() {

}

function download_select(element) {
    element.classList.add("active");
}

// Initial page load
page_enter();
