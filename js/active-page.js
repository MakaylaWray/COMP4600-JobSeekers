window.onload = function() {
    var navBar = document.getElementsByClassName('main-nav-bar')[0];
    if (!navBar) {
        return;
    }

    var links = navBar.getElementsByTagName('a');
    var currentPath = window.location.pathname.split('/').pop() || 'index.html';

    for (var i = 0; i < links.length; i++) {
        if (links[i].closest('.cta-button')) {
            continue;
        }

        var href = links[i].getAttribute('href');
        if (!href) {
            continue;
        }

        var linkPath = new URL(href, window.location.href).pathname.split('/').pop();
        if (linkPath === currentPath) {
            links[i].classList.add('current-page-link');
        }
    
    }
    var acc = document.getElementsByClassName("accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
        panel.style.display = "none";
        } else {
        panel.style.display = "block";
        }
    });
};


};

