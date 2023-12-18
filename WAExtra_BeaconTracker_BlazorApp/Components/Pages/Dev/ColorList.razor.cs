namespace WAExtra_BeaconTracker_BlazorApp.Components.Pages.Dev
{
    public partial class ColorList
    {
        private static string HexRegex { get; } = @"^#(?:[0-9a-fA-F]{3}){1,2}$";
        private static string RgbRegex { get; } = @"^rgb\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})\)$";
        private static string RgbaRegex { get; } = @"^rgba\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3}),\s*(\d?(\.\d+)?)\)$";
        private static string HexShortRegex { get; } = @"^#([0-9a-fA-F])([0-9a-fA-F])([0-9a-fA-F])$";
        private static string HexLongRegex { get; } = @"^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$";
        private static string HexNumberRegex { get; } = @"^0x[0-9a-fA-F]{6}$";
        private static string HslRegex { get; } = @"^hsl\(\d{1,3},\s*\d{1,3}%";
        private static string HslaRegex { get; } = @"^hsla\(\d{1,3},\s*\d{1,3}%,\s*\d{1,3}%,\s*(\d{1}(\.\d+)?)\)$";

        private static List<string> ColorRegexArr { get; } = [HexRegex, RgbRegex, RgbaRegex, HexShortRegex, HexLongRegex, HexNumberRegex, HslRegex, HslaRegex];
    }
}
