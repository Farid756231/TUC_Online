using Microsoft.AspNetCore.Mvc;
using tuc_backend.Data;
using tuc_backend.Models;

namespace CheckoutAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CheckoutController : ControllerBase
    {
        private readonly DataContext _Context;

        public CheckoutController(DataContext context)
        {
            _Context = context;
        }

        [HttpPost]
        public IActionResult PostCheckout([FromBody] Checkout checkout)
        {
            if (checkout == null)
            {
                return BadRequest(new { message = "Invalid checkout data provided." });
            }

            if (!ModelState.IsValid)
            {
                return BadRequest(new
                {
                    message = "Validation failed.",
                    errors = ModelState.Values.SelectMany(v => v.Errors.Select(e => e.ErrorMessage))
                });
            }

            try
            {
                _Context.Checkouts.Add(checkout);
                _Context.SaveChanges();
            }
            catch (Exception ex)
            {
                return StatusCode(500, new { message = "Error saving checkout to the database.", error = ex.Message });
            }

            return Ok(new
            {
                message = "Payment successful!",
                transactionId = Guid.NewGuid(),
                amount = "Transaction amount is hidden for security.",
                date = DateTime.UtcNow
            });
        }
    }
}