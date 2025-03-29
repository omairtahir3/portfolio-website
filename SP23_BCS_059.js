const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');
const menuItems = document.querySelectorAll('.nav-links a');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
};

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active'); 
    });
});


