using Microsoft.AspNetCore.Mvc;

namespace AdidopShop.Controllers
{
    public class AccountController : Controller
    {
        public IActionResult Profile()
        {
            return View();
        }
       
        public IActionResult Login()
        {
            return View();
        }
        public IActionResult Register()
        {
            return View();
        }
        public IActionResult OrderHistory()
        {
            return View();
        }
        public IActionResult Location()
        {
            return View();
        }
        public IActionResult AdidopFamily()
        {
            return View();
        }
    }
}
