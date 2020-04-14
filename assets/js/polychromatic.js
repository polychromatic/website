//--------------------------------------
// Barba Library and Page Transitions
//--------------------------------------
var transition_speed = 300;

$(document).ready(function() {
    Barba.Pjax.start();
});

function changePage(element) {
    $(element).siblings().removeClass("active");
    $(element).addClass("active");
}

document.addEventListener("click", function(e) {
    var el = e.target;
    var hostname = e.target.host;

    if (hostname !== "localhost" || hostname !== "polychromatic.app") {
        return;
    }

    while (el && !el.href) {
        el = el.parentNode;
    }

    if (el) {
        e.preventDefault();
        return;
    }
});

var FadeTransition = Barba.BaseTransition.extend({
    start: function() {
        Promise
          .all([this.newContainerLoading, this.fadeOut()])
          .then(this.fadeIn.bind(this));
    },

    fadeOut: function() {
        return;
    },

    fadeIn: function() {
        var _this = this;
        var oldContainer = $(this.oldContainer)
        var newContainer = $(this.newContainer)

        oldContainer.hide();
        window.scrollTo(0, 0);

        // Skip transitions on documentation pages.
        if (window.location.pathname.substring(0, 6) == "/docs/") {
            newContainer.css("visibility", "visible");
            newContainer.find(".topic").addClass("page-in");
        } else {
            // Similiar transition as seen in the Controller.
            newContainer.css("visibility", "visible").addClass("page-in");
        }

        setTimeout(function() {
            _this.done();
        }, transition_speed);
    }
});

Barba.Pjax.getTransition = function() {
    return FadeTransition;
};

function makeActive(self) {
    $(self).addClass("active");
}

if (document.location.href.search("/docs/") != -1) {
    $("td").each(function() {
        if (this.textContent == "Yes") {
            this.classList.add("yes")
        } else if (this.textContent == "No") {
            this.classList.add("no")
        }
    });
}
