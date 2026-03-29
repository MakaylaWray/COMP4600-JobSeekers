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
};
