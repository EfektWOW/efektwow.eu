// ── WOW NAVBAR 2026 ──────────────────────────────────────────────
(function () {
    const header   = document.querySelector('.wow-header');
    const navbar   = document.querySelector('.wow-navbar');
    const toggle   = document.querySelector('.wow-mobile-toggle');
    const expandBtn = document.querySelector('.wow-expand-btn');

    const COLLAPSE_AT = 80; // px od góry — kiedy navbar się zwija

    // ── Scroll: collapse / expand ────────────────────────────────
    let lastY = 0;

    window.addEventListener('scroll', () => {
        const y = window.scrollY;

        // collapsed state
        if (y > COLLAPSE_AT) {
            header.classList.add('wow-collapsed');
        } else {
            header.classList.remove('wow-collapsed', 'wow-expanded');
        }

        // scrolled (lekki cień, bez collapse)
        header.classList.toggle('wow-scrolled', y > 30);

        // zamknij rozwinięte menu przy przewijaniu w dół
        if (y > lastY + 10) {
            header.classList.remove('wow-expanded');
        }

        lastY = y;
    }, { passive: true });

    // ── Przycisk „rozwiń" (widoczny po zwinięciu, desktop) ───────
    if (expandBtn) {
        expandBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            header.classList.toggle('wow-expanded');
        });
    }

    // ── Hamburger (mobile) ───────────────────────────────────────
    if (toggle) {
        toggle.addEventListener('click', () => {
            navbar.classList.toggle('wow-open');
        });
    }

    // ── Klik poza navbar zamyka oba menu ────────────────────────
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target)) {
            navbar.classList.remove('wow-open');
            header.classList.remove('wow-expanded');
        }
    });

    // ── Klik w link zamyka menu ──────────────────────────────────
    document.querySelectorAll('.wow-nav-link, .wow-contact-btn').forEach(el => {
        el.addEventListener('click', () => {
            navbar.classList.remove('wow-open');
            header.classList.remove('wow-expanded');
        });
    });
})();