document.querySelectorAll('body *:not(nav *):not(footer *):not(nav):not(footer)').forEach(el => {
    // Voeg enkel toe als het zichtbaar is (geen script/style/meta/etc.)
    if (el instanceof HTMLElement && el.offsetParent !== null) {
        el.classList.add('hidden');
    }
});


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

    document.querySelectorAll('.hidden').forEach(el => observer.observe(el));
