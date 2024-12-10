using Microsoft.AspNetCore.Mvc;
using tuc_backend.Models.tuc_backend.Models;

namespace CheckoutAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CheckoutController : ControllerBase
    {
        [HttpPost]
        public IActionResult PostCheckout([FromBody] Checkout checkout)
        {
            if (checkout == null)
            {
                return BadRequest("Invalid data.");
            }

            // Här kan du lägga till logik för att hantera betalningar.
            // Exempel: Spara till databasen eller integrera med en betalningsgateway.

            // Simulerar en lyckad betalning
            return Ok(new { message = "Payment successful!" });
        }
    }
}
