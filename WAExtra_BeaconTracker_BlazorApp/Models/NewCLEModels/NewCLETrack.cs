namespace WAExtra_BeaconTracker_BlazorApp.Models.NewCLEModels;

public class NewCLETrack
{
    public string AwbNo { get; set; } = string.Empty;
    public DateTime CalculatedAt { get; set; }
    public DateTime CreatedTime { get; set; }
    public string Id { get; set; } = string.Empty;
    public string IsDelete { get; set; } = NewBoolString.True;
    public string LastGateway { get; set; } = string.Empty;
    public string Mac { get; set; } = string.Empty;
    public string MapId { get; set; } = string.Empty;
    public DateTime ModifiedTime { get; set; }
    public string RFID { get; set; } = string.Empty;
    public string ULD { get; set; } = string.Empty;
    public DateTime UpdatedAt { get; set; }
    public string UserDataString { get; set; } = string.Empty;
    public string UserDataTsString { get; set; } = string.Empty;
    public double X { get; set; }
    public double Y { get; set; }
    public double Z { get; set; }
    public string ZoneId { get; set; } = string.Empty;
}