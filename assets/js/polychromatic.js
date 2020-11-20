// Smooth Page Transitions
var docs_sidebar_shown = false;

const options = {
    animateHistoryBrowsing: true,
    linkSelector: 'a[href^="/"]:not([data-no-swup]), a[href^="../"]:not([data-no-swup])',
};

const swup = new Swup(options);
swup.on("transitionStart", page_exit);
swup.on("contentReplaced", page_enter);

function page_enter(no_scroll) {
    if (no_scroll != true) {
        window.scroll({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    }

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

    // If sidebar is present, make sure it's smoothly animated.
    var nav_sidebar = document.getElementsByClassName("sidebar")[0];
    if (docs_sidebar_shown === true && nav_sidebar != null) {
        nav_sidebar.classList.remove("transition-fade");
        docs_sidebar_shown = window.location.pathname.search("/docs/") != -1;

        setTimeout(function() {
            nav_sidebar.classList.add("transition-fade");
        }, 500);
    }

    // If page contains Yes/No in tables, add the fancy decorations.
    var td = document.querySelectorAll("td");
    if (td.length > 0) {
        for (i = 0; i < td.length; i++) {
            if (td[i].textContent.search("Yes") != -1) {
                td[i].classList.add("yes");
            } else if (td[i].textContent.search("No") != -1) {
                td[i].classList.add("no");
            }
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
page_enter(true);
