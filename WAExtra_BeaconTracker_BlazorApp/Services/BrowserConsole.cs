using Microsoft.JSInterop;
using WAExtra_BeaconTracker_BlazorApp.Models.Settings;

namespace WAExtra_BeaconTracker_BlazorApp.Services;

public static class BrowserConsole
{
    public static void ConsoleLog(this IJSRuntime jsRuntime, params object[]? obj)
    {
        if (Settings.EnableBrowserConsole)
            Task.Run(async () =>
            {
                await jsRuntime.InvokeVoidAsync("console.log", obj).ConfigureAwait(false);
            });
    }

    public static void ConsoleError(this IJSRuntime jsRuntime, params object[]? obj)
    {
        if (Settings.EnableBrowserConsole)
            Task.Run(async () =>
            {
                await jsRuntime.InvokeVoidAsync("console.error", obj).ConfigureAwait(false);
            });
    }

    public static void ConsoleWarn(this IJSRuntime jsRuntime, params object[]? obj)
    {
        if (Settings.EnableBrowserConsole)
            Task.Run(async () =>
            {
                await jsRuntime.InvokeVoidAsync("console.warn", obj).ConfigureAwait(false);
            });
    }

    public static void ConsoleInfo(this IJSRuntime jsRuntime, params object[]? obj)
    {
        if (Settings.EnableBrowserConsole)
            Task.Run(async () =>
            {
                await jsRuntime.InvokeVoidAsync("console.info", obj).ConfigureAwait(false);
            });
    }

    public static void ConsoleDebug(this IJSRuntime jsRuntime, params object[]? obj)
    {
        if (Settings.EnableBrowserConsole)
            Task.Run(async () =>
            {
                await jsRuntime.InvokeVoidAsync("console.debug", obj).ConfigureAwait(false);
            });
    }
}