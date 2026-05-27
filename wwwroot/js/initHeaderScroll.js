// header scroll effect
export function initHeaderScroll() {
  const header = document.getElementById('main-header')
  const headerInner = document.getElementById('header-inner')
  const logo = document.getElementById('header-logo')
  const menutoggle = document.querySelectorAll('.menu-toggle')

  if (!header || !headerInner || !logo || !menutoggle) return

  window.addEventListener('scroll', function () {
    if (window.scrollY > 150) {
      header.classList.remove('bg-transparent', 'text-white')
      header.classList.add('bg-white', 'text-black')
      headerInner.classList.replace('h-20', 'h-16')
      logo.classList.remove('brightness-0', 'invert')
      menutoggle.forEach((toggle) => {
        toggle.classList.remove('hover:bg-[#232323]')
        toggle.classList.add('hover:bg-zinc-200')
      })
    } else {
      header.classList.remove('bg-white', 'text-black')
      header.classList.add('bg-transparent', 'text-white')
      headerInner.classList.replace('h-16', 'h-20')
      logo.classList.add('brightness-0', 'invert')
      menutoggle.forEach((toggle) => {
        toggle.classList.add('hover:bg-[#232323]')
        toggle.classList.remove('hover:bg-zinc-200')
      })
    }
  })
}
