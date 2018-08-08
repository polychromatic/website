//--------------------------------------
// Barba Library and Page Transitions
//--------------------------------------
$(document).ready(function() {
    Barba.Pjax.start();
});

function changePage(element) {
    $(".nav-btn").removeClass("active");
    $(element).addClass("active");
}

document.addEventListener("click", function(e) {
    var el = e.target;
    var hostname = e.target.host;

    if (hostname !== "localhost" || hostname !== "polychromatic.github.io") {
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
        return $(this.oldContainer).addClass("page-out").animate({ opacity: 0 }).promise();
    },

    fadeIn: function() {
        var _this = this;
        var $el = $(this.newContainer);

        $(this.oldContainer).hide();

        $el.css({
            visibility : 'visible',
            opacity : 0
        });

        $el.addClass("page-in").animate({ opacity: 1 }, 400, function() {
            _this.done();
        });
    }
});

Barba.Pjax.getTransition = function() {
    return FadeTransition;
};

function makeActive(self) {
    $(self).addClass("active");
}
