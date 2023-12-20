using Microsoft.AspNetCore.SignalR;

namespace WAExtra_BeaconTracker_BlazorApp.Hubs;

public class LoggingHub : Hub
{
    public async void Log(object logEvent)
    {
        _ = Task.Run(() => Console.WriteLine(logEvent));
        await Clients.All.SendAsync("Log", logEvent).ConfigureAwait(false);
    }

    public async void JoinGroup4Tracker()
    {
        try
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, "Tracker").ConfigureAwait(false);
            await Clients.Caller.SendAsync("ReceiveMessage", "Join Success!").ConfigureAwait(false);
        }
        catch (Exception ex)
        {
            Console.WriteLine(ex);
            await Clients.Caller.SendAsync("ReceiveErrorMessage", ex.Message).ConfigureAwait(false);
        }
    }

    public override Task OnConnectedAsync()
    {
        return base.OnConnectedAsync();
    }

    public override async Task OnDisconnectedAsync(Exception? exception)
    {
        await Groups.RemoveFromGroupAsync(Context.ConnectionId, "Tracker").ConfigureAwait(false);
        await base.OnDisconnectedAsync(exception);
    }
}