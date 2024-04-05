const mobileMenu = document.querySelector('.mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
   if(navList.style.visibility === 'hidden' && navList.style.opacity === '0') {
    navList.style.transition = 'opacity 0.1s linear';
    navList.style.visibility = 'visible';
    navList.style.opacity = '1';
   } else {
    navList.style.transition = 'visibility linear 0.1s, opacity 0.1s linear';
    navList.style.visibility = 'hidden';
    navList.style.opacity = '0';
   }
});