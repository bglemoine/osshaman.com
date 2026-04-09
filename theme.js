// Theme toggle: light / system / dark
(function () {
    var saved = localStorage.getItem('theme') || 'system';
    if (saved === 'dark' || saved === 'light') {
        document.documentElement.setAttribute('data-theme', saved);
    }

    document.addEventListener('DOMContentLoaded', function () {
        var buttons = document.querySelectorAll('.theme-toggle button');
        function setActive(theme) {
            buttons.forEach(function (b) {
                b.classList.toggle('active', b.getAttribute('data-theme') === theme);
            });
        }
        setActive(saved);

        buttons.forEach(function (btn) {
            btn.addEventListener('click', function () {
                var theme = btn.getAttribute('data-theme');
                localStorage.setItem('theme', theme);
                if (theme === 'system') {
                    document.documentElement.removeAttribute('data-theme');
                } else {
                    document.documentElement.setAttribute('data-theme', theme);
                }
                setActive(theme);
            });
        });
    });
})();
