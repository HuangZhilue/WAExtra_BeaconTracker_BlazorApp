using Blazored.LocalStorage;
using FisSst.BlazorMaps.DependencyInjection;
using MudBlazor.Services;
using System.Text.Json;
using System.Text.Json.Serialization;
using WAExtra_BeaconTracker_BlazorApp.Client.Pages;
using WAExtra_BeaconTracker_BlazorApp.Components;
using WAExtra_BeaconTracker_BlazorApp.Services;
using WAExtra_BeaconTracker_BlazorApp.Services.ApiServices;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddRazorComponents()
    .AddInteractiveServerComponents()
    .AddInteractiveWebAssemblyComponents();
builder.Services.AddMudServices();
builder.Services.AddBlazorLeafletMaps();
builder.Services.AddHttpClient();
//builder.Services.AddScoped(sp => new HttpClient() { BaseAddress = new Uri("") });
builder.Services.AddScoped<IndexApiService>();
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

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseWebAssemblyDebugging();
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

app.MapRazorComponents<App>()
    .AddInteractiveServerRenderMode()
    .AddInteractiveWebAssemblyRenderMode()
    .AddAdditionalAssemblies(typeof(Counter).Assembly);

app.Run();
