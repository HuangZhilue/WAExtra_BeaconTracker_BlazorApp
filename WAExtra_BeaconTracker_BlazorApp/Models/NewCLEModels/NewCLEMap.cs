using System.Text.Json.Serialization;

namespace WAExtra_BeaconTracker_BlazorApp.Models.NewCLEModels;

public class NewCLEMap// : CLEMap
{
    /// <summary>
    /// 地图 ID
    /// </summary>
    [JsonPropertyName(nameof(Id))]
    public string Id { get; set; } = string.Empty;

    /// <summary>
    /// 地图名称
    /// </summary>
    [JsonPropertyName(nameof(Name))]
    public string Name { get; set; } = string.Empty;

    /// <summary>
    /// 区域信息
    /// </summary>
    [JsonPropertyName(nameof(Areas))]
    public List<CLEMapArea> Areas { get; set; } = [];

    /// <summary>
    /// 基站信息
    /// </summary>
    [JsonPropertyName(nameof(Gateways))]
    public List<dynamic> Gateways { get; set; } = [];

    /// <summary>
    /// 地图宽度
    /// </summary>
    [JsonPropertyName(nameof(Width))]
    public double Width { get; set; }

    /// <summary>
    /// 地图⾼度
    /// </summary>
    [JsonPropertyName(nameof(Height))]
    public double Height { get; set; }

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
    /// GPS 地图对应点
    /// </summary>
    [JsonPropertyName(nameof(GpsOriginMap))]
    public List<double> GpsOriginMap { get; set; } = [];

    /// <summary>
    /// 地图原点 x
    /// </summary>
    [JsonPropertyName(nameof(OriginPixelX))]
    public double OriginPixelX { get; set; }

    /// <summary>
    /// 地图原点 y
    /// </summary>
    [JsonPropertyName(nameof(OriginPixelY))]
    public double OriginPixelY { get; set; }

    /// <summary>
    /// 地图宽度
    /// </summary>
    [JsonPropertyName(nameof(WidthInPixels))]
    public double WidthInPixels { get; set; }

    /// <summary>
    /// 地图⾼度
    /// </summary>
    [JsonPropertyName(nameof(HeightInPixels))]
    public double HeightInPixels { get; set; }

    /// <summary>
    /// ⽐例，⽶ 每 px
    /// </summary>
    [JsonPropertyName(nameof(MetersPerPixel))]
    public double MetersPerPixel { get; set; }

    /// <summary>
    /// 模型
    /// </summary>
    [JsonPropertyName(nameof(Model))]
    public CLEMapModel Model { get; set; } = new();

    public class CLEMapArea
    {
        /// <summary>
        /// 区域Id
        /// </summary>
        [JsonPropertyName(nameof(Id))]
        public string Id { get; set; } = string.Empty;

        /// <summary>
        /// 区域名称
        /// </summary>
        [JsonPropertyName(nameof(Name))]
        public string Name { get; set; } = string.Empty;

        /// <summary>
        /// 区域坐标。[x, y, z, 是否开放]
        /// </summary>
        [JsonPropertyName(nameof(Points))]
        public List<double?[]> Points { get; set; } = [];

        [JsonPropertyName(nameof(Lines))]
        public List<CLEMapAreaLine> Lines { get; set; } = [];

        /// <summary>
        /// 连接
        /// </summary>
        [JsonPropertyName(nameof(Connections))]
        public List<string> Connections { get; set; } = [];

        /// <summary>
        /// 使用路径
        /// </summary>
        [JsonPropertyName(nameof(UseRoutes))]
        public bool UseRoutes { get; set; }

        public class CLEMapAreaLine
        {
            /// <summary>
            /// 路径Id
            /// </summary>
            [JsonPropertyName(nameof(Id))]
            public string Id { get; set; } = string.Empty;

            /// <summary>
            /// 路径名称
            /// </summary>
            [JsonPropertyName(nameof(Name))]
            public string Name { get; set; } = string.Empty;

            /// <summary>
            /// 路径坐标。[x, y, z]
            /// </summary>
            [JsonPropertyName(nameof(Points))]
            public List<double?[]> Points { get; set; } = [];

            /// <summary>
            /// 连接
            /// </summary>
            [JsonPropertyName(nameof(Connections))]
            public List<string> Connections { get; set; } = [];
        }
    }

    public class CLEMapModel
    {
        /// <summary>
        /// 'image' | 'collada' | 'zip'; // 类型
        /// </summary>
        [JsonPropertyName(nameof(Type))]
        public string Type { get; set; } = string.Empty;

        /// <summary>
        /// 文件大小
        /// </summary>
        [JsonPropertyName(nameof(Size))]
        public string Size { get; set; } = string.Empty;

        /// <summary>
        /// 扩展信息。如贴图信息等。
        /// </summary>
        [JsonPropertyName(nameof(Extra))]
        public CLEMapModelExtra Extra { get; set; } = new();

        public class CLEMapModelExtra
        {
            /// <summary>
            /// 路径
            /// </summary>
            [JsonPropertyName(nameof(Path))]
            public string Path { get; set; } = string.Empty;

            /// <summary>
            /// 文件大小
            /// </summary>
            [JsonPropertyName(nameof(Size))]
            public string Size { get; set; } = string.Empty;
        }
    }

    public override bool Equals(object? obj) => (obj as NewCLEInfo)?.Id == Id;

    public override int GetHashCode() => Id?.GetHashCode() ?? 0;

    public override string ToString() => Name;
}
