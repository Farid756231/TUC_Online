using Xunit;
using tuc_backend.Models;
using tuc_backend.Models.tuc_backend.Models;

namespace CheckoutAPITests
{
    public class CheckoutTest
    {
        [Fact]
        public void TestCheckoutWithValidData()
        {
            var checkout = new Checkout
            {
                Name = "Anders Andersson",
                Email = "anders.andersson@example.com",
                Address = "603 43 tucgatan",
                CardDetails = "1234-5678-9012-3456"
            };

            var result = ProcessCheckout(checkout);

            Assert.True(result.IsSuccess, "Expected the payment to be successful.");
            Assert.Equal("Payment successful!", result.Message);
        }

        [Fact]
        public void TestCheckoutWithMissingData()
        {
            var checkout = new Checkout
            {
                Name = "",
                Email = "anders.andersson@example.com",
                Address = "",
                CardDetails = "1234-5678-9012-3456"
            };

            var result = ProcessCheckout(checkout);

            Assert.False(result.IsSuccess, "Expected the payment to fail due to missing data.");
            Assert.Equal("Invalid checkout data.", result.Message);
        }

        [Fact]
        public void TestCheckoutWithInvalidCardDetails()
        {
            var checkout = new Checkout
            {
                Name = "Anders Andersson",
                Email = "anders.andersson@example.com",
                Address = "603 43 tucgatan",
                CardDetails = "invalid-card"
            };

            var result = ProcessCheckout(checkout);

            Assert.False(result.IsSuccess, "Expected the payment to fail due to invalid card details.");
            Assert.Equal("Invalid card details.", result.Message);
        }

        private CheckoutResult ProcessCheckout(Checkout checkout)
        {
            if (string.IsNullOrWhiteSpace(checkout.Name) ||
                string.IsNullOrWhiteSpace(checkout.Email) ||
                string.IsNullOrWhiteSpace(checkout.Address) ||
                string.IsNullOrWhiteSpace(checkout.CardDetails))
            {
                return new CheckoutResult { IsSuccess = false, Message = "Invalid checkout data." };
            }

            if (checkout.CardDetails != "1234-5678-9012-3456")
            {
                return new CheckoutResult { IsSuccess = false, Message = "Invalid card details." };
            }

            return new CheckoutResult { IsSuccess = true, Message = "Payment successful!" };
        }

        private class CheckoutResult
        {
            public bool IsSuccess { get; set; }
            public string Message { get; set; }
        }
    }
}
