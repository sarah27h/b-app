// $(function () {
//   $(window).on('scroll', function () {
//     if ($(window).scrollTop() > 10) {
//       $('.header__navbar').addClass('active');
//     } else {
//       $('.header__navbar').removeClass('active');
//     }
//   });
// });

const headerNavbar = document.querySelector('.header__navbar');
const headerNavbarLinks = document.querySelectorAll('.header__nav-link');
console.log(headerNavbar);

// document.body.addEventListener('scroll', function () {
//   console.log(document.body.scrollTop);
//   if (document.body.scrollTop > 10) {
//     headerNavbar.classList.add('active');
//   } else {
//     headerNavbar.classList.remove('active');
//   }
// });

window.onscroll = function () {
  // document.body.scrollTop for firefox, IE
  // document.documentElement.scrollTop for Chrome

  if (document.documentElement.scrollTop || document.body.scrollTop > 10) {
    headerNavbar.classList.add('scroll-js');
    Array.prototype.forEach.call(headerNavbarLinks, function (navbarLink) {
      navbarLink.classList.add('navbarScroll');
    });
  } else {
    headerNavbar.classList.remove('scroll-js');
    Array.prototype.forEach.call(headerNavbarLinks, function (navbarLink) {
      navbarLink.classList.remove('navbarScroll');
    });
  }
};
