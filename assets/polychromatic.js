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
    docs_sidebar_shown = window.location.pathname.search("/docs/") != -1;
}

function download_select(element) {
    element.classList.add("active");
}

function change_doc(element) {
    var nav_docs = document.getElementsByClassName("nav-docs");
    var nav_sidebar = document.getElementsByClassName("sidebar")[0];

    for (b = 0; b < nav_docs.length; b++) {
        nav_docs[b].classList.remove("active");
    }

    element.classList.add("active");
    nav_sidebar.classList.remove("transition-fade");
}

// Initial page load
page_enter();
