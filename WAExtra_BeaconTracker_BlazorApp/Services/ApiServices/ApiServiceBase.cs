﻿using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using MudBlazor;
using System.Net;
using System.Text.Json;
using System.Text.Json.Serialization;
using WAExtra_BeaconTracker_BlazorApp.Models;

namespace WAExtra_BeaconTracker_BlazorApp.Services.ApiServices;

public class ApiServiceBase(IServiceProvider service)
{
    internal IHttpClientFactory ClientFactory { get; } = service.GetRequiredService<IHttpClientFactory>();
    internal NavigationManager NavigationManager { get; } = service.GetRequiredService<NavigationManager>();
    internal ISnackbar Snackbar { get; } = service.GetRequiredService<ISnackbar>();
    internal IJSRuntime JSRuntime { get; } = service.GetRequiredService<IJSRuntime>();

    internal JsonSerializerOptions JsonSerializerOptions { get; } = new()
    {
        PropertyNameCaseInsensitive = true,
        PropertyNamingPolicy = null,//JsonNamingPolicy.CamelCase,
        //NumberHandling = JsonNumberHandling.AllowReadingFromString,
        Converters = { new JsonStringEnumConverter() }
    };

    internal void HttpError(HttpRequestException exception)
    {
        // 处理非 200 响应
        // 在这里可以进行自定义的异常处理或日志记录等操作
        Console.WriteLine($"请求失败: {exception.StatusCode}");
        if (exception.StatusCode == HttpStatusCode.Unauthorized || exception.StatusCode == HttpStatusCode.Forbidden)
        {
            Snackbar.Clear();
            Snackbar.Configuration.PositionClass = Defaults.Classes.Position.TopCenter;
            Snackbar.Add(exception.StatusCode.Value.ToString(), Severity.Error);
        }
        else if (exception.StatusCode == HttpStatusCode.BadRequest)
        {
            Snackbar.Configuration.PositionClass = Defaults.Classes.Position.TopCenter;
            Snackbar.Add(exception.Message, Severity.Error);
        }
    }

    internal async Task<T?> GetFromJsonAsync<T>(HttpRequestMessage request) where T : class
    {
        T? result = default;
        try
        {
            var client = ClientFactory.CreateClient();
            var response = await client.SendAsync(request);

            if (response.IsSuccessStatusCode)
            {
                result = await response.Content.ReadFromJsonAsync<T>();
                JSRuntime.ConsoleDebug(result!);
                return result;
            }

            if (response.StatusCode == HttpStatusCode.BadRequest)
            {
                BadRequestInterfaceResult? error = await response.Content.ReadFromJsonAsync<BadRequestInterfaceResult>(JsonSerializerOptions);
                JSRuntime.ConsoleError(error!);

                Snackbar.Configuration.PositionClass = Defaults.Classes.Position.TopCenter;
                Snackbar.Add(error?.Message, Severity.Error);
                return result;
            }
            throw new HttpRequestException(response.StatusCode.ToString());
        }
        catch (HttpRequestException ex)
        {
            HttpError(ex);
        }
        catch (Exception ex)
        {
            Snackbar.Configuration.PositionClass = Defaults.Classes.Position.TopCenter;
            Snackbar.Add(ex.Message, Severity.Error);
        }
        return result;
    }

    internal async Task<string?> ReadAsStringAsync(HttpRequestMessage request)
    {
        string? result = default;
        try
        {
            var client = ClientFactory.CreateClient();
            var response = await client.SendAsync(request);

            if (response.IsSuccessStatusCode)
            {
                result = await response.Content.ReadAsStringAsync();
                JSRuntime.ConsoleDebug(result!);
                return result;
            }

            if (response.StatusCode == HttpStatusCode.BadRequest)
            {
                BadRequestInterfaceResult? error = await response.Content.ReadFromJsonAsync<BadRequestInterfaceResult>(JsonSerializerOptions);
                JSRuntime.ConsoleError(error!);

                Snackbar.Configuration.PositionClass = Defaults.Classes.Position.TopCenter;
                Snackbar.Add(error?.Message, Severity.Error);
                return result;
            }
            throw new HttpRequestException(response.StatusCode.ToString());
        }
        catch (HttpRequestException ex)
        {
            HttpError(ex);
        }
        catch (Exception ex)
        {
            Snackbar.Configuration.PositionClass = Defaults.Classes.Position.TopCenter;
            Snackbar.Add(ex.Message, Severity.Error);
        }
        return result;
    }

