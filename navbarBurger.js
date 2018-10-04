function showBurgerLinks() {
  var navbar = document.getElementById('topNavbar');
  if(navbar.className === 'navbar') {
    navbar.className += 'responsive';
  } else {
    navbar.className = 'navbar';
  }
}
