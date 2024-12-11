using Microsoft.EntityFrameworkCore.Migrations;


namespace tuc_backend.Migrations
{
    public partial class InitialAddProdukters : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Image = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.Id);
                });

            migrationBuilder.InsertData(
                table: "Products",
                columns: new[] { "Id", "Image", "Name" },
                values: new object[,]
                {
                    { 1, "/images/Programmering.png", "programmering" },
                    { 2, "/images/Barnomsorg.jpg", "barnomsorg" },
                    { 3, "/images/Elkonstruktör.jpg", "elkonstruktör" },
                    { 4, "/images/Pedagogik.jpg", "pedagogik" },
                    { 5, "/images/CAD-konstruktion.jpg", "cad-Konstruktion" },
                    { 6, "/images/sjukvård.png", "sjukvård" }
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Products");
        }
    }
}
