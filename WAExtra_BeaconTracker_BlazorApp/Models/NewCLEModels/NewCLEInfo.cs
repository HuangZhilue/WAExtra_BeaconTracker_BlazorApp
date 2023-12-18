using System.Text.Json.Serialization;

namespace WAExtra_BeaconTracker_BlazorApp.Models.NewCLEModels;


public class NewCLEInfo //: CLEInfo
{
    /// <summary>
    /// 项⽬ ID
    /// </summary>
    [JsonPropertyName(nameof(Id))]
    public string Id { get; set; } = string.Empty;
    /// <summary>
    /// 项⽬名称
    /// </summary>
    [JsonPropertyName(nameof(Name))]
    public string Name { get; set; } = string.Empty;

    /// <summary>
    /// 使⽤ pusher
    /// </summary>
    [JsonPropertyName(nameof(IsPusher))]
    public bool IsPusher { get; set; }

    /// <summary>
    /// RTLS 服务器 URL
    /// </summary>
    [JsonPropertyName(nameof(ManagerApiUrl))]
    public string ManagerApiUrl { get; set; } = string.Empty;

    /// <summary>
    /// RTLS 服务器 key
    /// </summary>
    [JsonPropertyName(nameof(ManagerKey))]
    public string ManagerKey { get; set; } = string.Empty;

    /// <summary>
    /// RTLS 服务器 secret
    /// </summary>
    [JsonPropertyName(nameof(ManagerSecret))]
    public string ManagerSecret { get; set; } = string.Empty;

    /// <summary>
    /// 项⽬分类
    /// </summary>
    [JsonPropertyName(nameof(Category))]
    public string Category { get; set; } = string.Empty;

    /// <summary>
    /// CPA 版本
    /// </summary>
    [JsonPropertyName(nameof(Version))]
    public string Version { get; set; } = string.Empty;

    /// <summary>
    /// 使用GPS
    /// </summary>
    [JsonPropertyName(nameof(UseGps))]
    public bool UseGps { get; set; }

    /// <summary>
    /// GPS 纬度
    /// </summary>
    [JsonPropertyName(nameof(GpsOriginLat))]
    public double? GpsOriginLat { get; set; }

    /// <summary>
    /// GPS 经度
    /// </summary>
    [JsonPropertyName(nameof(GpsOriginLon))]
    public double? GpsOriginLon { get; set; }

    /// <summary>
    /// 偏移⻆度
    /// </summary>
    [JsonPropertyName(nameof(GpsOffsetDegrees))]
    public double? GpsOffsetDegrees { get; set; }

    /// <summary>
    /// Networks
    /// </summary>
    [JsonPropertyName(nameof(Networks))]
    public CLEInfoNetworks Networks { get; set; } = new ();

    /// <summary>
    /// 地图
    /// </summary>
    [JsonPropertyName(nameof(Maps))]
    public List<string> Maps { get; set; } = [];

    /// <summary>
    /// 算法
    /// </summary>
    [JsonPropertyName(nameof(Algorithms))]
    public List<string> Algorithms { get; set; } = [];

    public class CLEInfoNetworks
    {
        /// <summary>
        /// CleServers
        /// </summary>
        [JsonPropertyName(nameof(CleServers))]
        public List<dynamic> CleServers { get; set; } = [];

        /// <summary>
        /// Ipv4s
        /// </summary>
        [JsonPropertyName(nameof(Ipv4s))]
        public List<dynamic> Ipv4s { get; set; } = [];
    }

    public override bool Equals(object? obj) => (obj as NewCLEInfo)?.Id == Id;

    public override int GetHashCode() => Id?.GetHashCode() ?? 0;

    public override string ToString() => Name;
}