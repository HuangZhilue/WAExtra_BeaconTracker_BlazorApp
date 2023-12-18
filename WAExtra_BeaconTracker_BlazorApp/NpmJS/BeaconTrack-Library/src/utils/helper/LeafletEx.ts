import L from "leaflet";
import { type CLETrack } from "../../types/CLETrack";

export class LeafletEx {
  public MetersPerPixel = 1;
  public HeightInPixels = 100;
  public WidthInPixels = 100;
  public OriginPixelY = 0;
  public OriginPixelX = 0;

  /**
   * 计算将一个给定大小的地图适配到一个给定大小的视图所需的最小缩放级别。
   *
   * @param viewWidth 视图的宽度。
   * @param viewHeight 视图的高度。
   * @param mapWidth 地图的宽度。
   * @param mapHeight 地图的高度。
   * @returns 适配地图到视图所需的最小缩放级别。
   */
  public calculateMinZoom = (
    viewWidth: number,
    viewHeight: number,
    mapWidth: number,
    mapHeight: number
  ) => {
    const minDimensionRatio = Math.min(
      viewWidth / mapWidth,
      viewHeight / mapHeight
    );
    const logOfMinDimensionRatio = Math.log(minDimensionRatio);
    const minZoomLevel = logOfMinDimensionRatio / Math.LN2;
    return minZoomLevel;
  };

  /**
   * 计算将一个给定大小的地图适配到一个给定大小的视图所需的最大缩放级别。
   *
   * @param viewWidth 视图的宽度。
   * @param viewHeight 视图的高度。
   * @param mapWidth 地图的宽度。
   * @param mapHeight 地图的高度。
   * @returns 适配地图到视图所需的最小缩放级别。
   */
  public calculateMaxZoom = (
    viewWidth: number,
    viewHeight: number,
    mapWidth: number,
    mapHeight: number
  ) => {
    const minDimensionRatio = Math.max(
      viewWidth / mapWidth,
      viewHeight / mapHeight
    );
    const logOfMinDimensionRatio = Math.log(minDimensionRatio);
    const minZoomLevel = logOfMinDimensionRatio / Math.LN2;
    return minZoomLevel;
  };

  /**
   * 计算二维平面上两点之间的距离。
   *
   * @param {number} x1 - 第一个点的 x 坐标。
   * @param {number} y1 - 第一个点的 y 坐标。
   * @param {number} x2 - 第二个点的 x 坐标。
   * @param {number} y2 - 第二个点的 y 坐标。
   * @return {number} 两点之间的距离。
   */
  public calculateDistance = (
    x1: number,
    y1: number,
    x2: number,
    y2: number
  ): number => {
    return Math.hypot(x2 - x1, y2 - y1);
  };

  /**
   * 将X和Y坐标转换成Leaflet地图坐标。
   *
   * @param {number} X - X坐标。
   * @param {number} Y - Y坐标。
   * @returns {L.LatLngTuple} - 计算得到的中心点。
   */
  public convertCoordinatesToLeafletMapPosition = (
    X: number,
    Y: number
  ): L.LatLngTuple => {
    // console.debug("convertCoordinatesToLeafletMapPosition\t" + X + "," + Y);
    // 根据给定的坐标计算中心点
    const center: L.LatLngTuple = [
      // 计算中心点的Y坐标
      Y / (this.MetersPerPixel ?? 1) +
        ((this.HeightInPixels ?? 0) - (this.OriginPixelY ?? 0)),
      // 计算中心点的X坐标
      X / (this.MetersPerPixel ?? 1) + (0 - (this.OriginPixelX ?? 0)),
    ];

    return center;
  };

  /**
   * 根据一组的轨迹的平均纬度和经度计算该组的中心坐标。
   *
   * @param {CLETrack[]} group - 要计算中心坐标的轨迹组。
   * @returns {L.LatLngTuple} - 该组的中心坐标。
   */
  public calculateGroupCenterPosition = (group: CLETrack[]): L.LatLngTuple => {
    // 计算轨迹组中所有轨迹坐标的总和
    const sum = group.reduce(
      ({ x, y }, track) => {
        return {
          x: x + track.X,
          y: y + track.Y,
        };
      },
      { x: 0, y: 0 }
    );

    // 计算平均X和Y
    const avgLat = sum.x / group.length;
    const avgLng = sum.y / group.length;

    // 根据平均X和Y计算中心坐标
    return this.convertCoordinatesToLeafletMapPosition(avgLat, avgLng);
  };

  /**
   * 根据给定的X和Y坐标计算正方形边界坐标。
   * @param {number} X - X坐标。
   * @param {number} Y - Y坐标。
   * @returns {number[][]} - 包含正方形边界左上角和右下角坐标的数组。
   */
  public calculateSquareBounds = (X: number, Y: number): number[][] => {
    // 计算边界的中心点
    const center = this.convertCoordinatesToLeafletMapPosition(X, Y);
    const padding = 0.5 / (this.MetersPerPixel ?? 1);
    const bounds = Array.from([
      [center[0] + padding, center[1] - padding],
      [center[0] - padding, center[1] + padding],
    ]);

    return bounds;
  };

  /**
   * 将给定点集合转换为包含每个点的纬度和经度的LatLngExpression数组。
   *
   * @param points - 一个点的数组，每个点由纬度和经度组成的数组表示。
   * @returns {L.LatLngExpression[]} - 包含每个点的纬度和经度的LatLngExpression数组。
   */
  public convertPointsToLatLngExpressions = (
    points: ((number | never)[] | never)[] | null
  ): L.LatLngExpression[] => {
    // 使用 convertCoordinatesToLeafletMapPosition 函数将每个点映射到对应的 LatLngExpression
    const latLngExpressions: L.LatLngExpression[] = (points ?? []).map(
      ([lat, lng]) => this.convertCoordinatesToLeafletMapPosition(lat, lng)
    );
    return latLngExpressions;
  };
}
