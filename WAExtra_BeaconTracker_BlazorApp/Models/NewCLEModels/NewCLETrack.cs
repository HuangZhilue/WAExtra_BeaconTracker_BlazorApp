using System.Text.Json.Serialization;
using WAExtra_BeaconTracker_BlazorApp.Models.NewCLEModels;

public class NewCLETrack
{
    /// <summary>
    /// 区域Id
    /// </summary>
    [JsonPropertyName(nameof(AwbNo))]
    public string AwbNo { get; set; } = string.Empty;

    /// <summary>
    /// 计算时间
    /// </summary>
    [JsonPropertyName(nameof(CalculatedAt))]
    public DateTime CalculatedAt { get; set; }

    /// <summary>
    /// 创建时间
    /// </summary>
    [JsonPropertyName(nameof(CreatedTime))]
    public DateTime CreatedTime { get; set; }

    /// <summary>
    /// 跟踪Id
    /// </summary>
    [JsonPropertyName(nameof(Id))]
    public string Id { get; set; } = string.Empty;

    /// <summary>
    /// 是否删除
    /// </summary>
    [JsonPropertyName(nameof(IsDelete))]
    public string IsDelete { get; set; } = NewBoolString.True;

    /// <summary>
    /// 最后网关
    /// </summary>
    [JsonPropertyName(nameof(LastGateway))]
    public string LastGateway { get; set; } = string.Empty;

    /// <summary>
    /// Mac 地址
    /// </summary>
    [JsonPropertyName(nameof(Mac))]
    public string Mac { get; set; } = string.Empty;

    /// <summary>
    /// 地图Id
    /// </summary>
    [JsonPropertyName(nameof(MapId))]
    public string MapId { get; set; } = string.Empty;

    /// <summary>
    /// 修改时间
    /// </summary>
    [JsonPropertyName(nameof(ModifiedTime))]
    public DateTime ModifiedTime { get; set; }

    /// <summary>
    /// RFID
    /// </summary>
    [JsonPropertyName(nameof(RFID))]
    public string RFID { get; set; } = string.Empty;

    /// <summary>
    /// ULD
    /// </summary>
    [JsonPropertyName(nameof(ULD))]
    public string ULD { get; set; } = string.Empty;

    /// <summary>
    /// 更新时间
    /// </summary>
    [JsonPropertyName(nameof(UpdatedAt))]
    public DateTime UpdatedAt { get; set; }

    /// <summary>
    /// 用户数据字符串
    /// </summary>
    [JsonPropertyName(nameof(UserDataString))]
    public string UserDataString { get; set; } = string.Empty;

    /// <summary>
    /// 用户数据时间戳字符串
    /// </summary>
    [JsonPropertyName(nameof(UserDataTsString))]
    public string UserDataTsString { get; set; } = string.Empty;

    /// <summary>
    /// X 坐标
    /// </summary>
    [JsonPropertyName(nameof(X))]
    public double X { get; set; }

    /// <summary>
    /// Y 坐标
    /// </summary>
    [JsonPropertyName(nameof(Y))]
    public double Y { get; set; }

    /// <summary>
    /// Z 坐标
    /// </summary>
    [JsonPropertyName(nameof(Z))]
    public double Z { get; set; }

    /// <summary>
    /// 区域Id
    /// </summary>
    [JsonPropertyName(nameof(ZoneId))]
    public string ZoneId { get; set; } = string.Empty;
}