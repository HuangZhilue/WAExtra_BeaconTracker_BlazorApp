using System.Text.Json.Serialization;

namespace WAExtra_BeaconTracker_BlazorApp.Models.NewRFIDCarModels;

public partial class NewRFIDCarInfo
{
    /// <summary>
    /// ID
    /// </summary>
    [JsonPropertyName(nameof(Id))]
    public string Id { get; set; } = Guid.NewGuid().ToString();

    [JsonPropertyName(nameof(Mac))]
    public string Mac { get; set; } = string.Empty;

    [JsonPropertyName(nameof(SetDistance))]
    public int? SetDistance { get; set; }

    [JsonPropertyName(nameof(SetSTR))]
    public string? SetSTR { get; set; }

    /// <summary>
    /// 数据的上次更新时间
    /// </summary>
    [JsonPropertyName(nameof(ModifiedTime))]
    public DateTime? ModifiedTime { get; set; } = DateTime.Now;

    [JsonPropertyName(nameof(CreatedTime))]
    public DateTime? CreatedTime { get; set; } = DateTime.Now;

    [JsonPropertyName(nameof(IsDelete))]
    public string? IsDelete { get; set; } = NewBoolString.False;
}
