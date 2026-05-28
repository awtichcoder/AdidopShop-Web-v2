// wwwroot/js/moveUnderline.js

export function moveUnderline() {
  // 1. Lấy đường dẫn hiện tại trên trình duyệt (Ví dụ: "/Home/OrderHistory")
  const currentPath = window.location.pathname.toLowerCase()

  // 2. Tìm tất cả các thẻ <a> có class 'nav-link'
  const navLinks = document.querySelectorAll('.nav-link')

  navLinks.forEach((link) => {
    // Lấy giá trị href của thẻ a và chuyển về chữ thường để so sánh chuẩn xác
    const linkPath = link.getAttribute('href').toLowerCase()

    // 3. Nếu đường dẫn trùng khớp (hoặc đường dẫn hiện tại chứa href của thẻ a)
    if (
      currentPath === linkPath ||
      (linkPath !== '/' && currentPath.startsWith(linkPath))
    ) {
      // Thêm class 'active' để kích hoạt style gạch chân của Tailwind
      link.classList.add('active')
    } else {
      // Đảm bảo các thẻ khác không bị gạch chân nhầm
      link.classList.remove('active')
    }
  })
}
