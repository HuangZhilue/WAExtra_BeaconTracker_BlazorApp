using ModelLibrary.CLEModels;

namespace WAExtra_BeaconTracker_BlazorApp.Models.NewCLEModels;

public class NewCLEMap : CLEMap
{
    public override bool Equals(object? obj) => (obj as NewCLEInfo)?.Id == Id;

    public override int GetHashCode() => Id?.GetHashCode() ?? 0;

    public override string ToString() => Name;
}
