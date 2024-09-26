using Microsoft.AspNetCore.Mvc;

namespace ReactApp.Server.Controllers
{
    public class LoginController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        [Route("api/login")]
        public IActionResult Login([FromBody] LoginRequest loginRequest)
        {
            if (string.IsNullOrEmpty(loginRequest.username) || string.IsNullOrEmpty(loginRequest.password))
            {
                var errors = new
                {
                    errors = new
                    {
                        Email = string.IsNullOrEmpty(loginRequest.username) ? new[] { "Email is required" } : null,
                        Password = string.IsNullOrEmpty(loginRequest.password) ? new[] { "Password is required" } : null
                    }
                };

                return BadRequest(errors);
            }

            return Ok(new { message = "Login successful" });
        }

    }
}
