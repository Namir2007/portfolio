let navButton = document.getElementById("fixed-nav-button");
window.addEventListener('scroll', () => {
    const verticalScrollPx = window.scrollY || window.pageYOffset;
    if (verticalScrollPx > 600 || verticalScrollPx < 3000) {
        navButton.style.opacity = '1';
    } else {
        navButton.style.opacity = '0';
    }
});