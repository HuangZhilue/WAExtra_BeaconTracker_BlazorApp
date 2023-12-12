using ModelLibrary;

namespace WAExtra_BeaconTracker_BlazorApp.Models;

public class BadRequestInterfaceResult : InterfaceResult
{
    public new Exception Result { get; set; } = null!;
}

public class TypeListInterfaceResult<T> : InterfaceResult where T : class
{
    public new List<T> List { get; set; } = [];
}
