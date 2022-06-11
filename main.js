function onScroll() {
  if (scrollY == 0) {
    document.getElementById('navigation').classList.remove('scroll')
  } else {
    document.getElementById('navigation').classList.add('scroll')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}
