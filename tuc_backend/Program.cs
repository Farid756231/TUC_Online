using Microsoft.EntityFrameworkCore;
using System;
using tuc_backend.Data;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configure database context
builder.Services.AddDbContext<DataContext>(options =>
    options.UseSqlite(builder.Configuration.GetConnectionString("DefaultConnection")));

// Add CORS policy
builder.Services.AddCors(options => options.AddPolicy("DevelopmentApi",
    policy =>
    {
        policy.WithOrigins(builder.Configuration.GetValue<string>("AllowedHosts")!)
            .AllowAnyHeader()
            .AllowAnyMethod();
    })
);

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

// Use CORS policy
app.UseCors("DevelopmentApi");

app.UseAuthorization();

app.MapControllers();

app.Run();
