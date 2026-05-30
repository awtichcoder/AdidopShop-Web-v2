// wwwroot/js/moveUnderline.js

export function moveUnderline() {
  const currentPath = window.location.pathname.toLowerCase()

  const navLinks = document.querySelectorAll('.nav-link')

  navLinks.forEach((link) => {
    const linkPath = link.getAttribute('href').toLowerCase()

    if (
      currentPath === linkPath ||
      (linkPath !== '/' && currentPath.startsWith(linkPath))
    ) {
      link.classList.add('active')
    } else {
      link.classList.remove('active')
    }
  })
}
