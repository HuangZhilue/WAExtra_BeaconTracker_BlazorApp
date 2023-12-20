namespace WAExtra_BeaconTracker_BlazorApp.Models.Settings;

public class Settings
{
    public static bool EnableSwaggerUI { get; set; } = false;
    public static string BaseURL_CLE { get; set; } = "http://192.168.25.100:8001";
    public static string BaseURL_Car { get; set; } = "http://192.168.25.100:7001";
    public static bool EnableBrowserConsole { get; set; } = true;
}