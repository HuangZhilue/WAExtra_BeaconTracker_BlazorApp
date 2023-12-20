using ModelLibrary.CLEModels;
using WAExtra_BeaconTracker_BlazorApp.Models;
using WAExtra_BeaconTracker_BlazorApp.Models.NewCLEModels;
using WAExtra_BeaconTracker_BlazorApp.Models.Settings;

namespace WAExtra_BeaconTracker_BlazorApp.Services.ApiServices;

public class CLEApiService(IServiceProvider service) : ApiServiceBase(service)
{
    private string BaseURL_CLE { get; } = Settings.BaseURL_CLE;

    public async Task<List<NewCLEInfo>> GetCLEInfo(string infoId = "")
    {
        using HttpRequestMessage request = new(HttpMethod.Get, BaseURL_CLE + "/Index/GetCLEInfo");

        // 构建带有查询参数的 URL
        var uriBuilder = new UriBuilder(request.RequestUri!);
        var query = System.Web.HttpUtility.ParseQueryString(uriBuilder.Query);
        query[nameof(infoId)] = infoId;
        uriBuilder.Query = query.ToString();

        // 设置请求 URI
        request.RequestUri = uriBuilder.Uri;

        TypeListInterfaceResult<NewCLEInfo>? result = await GetFromJsonAsync<TypeListInterfaceResult<NewCLEInfo>>(request).ConfigureAwait(false);
        return result is not null && result.Success ? result.List : ([]);
    }

    public async Task<List<NewCLEMap>> GetCLEMaps(string infoId = "", string mapId = "")
    {
        using HttpRequestMessage request = new(HttpMethod.Get, BaseURL_CLE + "/Index/GetCLEMaps");

        // 构建带有查询参数的 URL
        var uriBuilder = new UriBuilder(request.RequestUri!);
        var query = System.Web.HttpUtility.ParseQueryString(uriBuilder.Query);
        query[nameof(infoId)] = infoId;
        query[nameof(mapId)] = mapId;
        uriBuilder.Query = query.ToString();

        // 设置请求 URI
        request.RequestUri = uriBuilder.Uri;

        TypeListInterfaceResult<NewCLEMap>? result = await GetFromJsonAsync<TypeListInterfaceResult<NewCLEMap>>(request).ConfigureAwait(false);
        return result is not null && result.Success ? result.List : ([]);
    }

    public async Task<string> GetCLEMapImage(string mapId = "")
    {
        using HttpRequestMessage request = new(HttpMethod.Get, BaseURL_CLE + "/Index/GetCLEMapImage");

        // 构建带有查询参数的 URL
        var uriBuilder = new UriBuilder(request.RequestUri!);
        var query = System.Web.HttpUtility.ParseQueryString(uriBuilder.Query);
        query[nameof(mapId)] = mapId;
        query["toBase64"] = "true";
        query["withDownloadName"] = "false";
        uriBuilder.Query = query.ToString();

        // 设置请求 URI
        request.RequestUri = uriBuilder.Uri;

        string? result = await ReadAsStringAsync(request).ConfigureAwait(false);
        return !string.IsNullOrWhiteSpace(result) ? result : string.Empty;
    }

    public async Task<List<string>> GetBeaconList()
    {
        using HttpRequestMessage request = new(HttpMethod.Get, BaseURL_CLE + "/Index/GetBeaconList");

        TypeListInterfaceResult<string>? result = await GetFromJsonAsync<TypeListInterfaceResult<string>>(request).ConfigureAwait(false);
        return result is not null && result.Success ? result.List : ([]);
    }

    public async Task<List<NewCLETrack>> GetCLEBeaconLastTrail(
        CLEBeaconTrailSearchType searchType = CLEBeaconTrailSearchType.AwbNo,
        string searchText = "",
        string mapId = "")
    {
        using HttpRequestMessage request = new(HttpMethod.Get, BaseURL_CLE + "/Index/GetCLEBeaconLastTrail");

        // 构建带有查询参数的 URL
        var uriBuilder = new UriBuilder(request.RequestUri!);
        var query = System.Web.HttpUtility.ParseQueryString(uriBuilder.Query);
        query[nameof(searchType)] = searchType.ToString();
        query[nameof(searchText)] = searchText;
        query[nameof(mapId)] = mapId;
        uriBuilder.Query = query.ToString();

        // 设置请求 URI
        request.RequestUri = uriBuilder.Uri;

        TypeListInterfaceResult<NewCLETrack>? result = await GetFromJsonAsync<TypeListInterfaceResult<NewCLETrack>>(request).ConfigureAwait(false);
        return result is not null && result.Success ? result.List : ([]);
    }

    public async Task<List<NewCLETrack>> GetCLEBeaconTrail(
        CLEBeaconTrailSearchType searchType = CLEBeaconTrailSearchType.AwbNo,
        string searchText = "",
        string mapId = "",
        DateTime? startTime = null,
        DateTime? endTime = null)
    {
        using HttpRequestMessage request = new(HttpMethod.Get, BaseURL_CLE + "/Index/GetCLEBeaconTrail");

        // 构建带有查询参数的 URL
        var uriBuilder = new UriBuilder(request.RequestUri!);
        var query = System.Web.HttpUtility.ParseQueryString(uriBuilder.Query);
        query[nameof(searchType)] = searchType.ToString();
        query[nameof(searchText)] = searchText;
        query[nameof(mapId)] = mapId;
        if (startTime.HasValue)
            query[nameof(startTime)] = startTime.Value.ToString("yyyy-MM-dd HH:mm:ss");
        if (endTime.HasValue)
            query[nameof(endTime)] = endTime.Value.ToString("yyyy-MM-dd HH:mm:ss");
        uriBuilder.Query = query.ToString();

        // 设置请求 URI
        request.RequestUri = uriBuilder.Uri;

        TypeListInterfaceResult<NewCLETrack>? result = await GetFromJsonAsync<TypeListInterfaceResult<NewCLETrack>>(request).ConfigureAwait(false);
        return result is not null && result.Success ? result.List : ([]);
    }

    public async Task<List<NewCLETrack>> GetAllCLEBeaconPosition(
        CLEBeaconTrailSearchType searchType = CLEBeaconTrailSearchType.AwbNo,
        string searchText = "",
        string mapId = "")
    {
        using HttpRequestMessage request = new(HttpMethod.Get, BaseURL_CLE + "/Index/GetAllCLEBeaconPosition");

        // 构建带有查询参数的 URL
        var uriBuilder = new UriBuilder(request.RequestUri!);
        var query = System.Web.HttpUtility.ParseQueryString(uriBuilder.Query);
        query[nameof(searchType)] = searchType.ToString();
        query[nameof(searchText)] = searchText;
        query[nameof(mapId)] = mapId;
        uriBuilder.Query = query.ToString();

        // 设置请求 URI
        request.RequestUri = uriBuilder.Uri;

        TypeListInterfaceResult<NewCLETrack>? result = await GetFromJsonAsync<TypeListInterfaceResult<NewCLETrack>>(request).ConfigureAwait(false);
        return result is not null && result.Success ? result.List : ([]);
    }
}