    internal async Task<T?> PostFromJsonAsync<T>(string url, MultipartFormDataContent formData) where T : class
    {
        T? result = default;
        try
        {
            var client = ClientFactory.CreateClient();
            using HttpResponseMessage response = await client.PostAsync(url, formData).ConfigureAwait(false);

            if (response.IsSuccessStatusCode)
            {
                result = await response.Content.ReadFromJsonAsync<T>();
                JSRuntime.ConsoleDebug(result!);
                return result;
            }

            if (response.StatusCode == HttpStatusCode.BadRequest)
            {
                BadRequestInterfaceResult? error = await response.Content.ReadFromJsonAsync<BadRequestInterfaceResult>(JsonSerializerOptions);
                JSRuntime.ConsoleError(error!);

                Snackbar.Configuration.PositionClass = Defaults.Classes.Position.TopCenter;
                Snackbar.Add(error?.Message, Severity.Error);
                return result;
            }
            throw new HttpRequestException(response.StatusCode.ToString());
        }
        catch (HttpRequestException ex)
        {
            HttpError(ex);
        }
        catch (Exception ex)
        {
            Snackbar.Configuration.PositionClass = Defaults.Classes.Position.TopCenter;
            Snackbar.Add(ex.Message, Severity.Error);
        }
        return result;
    }

    internal async Task PostAsync(string url, MultipartFormDataContent formData)
    {
        try
        {
            var client = ClientFactory.CreateClient();
            using HttpResponseMessage response = await client.PostAsync(url, formData).ConfigureAwait(false);

            if (response.IsSuccessStatusCode)
            {
                JSRuntime.ConsoleDebug(url, response.StatusCode);
                return;
            }

            if (response.StatusCode == HttpStatusCode.BadRequest)
            {
                BadRequestInterfaceResult? error = await response.Content.ReadFromJsonAsync<BadRequestInterfaceResult>(JsonSerializerOptions);
                JSRuntime.ConsoleError(error!);

                Snackbar.Configuration.PositionClass = Defaults.Classes.Position.TopCenter;
                Snackbar.Add(error?.Message, Severity.Error);
                return;
            }
            throw new HttpRequestException(response.StatusCode.ToString());
        }
        catch (HttpRequestException ex)
        {
            HttpError(ex);
        }
        catch (Exception ex)
        {
            Snackbar.Configuration.PositionClass = Defaults.Classes.Position.TopCenter;
            Snackbar.Add(ex.Message, Severity.Error);
        }
    }

    internal async Task<T?> PostFromJsonAsync<T, U>(string url, U bodyData)
        where T : class
        where U : class
    {
        T? result = default;
        try
        {
            var client = ClientFactory.CreateClient();
            using HttpResponseMessage response = await client.PostAsJsonAsync(url, bodyData).ConfigureAwait(false);

            if (response.IsSuccessStatusCode)
            {
                result = await response.Content.ReadFromJsonAsync<T>();
                JSRuntime.ConsoleDebug(result!);
                return result;
            }

            if (response.StatusCode == HttpStatusCode.BadRequest)
            {
                BadRequestInterfaceResult? error = await response.Content.ReadFromJsonAsync<BadRequestInterfaceResult>(JsonSerializerOptions);
                JSRuntime.ConsoleError(error!);

                Snackbar.Configuration.PositionClass = Defaults.Classes.Position.TopCenter;
                Snackbar.Add(error?.Message, Severity.Error);
                return result;
            }
            throw new HttpRequestException(response.StatusCode.ToString());
        }
        catch (HttpRequestException ex)
        {
            HttpError(ex);
        }
        catch (Exception ex)
        {
            Snackbar.Configuration.PositionClass = Defaults.Classes.Position.TopCenter;
            Snackbar.Add(ex.Message, Severity.Error);
        }
        return result;
    }

    internal async Task PostAsync<T>(string url, T bodyData)
        where T : class
    {
        try
        {
            var client = ClientFactory.CreateClient();
            using HttpResponseMessage response = await client.PostAsJsonAsync(url, bodyData).ConfigureAwait(false);

            if (response.IsSuccessStatusCode)
            {
                JSRuntime.ConsoleDebug(url, response.StatusCode);
                return;
            }

            if (response.StatusCode == HttpStatusCode.BadRequest)
            {
                BadRequestInterfaceResult? error = await response.Content.ReadFromJsonAsync<BadRequestInterfaceResult>(JsonSerializerOptions);
                JSRuntime.ConsoleError(error!);

                Snackbar.Configuration.PositionClass = Defaults.Classes.Position.TopCenter;
                Snackbar.Add(error?.Message, Severity.Error);
                return;
            }
            throw new HttpRequestException(response.StatusCode.ToString());
        }
        catch (HttpRequestException ex)
        {
            HttpError(ex);
        }
        catch (Exception ex)
        {
            Snackbar.Configuration.PositionClass = Defaults.Classes.Position.TopCenter;
            Snackbar.Add(ex.Message, Severity.Error);
        }
    }
}