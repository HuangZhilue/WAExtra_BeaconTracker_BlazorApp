using Microsoft.AspNetCore.Diagnostics;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using WAExtra_BeaconTracker_BlazorApp.Hubs;

namespace WAExtra_BeaconTracker_BlazorApp.Controllers;

[ApiController]
[Route("[controller]")]
public class IndexController(ILogger<IndexController> logger, IHubContext<LoggingHub> hubContext) : ControllerBase
{
    [HttpGet(nameof(Get))]
    public IActionResult Get()
    {
        return Ok(new { Environment.ProcessId });
    }

    [HttpPost(nameof(PostNewTrackAsync))]
    public async Task<IActionResult> PostNewTrackAsync([FromBody] object trackData)
    {
        Console.WriteLine("PostNewTrackAsync");
        Console.WriteLine(trackData);
        await hubContext.Clients.Group("Tracker").SendAsync("ReceiveNewTrack", trackData).ConfigureAwait(false);
        return Ok();
    }

    [HttpPost(nameof(PostRFIDCarStateAsync))]
    public async Task<IActionResult> PostRFIDCarStateAsync([FromBody] object data)
    {
        Console.WriteLine("PostRFIDCarState");
        Console.WriteLine(data);
        await hubContext.Clients.Group("Tracker").SendAsync("ReceiveNewRFIDCarState", data).ConfigureAwait(false);
        return Ok();
    }

    [HttpGet(nameof(TestReceiveMessage))]
    public async Task<IActionResult> TestReceiveMessage()
    {
        Console.WriteLine(DateTime.Now.ToString("U"));
        await hubContext.Clients.Group("Tracker").SendAsync("ReceiveMessage", DateTime.Now.ToString("U")).ConfigureAwait(false);
        return Ok();
    }

    [HttpGet, HttpPost, HttpPatch, HttpDelete, HttpHead, HttpOptions, HttpPut]
    [Route("/error")]
    public IActionResult Error()
    {
        var context = HttpContext.Features.Get<IExceptionHandlerFeature>();

        Exception? exception = context?.Error;

        // Log the exception here if needed
        logger.LogError("Something went wrong:\t{Error}", exception);

        return StatusCode(
            StatusCodes.Status400BadRequest,
            new ProblemDetails()
            {
                Status = StatusCodes.Status400BadRequest,
                Title = "Something went wrong",
                Detail = exception?.Message
            });
    }
}