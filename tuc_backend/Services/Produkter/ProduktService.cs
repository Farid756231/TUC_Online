using tuc_backend.Data;
using tuc_backend.Models;

namespace tuc_backend.Services.Kurser
{
    public class ProduktService
    {
        public static void Initialize(DataContext context)
        {
            if (!context.Products.Any())
            {

                var products = new List<Product>
                 {
                    new Product { Id = 1, Name = "programmering", Image = "/images/Programmering.png" },
            new Product { Id = 2, Name = "barnomsorg", Image = "/images/Barnomsorg.jpg" },
            new Product { Id = 3, Name = "elkonstruktör", Image = "/images/Elkonstruktör.jpg" },
            new Product { Id = 4, Name = "pedagogik", Image = "/images/Pedagogik.jpg" },
            new Product { Id = 5, Name = "cad-Konstruktion", Image = "/images/CAD-konstruktion.jpg" },
            new Product { Id = 6, Name = "sjukvård", Image = "/images/sjukvård.png" }


                  };
                context.Products.AddRange(products);
                context.SaveChanges();


            }

        }
    }
}
