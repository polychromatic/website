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

    // For Supported Devices page
    _fetch_device_list("openrazer", "https://openrazer.github.io/api/devices.json", "https://openrazer.github.io/api/latest_version.txt");
}

function _fetch_device_list(backend_id, devices_url, version_url) {
    if (! document.getElementById(backend_id + "-device-table"))
        return;

    var xhttp = new XMLHttpRequest();
    var xhttp2 = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState != 4)
            return;

        if (this.status != 200 && this.status != 304)
            return _failed_device_list("openrazer");

        if (this.readyState == 4 && this.status == 200) {
            var devices = JSON.parse(xhttp.responseText);
            return _process_device_list("openrazer", devices);
        }
    };

    xhttp2.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200 || this.status == 304) {
            var info = document.getElementById(backend_id + "-info");
            info.innerText = `Listing devices for OpenRazer ${xhttp2.responseText}`;
        }
    };

    xhttp.open("GET", devices_url);
    xhttp.send();
    xhttp2.open("GET", version_url);
    xhttp2.send();
}

function _failed_device_list(backend_id) {
    var info = document.getElementById(backend_id + "-info");
    info.innerText = "Unable to retrieve data. Please visit OpenRazer's website for the list of supported devices.";
}

function _process_device_list(backend_id, devices) {
    var table = document.getElementById(backend_id + "-device-table");
    for (d = 0; d < devices.length; d++) {
        var device = devices[d];
        var formfactor = device.type.charAt(0).toUpperCase() + device.type.slice(1);

        var row = table.insertRow(-1);
        var name = row.insertCell(0);
        var vidpid = row.insertCell(1);
        name.innerHTML = `<img src="/assets/img/formfactor/${device.type}.svg" title="${formfactor}"/> ${device.name}`;
        vidpid.innerHTML = device.vid + ":" + device.pid;
    }
}

function page_exit() {

}

function download_select(element) {
    element.classList.add("active");
}

// Initial page load
page_enter();
