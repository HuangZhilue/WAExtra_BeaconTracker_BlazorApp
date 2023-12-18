using Blazored.LocalStorage;
using Microsoft.JSInterop;

namespace WAExtra_BeaconTracker_BlazorApp.Services;

public interface IThemeInterop
{
    ValueTask<string> GetSystemTheme();
    void SetSystemTheme(bool isDark);
    EventHandler<string>? ThemeChanged { get; set; }
}

public class ThemeInterop(IServiceProvider service) : IThemeInterop
{
    public EventHandler<string>? ThemeChanged { get; set; }

    private ILocalStorageService LocalStorageService { get; } = service.GetRequiredService<ILocalStorageService>();
    private IJSRuntime JSRuntime { get; } = service.GetRequiredService<IJSRuntime>();

    public async ValueTask<string> GetSystemTheme()
    {
        string theme = await LocalStorageService.GetItemAsync<string>("THEME");
        if (!string.IsNullOrWhiteSpace(theme)) return theme;
        if (JSRuntime is null) return "light";
        return await JSRuntime.InvokeAsync<string>("themeInterop.getSystemThemeColor");
    }

    public async void SetSystemTheme(bool isDark)
    {
        await LocalStorageService.SetItemAsStringAsync("THEME", isDark ? "dark" : "light");
        ThemeChanged?.Invoke(EventArgs.Empty, isDark ? "dark" : "light");
    }
}
