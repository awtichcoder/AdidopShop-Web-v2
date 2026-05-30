
export function initPasswordToggle() {
  const togglePasswordBtn = document.getElementById('toggle_password')
  const passwordInput = document.getElementById('password')

  if (togglePasswordBtn && passwordInput) {
    togglePasswordBtn.addEventListener('click', function () {
     
      const type =
        passwordInput.getAttribute('type') === 'password' ? 'text' : 'password'
      passwordInput.setAttribute('type', type)
    })
  }
}
