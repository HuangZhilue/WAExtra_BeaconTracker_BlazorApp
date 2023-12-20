using Blazored.LocalStorage;
using FisSst.BlazorMaps.DependencyInjection;
using Microsoft.AspNetCore.ResponseCompression;
using MudBlazor.Services;
using System.Text.Json;
using System.Text.Json.Serialization;
using WAExtra_BeaconTracker_BlazorApp.Client.Pages;
using WAExtra_BeaconTracker_BlazorApp.Components;
using WAExtra_BeaconTracker_BlazorApp.Hubs;
using WAExtra_BeaconTracker_BlazorApp.Models.Settings;
using WAExtra_BeaconTracker_BlazorApp.Services;
using WAExtra_BeaconTracker_BlazorApp.Services.ApiServices;

IConfigurationRoot Configuration = new ConfigurationBuilder()
    .AddJsonFile("appsettings.json", true, true)
    .AddJsonFile($"appsettings.{Environment.GetEnvironmentVariable("ASPNETCORE_ENVIRONMENT")}.json", true, true)
    .Build();

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
Settings settings = Configuration.GetSection(nameof(Settings)).Get<Settings>() ?? new Settings();

builder.Services.AddRazorComponents()
    .AddInteractiveServerComponents()
    .AddInteractiveWebAssemblyComponents();
builder.Services.AddControllers();
builder.Services.AddMudServices();
builder.Services.AddBlazorLeafletMaps();
builder.Services.AddHttpClient();
//builder.Services.AddScoped(sp => new HttpClient() { BaseAddress = new Uri("") });
builder.Services.AddScoped<CLEApiService>();
builder.Services.AddScoped<CarApiService>();
builder.Services.AddScoped<ThemeInterop>();
builder.Services.AddScoped<IThemeInterop>(i => i.GetRequiredService<ThemeInterop>());
builder.Services.AddBlazoredLocalStorage(config =>
{
    config.JsonSerializerOptions.DictionaryKeyPolicy = JsonNamingPolicy.CamelCase;
    config.JsonSerializerOptions.DefaultIgnoreCondition = JsonIgnoreCondition.WhenWritingNull;
    config.JsonSerializerOptions.IgnoreReadOnlyProperties = true;
    config.JsonSerializerOptions.PropertyNameCaseInsensitive = true;
    config.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
    config.JsonSerializerOptions.ReadCommentHandling = JsonCommentHandling.Skip;
    config.JsonSerializerOptions.WriteIndented = false;
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddSignalR();
builder.Services.AddResponseCompression(opts =>
{
    opts.MimeTypes = ResponseCompressionDefaults.MimeTypes.Concat(
          new[] { "application/octet-stream" });
});

var app = builder.Build();

app.UseResponseCompression();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseWebAssemblyDebugging();
    app.UseSwagger();
    app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "myapp.WebApi v1"));

}
else
{
    app.UseExceptionHandler("/Error", createScopeForErrors: true);
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();

app.UseStaticFiles();
app.UseAntiforgery();

{
    app.UseCors(builder => builder
    .AllowAnyOrigin()
    .AllowAnyMethod()
    .AllowAnyHeader());
    app.UseAuthorization();
}

app.MapRazorComponents<App>()
    .AddInteractiveServerRenderMode()
    .AddInteractiveWebAssemblyRenderMode()
    .AddAdditionalAssemblies(typeof(Counter).Assembly);

app.MapControllers();
app.MapHub<LoggingHub>("/loggingHub");

app.Run();
