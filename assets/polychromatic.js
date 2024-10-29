function scrollTop() {
    window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
}

const swup = new Swup();
swup.hooks.on("content:replace", pageEnter);

function pageEnter() {
    scrollTop();

    // Update navigation 'active' class
    const navClass = document.getElementById("current-page-class").value;
    const navActive = document.getElementById(`nav-${navClass}`);

    document.querySelectorAll(".nav-btn").forEach(function(btn) {
        btn.classList.remove("active");
    });

    if (navActive)
        navActive.classList.add("active");

    // On mobile, close the navigation menu
    document.getElementById("mobile-menu-toggle").checked = false;

    // Smoothly scroll to the top for internal links
    document.querySelectorAll("a").forEach(function(link) {
        const isSameDomain = link.protocol == window.location.protocol && link.host == window.location.host;
        if (link.smooth == true)
            return;
        if (isSameDomain != false) {
            link.addEventListener("click", scrollTop);
            link.smooth = true;
        }
    });

    // Supported Devices page only
    loadDeviceList("openrazer", "https://openrazer.github.io/api/devices.json", "https://openrazer.github.io/api/latest_version.txt");

    // Download subpage only
    const header = document.querySelector(".site-header");
    const bgAccent = document.getElementById("header-accent");
    header.style.backgroundColor = bgAccent ? "rgba(" + bgAccent.value + ", 0.25)" : null;

    // Downloads page only
    if (window.location.pathname == "/download/")
        downloadPage();
}

function downloadPage() {
    const buttons = document.querySelectorAll(".distro");
    const userAgent = window.navigator.userAgent;

    // Autodetect OS and highlight the corresponding button
    buttons.forEach(function(button) {
        const label = button.querySelector("span").innerText;
        if (userAgent.indexOf(label) > 0) {
            button.classList.add("detected");
        }

        // Keep button highlighted on click
        button.addEventListener("click", function() {
            button.classList.add("active");
        });
    });

    // Show unsupported message for Windows/Mac platforms
    const unsupportedBox = document.querySelector("#unsupported-os");
    const unsupportedImg = document.querySelector("#unsupported-os-img");

    if (userAgent.indexOf("Windows") > 0) {
        unsupportedBox.style.display = "flex";
        unsupportedBox.hidden = false;
        unsupportedImg.src = "/assets/img/platforms/windows.svg";
    }

    if (userAgent.indexOf("Macintosh") > 0) {
        unsupportedBox.style.display = "flex";
        unsupportedBox.hidden = false;
        unsupportedImg.src = "/assets/img/platforms/macOS.svg";
    }

    if (userAgent.indexOf("CrOS") > 0) {
        unsupportedBox.style.display = "flex";
        unsupportedBox.hidden = false;
        unsupportedImg.src = "/assets/img/platforms/chromeOS.svg";
        const msg = document.querySelector("#unsupported-os-msg");
        msg.innerText = "While ChromeOS is based on Linux, installing the driver for OpenRazer may not be supported.";
    }
}

function loadDeviceList(backend_id, devices_url, version_url) {
    const table = document.getElementById(`${backend_id}-device-table`);
    const info = document.getElementById(`${backend_id}-info`);

    if (!table)
        return;

    const requestDevices = new XMLHttpRequest();
    const requestVersion = new XMLHttpRequest();

    requestDevices.onreadystatechange = function() {
        if (this.readyState != 4)
            return;

        if (this.status != 200 && this.status != 304) {
            info.innerText = "Unable to retrieve data. Please visit OpenRazer's website for the list of supported devices.";
            return;
        }

        if (this.readyState == 4 && this.status == 200) {
            const devices = JSON.parse(requestDevices.responseText);

            devices.forEach(function(device) {
                const formfactor = device.type.charAt(0).toUpperCase() + device.type.slice(1);
                const row = table.insertRow(-1);

                const name = row.insertCell(0);
                name.innerHTML = `<img src="/assets/img/formfactor/${device.type}.svg" title="${formfactor}"/> ${device.name}`;

                const vidpid = row.insertCell(1);
                vidpid.innerHTML = device.vid + ":" + device.pid;
                if (device.alias_ids && device.alias_ids.length > 0)
                    vidpid.innerHTML += `, ${device.alias_ids.join(", ")}`;
            });
        }
    };

    requestVersion.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200 || this.status == 304) {
            info.innerText = `Listing devices for OpenRazer ${requestVersion.responseText}`;
        }
    };

    requestDevices.open("GET", devices_url);
    requestDevices.send();
    requestVersion.open("GET", version_url);
    requestVersion.send();
}

// Initial site load
pageEnter();
