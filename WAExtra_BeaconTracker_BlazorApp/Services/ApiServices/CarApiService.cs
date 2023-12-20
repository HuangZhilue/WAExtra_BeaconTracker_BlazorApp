using ModelLibrary;
using WAExtra_BeaconTracker_BlazorApp.Models;
using WAExtra_BeaconTracker_BlazorApp.Models.NewRFIDCarModels;
using WAExtra_BeaconTracker_BlazorApp.Models.Settings;

namespace WAExtra_BeaconTracker_BlazorApp.Services.ApiServices;

public class CarApiService(IServiceProvider service) : ApiServiceBase(service)
{
    private string BaseURL_Car { get; } = Settings.BaseURL_Car;

    public async Task<List<NewRFIDCarInfo>> GetRFIDCar()
    {
        using HttpRequestMessage request = new(HttpMethod.Get, BaseURL_Car + "/Index/GetRFIDCar");

        //// 构建带有查询参数的 URL
        //var uriBuilder = new UriBuilder(request.RequestUri!);
        //var query = System.Web.HttpUtility.ParseQueryString(uriBuilder.Query);
        //query[nameof(infoId)] = infoId;
        //uriBuilder.Query = query.ToString();

        //// 设置请求 URI
        //request.RequestUri = uriBuilder.Uri;

        TypeListInterfaceResult<NewRFIDCarInfo>? result = await GetFromJsonAsync<TypeListInterfaceResult<NewRFIDCarInfo>>(request).ConfigureAwait(false);
        return result is not null && result.Success ? result.List : ([]);
    }

    public async Task<InterfaceResult> CheckRFIDCarStateAsync(string mac)
    {
        using HttpRequestMessage request = new(HttpMethod.Get, BaseURL_Car + "/Index/CheckRFIDCarStateAsync");
        // 构建带有查询参数的 URL
        var uriBuilder = new UriBuilder(request.RequestUri!);
        var query = System.Web.HttpUtility.ParseQueryString(uriBuilder.Query);
        query[nameof(mac)] = mac;
        uriBuilder.Query = query.ToString();

        // 设置请求 URI
        request.RequestUri = uriBuilder.Uri;
        InterfaceResult? result = await GetFromJsonAsync<InterfaceResult>(request).ConfigureAwait(false);
        return result ?? new () { Success = false, Message = "TimeoutOrFailed", Result = $"SUTTLESTR_{mac.ToUpper()}" };
    }

    public async void SetCargoPositionDeviceAsync(CargoPositionDeviceSuttle data)
    {
        using MultipartFormDataContent formData = new()
        {
            { new StringContent(data.IMAC??""), nameof(data.IMAC) },
            { new StringContent(data.Type?.ToString()??""), nameof(data.Type) },
            { new StringContent(data.DistanceSet?.ToString()??""), nameof(data.DistanceSet) },
            { new StringContent(data.STR??""), nameof(data.STR) },
        };
        await PostAsync(BaseURL_Car + "/Index/SetCargoPositionDeviceAsync", formData).ConfigureAwait(false);
    }

    public async Task<InterfaceResult> SetRFIDCar(NewRFIDCarInfo carInfo)
    {
        using MultipartFormDataContent formData = new()
        {
            { new StringContent(carInfo.Id), nameof(carInfo.Id) },
            { new StringContent(carInfo.SetSTR??""), nameof(carInfo.SetSTR) },
            { new StringContent(carInfo.SetDistance?.ToString()??""), nameof(carInfo.SetDistance) },
            { new StringContent(carInfo.Mac), nameof(carInfo.Mac) },
            { new StringContent(carInfo.IsDelete??NewBoolString.False), nameof(carInfo.IsDelete) },
        };
        InterfaceResult? result = await PostFromJsonAsync<InterfaceResult>(BaseURL_Car + "/Index/SetRFIDCar", formData).ConfigureAwait(false);

        return result ?? new();
    }
}
