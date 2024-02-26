document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menuIcon');
    const navMenu = document.getElementById('navMenu');
  
    menuIcon.addEventListener('click', function () {
      navMenu.classList.toggle('show');
    });
  });