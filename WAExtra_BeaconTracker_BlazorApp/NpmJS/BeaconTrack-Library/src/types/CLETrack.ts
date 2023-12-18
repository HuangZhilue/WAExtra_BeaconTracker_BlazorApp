export type CLETrack = {
  AwbNo: string;
  CalculatedAt: string;
  CreatedTime: string;
  Id: string;
  IsDelete: string;
  LastGateway: string;
  Mac: string;
  MapId: string;
  ModifiedTime: Date;
  RFID: string;
  ULD: string;
  UpdatedAt: Date;
  UserDataString: string;
  UserDataTsString: string;
  X: number;
  Y: number;
  Z: number;
  ZoneId: string;
};

export enum CLEBeaconTrailSearchType {
  BeaconMac,
  RFID,
  AwbNo,
  ULD,
}
