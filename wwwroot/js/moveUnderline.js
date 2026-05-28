const nav = document.getElementById('nav-menu')
const items = document.querySelectorAll('.nav-item')
const underline = document.getElementById('underline')

function moveUnderline(element, animate = true) {
  if (!animate) {
    underline.classList.remove('transition-all', 'duration-300')
  } else {
    underline.classList.add('transition-all', 'duration-300')
  }

  const navLeft = nav.getBoundingClientRect().left
  const itemRect = element.getBoundingClientRect()

  underline.style.width = `${itemRect.width}px`
  underline.style.left = `${itemRect.left - navLeft + nav.scrollLeft}px`
}

let activeItem = null
items.forEach((item, index) => {
  if (window.location.pathname === item.getAttribute('href')) {
    activeItem = item
    item.classList.remove('text-zinc-500')
    item.classList.add('text-zinc-950', 'font-semibold')
    item.setAttribute('data-index', index)
  }
})

if (!activeItem) {
  activeItem = items[0]
  activeItem.classList.add('text-zinc-950', 'font-semibold')
}

const prevIndex = sessionStorage.getItem('prevNavIndex')
const currentIndex = activeItem.getAttribute('data-index')

if (prevIndex !== null && prevIndex !== currentIndex && items[prevIndex]) {
  moveUnderline(items[prevIndex], false)

  setTimeout(() => {
    moveUnderline(activeItem, true)
  }, 50)
} else {
  setTimeout(() => moveUnderline(activeItem, false), 50)
}

items.forEach((item, index) => {
  item.addEventListener('click', () => {
    sessionStorage.setItem('prevNavIndex', currentIndex || 0)
  })
})

window.addEventListener('resize', () => {
  if (activeItem) moveUnderline(activeItem, false)
})
