using Blazored.LocalStorage;
using Microsoft.JSInterop;

namespace ItrackerAdminBlazorApp.Services;

public interface IThemeInterop
{
    ValueTask<string> GetSystemTheme(IJSRuntime jsRuntime);
    void SetSystemTheme(bool isDark);
}

public class ThemeInterop(IServiceProvider service) : IThemeInterop
{
    private ILocalStorageService LocalStorageService { get; } = service.GetRequiredService<ILocalStorageService>();

    public async ValueTask<string> GetSystemTheme(IJSRuntime jsRuntime)
    {
        string theme = await LocalStorageService.GetItemAsync<string>("THEME").ConfigureAwait(false);
        if (!string.IsNullOrWhiteSpace(theme)) return theme;
        if (jsRuntime is null) return "light";
        return await jsRuntime.InvokeAsync<string>("themeInterop.getSystemThemeColor").ConfigureAwait(false);
    }

    public async void SetSystemTheme(bool isDark)
    {
        await LocalStorageService.SetItemAsStringAsync("THEME", isDark ? "dark" : "light").ConfigureAwait(false);
    }
}

public static class BrowserConsole
{
    public static void ConsoleLog(this IJSRuntime jsRuntime, object? obj)
    {
        Task.Run(async () =>
        {
            await jsRuntime.InvokeVoidAsync("console.log", obj).ConfigureAwait(false);
        });
    }

    public static void ConsoleError(this IJSRuntime jsRuntime, object? obj)
    {
        Task.Run(async () =>
        {
            await jsRuntime.InvokeVoidAsync("console.error", obj).ConfigureAwait(false);
        });
    }

    public static void ConsoleWarn(this IJSRuntime jsRuntime, object? obj)
    {
        Task.Run(async () =>
        {
            await jsRuntime.InvokeVoidAsync("console.warn", obj).ConfigureAwait(false);
        });
    }

    public static void ConsoleInfo(this IJSRuntime jsRuntime, object? obj)
    {
        Task.Run(async () =>
        {
            await jsRuntime.InvokeVoidAsync("console.info", obj).ConfigureAwait(false);
        });
    }

    public static void ConsoleDebug(this IJSRuntime jsRuntime, object? obj)
    {
        Task.Run(async () =>
        {
            await jsRuntime.InvokeVoidAsync("console.debug", obj).ConfigureAwait(false);
        });
    }
}