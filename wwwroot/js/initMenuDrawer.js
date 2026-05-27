//
const menuData = {
  featured: [
    { text: 'New Arrivals' },
    { text: 'Best Sellers' },
    { text: 'All Shoes' },
    { text: 'Trending' },
    { text: 'Shop by Sport' },
    { text: 'Coming Soon' },
    { text: 'New to Vans?' },
    { text: 'Shop All' }
  ],
  women: [
    { text: 'New Arrivals' },
    { text: 'Best Sellers' },
    { text: 'Shoes' },
    { text: 'Clothing' },
    { text: 'Accessories' },
    { text: 'Sale' }
  ],
  men: [
    { text: 'New Arrivals' },
    { text: 'Best Sellers' },
    { text: 'Denim Style Guide' },
    { text: 'Shoes' },
    { text: 'Clothing' },
    { text: 'Accessories' },
    { text: 'Shop by Sport' },
    { text: 'Sale' },
    { text: 'All Mens' }
  ],
  kids: [
    { text: 'Shoes' },
    { text: 'Clothing' },
    { text: 'Accessories' },
    { text: 'Men' },
    { text: 'Women' },
    { text: 'Kids' },
    { text: 'Final Sale' },
    { text: 'All Sale' }
  ]
  // sale: [
  //   { text: 'Shoes Sale' },
  //   { text: 'Clothing Sale' },
  //   { text: 'Accessories Sale' }
  // ]
}

export function initMenuDrawer() {
  const menuToggle = document.getElementById('menu-toggle')
  const closeDrawer = document.getElementById('close-drawer')
  const drawer = document.getElementById('sidebar-drawer')
  const backdrop = document.getElementById('drawer-backdrop')

  const menuItemsContainer = document.getElementById('drawer-menu-items')
  const tabButtons = document.querySelectorAll('.tab-btn')

  if (menuToggle && closeDrawer && drawer && backdrop && menuItemsContainer) {
    // gan gia tri vo tung ham
    function renderMenu(tabKey) {
      const items = menuData[tabKey] || []
      let htmlContent = ''

      items.forEach((item) => {
        htmlContent += `
                        <div class="cursor-pointer hover:text-gray-300 transition-colors">${item.text}</div>`
      })

      menuItemsContainer.innerHTML = htmlContent
    }

    // khoi tao khi mo menu drawer lan dau, mac dinh la tab featured
    renderMenu('featured')

    // gan sk click cho tung tab button
    tabButtons.forEach((button) => {
      button.addEventListener('click', () => {
        // xoa active class tu tat ca tab button
        tabButtons.forEach((btn) => {
          btn.classList.remove('bg-white', 'text-black')
          btn.classList.add('text-gray-400', 'hover:text-white')
        })

        //
        button.classList.add('bg-white', 'text-black')
        button.classList.remove('text-gray-400', 'hover:text-white')

        //lay du lieu tu data-tab
        const selectedTab = button.getAttribute('data-tab')
        renderMenu(selectedTab)
      })
    })

    // ham mo ra ngoai menu drawer tu ben trai
    function openMenu() {
      backdrop.classList.remove('hidden')
      setTimeout(() => {
        backdrop.classList.remove('opacity-0')
        drawer.classList.remove('-translate-x-full')
      }, 20)
    }

    // ham dong menu drawer
    function closeMenu() {
      backdrop.classList.add('opacity-0')
      drawer.classList.add('-translate-x-full')
      setTimeout(() => {
        backdrop.classList.add('hidden')
      }, 300)
    }

    // gan sk
    menuToggle.addEventListener('click', openMenu)
    closeDrawer.addEventListener('click', closeMenu)
    backdrop.addEventListener('click', closeMenu)
  }
}
