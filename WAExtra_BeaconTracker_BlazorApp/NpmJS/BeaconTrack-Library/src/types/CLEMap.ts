export type CLEMap = {
  Id: string;
  Name: string;
  Areas: CLEArea[] | null;
  Gateways: string[] | null;
  Width: number;
  Height: number;
  UseGps: boolean;
  GpsOriginLat?: null;
  GpsOriginLon?: null;
  GpsOffsetDegrees?: null;
  GpsOriginMap?: number[] | null;
  OriginPixelX: number;
  OriginPixelY: number;
  WidthInPixels: number;
  HeightInPixels: number;
  MetersPerPixel: number;
  Model: CLEMapModel;
};
export type CLEArea = {
  Id: string;
  Name: string;
  Points: ((number | never)[] | never)[] | null;
  Lines: never[] | null;
  Connections?: never[] | null;
  UseRoutes: boolean;
};
export type CLEMapModel = {
  Type: string;
  Size: string;
  Extra: CLEMapModelExtra;
};
export type CLEMapModelExtra = {
  Path: string;
  Size: string;
};
