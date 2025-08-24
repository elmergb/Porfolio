window.addEventListener('load', function() {
    setTimeout(function() {
        const openingAnimation = document.getElementById('openingAnimation');
        openingAnimation.style.opacity = '0';
        setTimeout(function() {
            openingAnimation.style.display = 'none';
        }, 1000);
    }, 2000);
});