using System.Text.Json.Serialization;

namespace WAExtra_BeaconTracker_BlazorApp.Models;

public static class NewBoolString
{
    [JsonPropertyName(nameof(False))]
    public const string False = "N";
    [JsonPropertyName(nameof(True))]
    public const string True = "Y";
}
