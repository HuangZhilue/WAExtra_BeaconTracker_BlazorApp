// https://github.com/vue-leaflet/vue-leaflet
// https://leafletjs.cn/examples/overlays/
import "leaflet/dist/leaflet.css";
// import { , onMounted, watch, onBeforeUnmount } from "vue";
import L, { CRS } from "leaflet";
import { type CLETrack, CLEBeaconTrailSearchType } from "../../types/CLETrack";
// import { useCLEMapStore, useGlobalThemeStore } from "@/store/index";
// // import { AddOutlined, MinusOutlined } from "@vicons/material";

// import startImage from "@/assets/start.png";
// import endImage from "@/assets/end.png";
// import inHere from "@/assets/inHere.png";
// import LOGO from "@/assets/logo.png";
// import TagImage from "@/assets/tag-orange.png";
// import startImage from "../../assets/start.png"; //"@/assets/start.png";
// import endImage from "../../assets/end.png";
// import inHere from "../../assets/inHere.png";
// import LOGO from "../../assets/logo.png";
// import TagImage from "../../assets/tag-orange.png";
const startImage = new URL("@/assets/start.png", import.meta.url).href;
const endImage = new URL("@/assets/end.png", import.meta.url).href;
const inHere = new URL("@/assets/inHere.png", import.meta.url).href;
const LOGO = new URL("@/assets/logo.png", import.meta.url).href;
const TagImage = new URL("@/assets/tag-orange.png", import.meta.url).href;
// const getAssetsFile = (name: string) => {
//   return new URL(`../../assets/${name}`, import.meta.url).href;
// };

import { ColorWorld } from "../../utils/helper/ColorWorld";
import { StyleEx } from "../../utils/helper/StyleEx";
import { LeafletEx } from "../../utils/helper/LeafletEx";
import { BoolString } from "../../types/BoolString";

// import type { CLEInfo } from "../../types/CLEInfo";
import type { CLEMap } from "../../types/CLEMap";

export default class MapWorld {
  // const CLEMapStore = useCLEMapStore();
  // const GlobalThemeStore = useGlobalThemeStore();
  public Set = (name: string, data: any) => {
    if (this.hasOwnProperty(name)) {
      const property = Object.getOwnPropertyDescriptor(this, name);
      if (property) {
        console.warn("old value: ", property, data);
        property.value = data;
        console.warn("new value: ", property, data);
      } else {
        console.log("Object is undefined or null");
      }
    } else {
      console.log(name + "没有对应属性！");
    }
    return this;
  };

  public Get = (name: string) => {
    if (this.hasOwnProperty(name)) {
      const property = Object.getOwnPropertyDescriptor(this, name);
      if (property) {
        console.log("属性( " + name + " ):\t" + property.value);
        return property.value;
      } else {
        console.log("Object is undefined or null");
      }
    } else {
      console.log(name + "没有对应属性！");
    }
    return undefined;
  };

  private LeafletEx: LeafletEx = new LeafletEx();

  public showOption = false;
  public enableAxis = true;
  public enableArea = true;
  public enableAreaName = true;
  public enableTrackUpdate = false;

  // private CLEInfoData: CLEInfo | null = null;
  private CLEMapData: CLEMap | null = null;
  private CLEMapImageData: string = "";
  /** 分组后的轨迹数据 */
  private trackGroupData: { [key: string]: CLETrack[] } = {};
  /** 分组后的位置数据 */
  private positionGroupData: { [key: string]: CLETrack[] } = {};
  public SearchType4PositionValue: CLEBeaconTrailSearchType =
    CLEBeaconTrailSearchType.AwbNo;
  public SearchType4TrackValue: CLEBeaconTrailSearchType =
    CLEBeaconTrailSearchType.AwbNo;

  // 地图视图的高宽
  public mapHeight = 1080;
  public mapWidth = 1920;
  public mapMinZoom = -1;
  public mapMaxZoom = 5;
  public mapZoom = -1;

  public ThemeOpacity1 = "0.5";
  public ThemeOpacity5 = "0.5";
  public ThemePlaceholderColor = "#000000";
  public ThemeName = "dark";

  private ColorList: string[] = [];

  private ThisMap: L.Map | null = null;
  private mapImageGroup: L.LayerGroup = new L.LayerGroup();
  private axisGroup: L.LayerGroup = new L.LayerGroup();
  private areaGroup: L.LayerGroup = new L.LayerGroup();
  private cargoAreaGroup: L.LayerGroup = new L.LayerGroup();
  private cargoMarkerGroup: L.LayerGroup = new L.LayerGroup();
  private trackGroup: L.LayerGroup = new L.LayerGroup();

  // #region watch
  // watch(
  //   () => GlobalThemeStore.Theme,
  //   () => {
  //     initAreas();
  //     initAxis();
  //   }
  // );
  public UpdateTheme = (
    themeName: string = "dark",
    themeOpacity1 = 0.5,
    themeOpacity5 = 0.5,
    themePlaceholderColor = "#000000"
  ) => {
    this.ThemeName = themeName;
    this.ThemeOpacity1 = themeOpacity1.toString();
    this.ThemeOpacity5 = themeOpacity5.toString();
    this.ThemePlaceholderColor = themePlaceholderColor;
    this.initAreas();
    this.initAxis();
  };

  // watch(
  //   () => enableAxis.value,
  //   () => {
  //     initAxis();
  //   }
  // );
  public UpdateAxis = (enableAxis: boolean = false) => {
    this.enableAxis = enableAxis;
    this.initAxis();
  };
  // watch(
  //   () => enableArea.value,
  //   () => {
  //     initAreas();
  //   }
  // );
  public UpdateArea = (enableArea: boolean = false) => {
    this.enableArea = enableArea;
    this.initAreas();
  };

  // watch(
  //   () => enableAreaName.value,
  //   () => {
  //     initAreas();
  //   }
  // );
  public UpdateAreaName = (enableAreaName: boolean = false) => {
    this.enableAreaName = enableAreaName;
    this.initAreas();
  };

  // watch(
  //   () => enableTrackUpdate.value,
  //   () => {
  //     trackGroup.clearLayers();
  //     cargoAreaGroup.clearLayers();
  //     cargoMarkerGroup.clearLayers();
  //     positionGroupData = {};
  //     trackGroupData = {};
  //   }
  // );
  public UpdateTrackUpdate = (enableTrackUpdate: boolean = false) => {
    this.enableTrackUpdate = enableTrackUpdate;
    this.trackGroup.clearLayers();
    this.cargoAreaGroup.clearLayers();
    this.cargoMarkerGroup.clearLayers();
    this.positionGroupData = {};
    this.trackGroupData = {};
  };

  // #endregion

  public onMounted = () => {
    let canvasWidth: string | number | null = StyleEx.getStyleValueByClassName(
      "fullPage",
      "width"
    );
    let canvasHeight: string | number | null = StyleEx.getStyleValueByClassName(
      "fullPage",
      "height"
    );
    if (canvasWidth)
      canvasWidth = Number.parseInt(canvasWidth.replace("px", ""));
    else canvasWidth = window.innerWidth;
    if (canvasHeight)
      canvasHeight = Number.parseInt(canvasHeight.replace("px", ""));
    else canvasHeight = window.innerHeight;
    this.mapHeight = canvasHeight;
    this.mapWidth = canvasWidth;

    this.ThisMap = new L.Map("canvasBox");
    // this.ThisMap.setView([0, 0], 0);

    // 移除原有的缩放控件，使用自定义的缩放控件
    this.ThisMap.removeControl(this.ThisMap.zoomControl);
    this.ThisMap.removeControl(this.ThisMap.attributionControl);

    this.ThisMap.options.zoomSnap = 0.1;
    this.ThisMap.options.zoomDelta = 0.1;
    this.ThisMap.options.crs = CRS.Simple;
    this.ThisMap.options.preferCanvas = false;

    this.mapZoom = this.ThisMap.getZoom();
    this.ThisMap.addLayer(this.cargoMarkerGroup);
    this.ThisMap.addLayer(this.cargoAreaGroup);
    this.ThisMap.addLayer(this.mapImageGroup);
    this.ThisMap.addLayer(this.areaGroup);
    this.ThisMap.addLayer(this.axisGroup);
    this.ThisMap.addLayer(this.trackGroup);
    this.ThisMap.off("zoomend", this.zoomUpdated);
    this.ThisMap.on("zoomend", this.zoomUpdated);
    this.showOption = true;
    this.SetMapImage();
  };

  public onBeforeUnmount = () => {
    this.ThisMap?.remove();
  };

  // #region CLE 地图相关

  /** 初始化 CLE Info */
  // public InitCLEInfo = (cleInfo: CLEInfo | null) => {
  //   if (!cleInfo || (this.CLEInfoData && this.CLEInfoData.Id == cleInfo.Id))
  //     return;
  //   // 保存变量，下次进入该方法时，可判断是否为相同的CLEInfo
  //   this.CLEInfoData = cleInfo;
  // };

  /** 初始化 CLE this.ThisMap */
  public InitCLEMap = (cleMap: CLEMap | null, cleMapImage: string | null) => {
    if (
      !cleMap ||
      (this.CLEMapData && this.CLEMapData.Id == cleMap.Id) ||
      !cleMapImage
    )
      return;
    // 保存变量，下次进入该方法时，可判断是否为相同的CLEMap
    this.CLEMapData = cleMap;
    this.CLEMapImageData = cleMapImage;

    this.LeafletEx.MetersPerPixel = this.CLEMapData.MetersPerPixel ?? 1;
    this.LeafletEx.HeightInPixels = this.CLEMapData.HeightInPixels ?? 100;
    this.LeafletEx.WidthInPixels = this.CLEMapData.WidthInPixels ?? 100;
    this.LeafletEx.OriginPixelX = this.CLEMapData.OriginPixelX ?? 100;
    this.LeafletEx.OriginPixelY = this.CLEMapData.OriginPixelY ?? 100;

    this.SetMapImage();
  };

  /**
   * 设置地图图像，并配置地图缩放和视图。
   */
  public SetMapImage = () => {
    // 根据地图尺寸和地图图像大小计算最小缩放级别。
    this.mapMinZoom =
      this.LeafletEx.calculateMinZoom(
        this.mapWidth,
        this.mapHeight,
        this.CLEMapData?.WidthInPixels ?? 400,
        this.CLEMapData?.HeightInPixels ?? 400
      ) * 1.1; // 1.1 是缩放的偏移量

    // 根据地图尺寸和每像素米数计算最大缩放级别。
    this.mapMaxZoom =
      this.LeafletEx.calculateMaxZoom(
        this.mapWidth,
        this.mapHeight,
        1 / (this.CLEMapData?.MetersPerPixel ?? 1 / this.mapWidth),
        1 / (this.CLEMapData?.MetersPerPixel ?? 1 / this.mapHeight)
      ) * 1.1; // 1.1 是缩放的偏移量

    // 如果地图不可用，则返回。
    if (!this.ThisMap) return;

    // 使用最小和最大缩放级别配置地图。
    this.ThisMap.setMinZoom(this.mapMinZoom);
    this.ThisMap.setMaxZoom(this.mapMaxZoom);

    // 将视图设置为地图的中心，以最小缩放级别为准。
    this.ThisMap.setView(
      [
        (this.CLEMapData?.HeightInPixels ?? 100) / 2,
        (this.CLEMapData?.WidthInPixels ?? 100) / 2,
      ],
      this.mapMinZoom
    );

    // 设置地图边界。
    const bounds: L.LatLngBoundsLiteral = [
      [0, 0],
      [
        !!this.CLEMapImageData ? this.CLEMapData?.HeightInPixels ?? 100 : 100,
        !!this.CLEMapImageData ? this.CLEMapData?.WidthInPixels ?? 100 : 100,
      ],
    ];
    this.ThisMap.fitBounds(bounds);
    this.ThisMap.setMaxBounds(bounds);

    // 清除各个组的图层。
    this.mapImageGroup.clearLayers();
    this.cargoAreaGroup.clearLayers();
    this.cargoMarkerGroup.clearLayers();
    this.trackGroup.clearLayers();
    // 创建具有地图图像的新图像叠加层。
    const mapImageLayer = new L.ImageOverlay(
      !!this.CLEMapImageData ? this.CLEMapImageData : LOGO,
      [
        [0, 0],
        [
          !!this.CLEMapImageData ? this.CLEMapData?.HeightInPixels ?? 100 : 100,
          !!this.CLEMapImageData ? this.CLEMapData?.WidthInPixels ?? 100 : 100,
        ],
      ]
    );
    this.mapImageGroup.addLayer(mapImageLayer);
    // 初始化区域、轴线和其他组件。
    this.initAreas();
    this.initAxis();
  };

  /**
   * 初始化地图上的区域。
   * 清除现有的区域图层，并根据区域数据添加新的区域多边形。
   */
  public initAreas = () => {
    // 清除现有的区域图层
    this.areaGroup.clearLayers();

    // 检查是否启用区域显示，并且CLEMap存在
    if (!this.enableArea || !this.CLEMapData) return;

    // 从 CLEMapStore 获取区域数据
    const areas = this.CLEMapData?.Areas ?? [];

    // 从主题数据中解析透明度值
    const opacity1 = Number.parseFloat(this.ThemeOpacity1 ?? "1");
    const opacity5 = Number.parseFloat(this.ThemeOpacity5 ?? "0.35");

    // 从主题数据中获取占位符颜色
    const placeholderColor = this.ThemePlaceholderColor;

    // 遍历每个区域
    for (const area of areas) {
      // 定义区域多边形的选项
      const areaOptions = {
        stroke: true,
        color: placeholderColor,
        weight: 5,
        opacity: opacity1,
        fill: true,
        fillColor: placeholderColor,
        fillOpacity: opacity5,
        className: "areaPolygon",
      };

      // 使用计算后的 XY 点和选项创建区域多边形
      const areaPolygon = new L.Polygon(
        this.LeafletEx.convertPointsToLatLngExpressions(area.Points),
        areaOptions
      );

      // 如果 enableAreaName 为 true，则将区域名称添加为Tooltip
      if (this.enableAreaName) {
        const areaName = new L.Tooltip({
          content: area.Name,
          permanent: true,
          direction: "center",
          className: "areaName",
        });
        areaPolygon.bindTooltip(areaName);
      }

      // 将区域多边形添加到区域图层组
      this.areaGroup.addLayer(areaPolygon);
    }
  };

  /**
   * 初始化坐标轴
   */
  public initAxis = () => {
    this.axisGroup.clearLayers();

    // 检查是否启用坐标轴显示，并且CLEMap存在
    if (!this.enableAxis || !this.CLEMapData) return;

    const {
      OriginPixelX = 0,
      OriginPixelY = 0,
      HeightInPixels = 0,
      WidthInPixels = 0,
    } = this.CLEMapData;

    // 创建axisX折线
    const axisX = new L.Polyline(
      [
        [HeightInPixels - OriginPixelY, WidthInPixels],
        [HeightInPixels - OriginPixelY, 0 - OriginPixelX],
      ],
      {
        color: "red",
        opacity: 1,
        weight: 3,
      }
    );

    // 创建axisY折线
    const axisY = new L.Polyline(
      [
        [HeightInPixels - OriginPixelY, 0 - OriginPixelX],
        [HeightInPixels, 0 - OriginPixelX],
      ],
      {
        color: "green",
        opacity: 1,
        weight: 3,
      }
    );

    // 将axisX和axisY添加到axisGroup中
    this.axisGroup.addLayer(axisX);
    this.axisGroup.addLayer(axisY);
  };

  // #endregion

  // #region 轨迹渲染相关

  /**
   * 初始化轨迹分组数据
   * @param data 轨迹数据
   */
  public initTrackGroupData = (data: { [key: string]: CLETrack[] }) => {
    console.debug(data);

    this.cargoAreaGroup.clearLayers();
    this.cargoMarkerGroup.clearLayers();
    this.positionGroupData = {};

    // 未启用“自动轨迹”，则直接移除掉原来的轨迹数据，并重新渲染所有轨迹
    if (!this.enableTrackUpdate) this.trackGroup.clearLayers();
    else {
      const keysSet = new Set(Object.keys(data));
      // 0，trackGroup中存在，trackGroupData中存在，data中不存在，则需要把trackGroup中的数据移除
      // 移除掉 trackGroup中存在，但是推送的 data中不存在 的数据
      this.trackGroup.eachLayer((layer) => {
        // 如果轨迹Layer中存在有“当前推送列表”中没有推送的数据，则清除掉相关Layer
        if (
          layer.options.attribution &&
          !keysSet.has(layer.options.attribution.slice(11))
        ) {
          layer.remove();
          layer.clearAllEventListeners();
          this.trackGroup.removeLayer(layer);
        }
      });
    }

    const entries = Object.entries(data);

    const defaultLength = entries.length;
    // 如果接收到的 data对象的长度 不等于 trackGroupData / ColorList 对象的长度，
    // 则初始化ColorList
    if (this.ColorList.length != defaultLength) {
      this.ColorList = ColorWorld.initHSVColorList(
        defaultLength,
        this.ThemeName !== "dark"
      );
      console.debug("初始化 ColorList", this.ColorList);
    }

    // 上面移除掉之后，当前存在2种情况：
    // 1，trackGroup中存在，trackGroupData中存在，data中也存在，但是data中的是新数据，则进行更新
    // 2，trackGroup中不存在，trackGroupData中不存在，data中是新数据，则直接创建

    for (let i = 0; i < entries.length; i++) {
      const [key, value] = entries[i];

      // 判断是更新轨迹还是创建轨迹
      // 检测oldEntries中是否包含有当前key
      // 没有，则进行创建轨迹
      // 有，则提取出oldEntries[key]中的轨迹与当前value中的轨迹的在最后部分的不同的那些点，并根据这些点进行更新轨迹
      const oldTrack = this.trackGroupData[key];

      const originTrackLayer = this.trackGroup
        .getLayers()
        .find((l) => l.options.attribution == "trackLayer_" + key);

      // console.warn(originTrackLayer);
      // 如果已经存在对应的轨迹图层，
      // 且当前轨迹点位数量 小于 新的轨迹点位数量，
      // 说明要进行轨迹更新，要把新的点位添加到当前轨迹图层中
      if (originTrackLayer && oldTrack && oldTrack.length <= value.length) {
        if (!(oldTrack && oldTrack.length > 0)) continue;
        const oldTrackPoint = oldTrack[oldTrack.length - 1];
        // 倒序oldTrack，从后往前，直到找到与lastTrack相同的点，并把之前不同的点保存起来
        const newTrack = [];
        for (let j = value.length - 1; j >= 0; j--) {
          const lastTrack = value[j];
          if (lastTrack.Id != oldTrackPoint.Id) {
            newTrack.push(lastTrack);
          } else break;
        }
        if (newTrack.length <= 0) continue;
        this.updateTrackGroup(
          newTrack
            .reverse()
            .filter((v) => v.IsDelete != BoolString.TRUE)
            .map(({ X, Y }) => {
              return [X, Y];
            }),
          this.ColorList[i],
          originTrackLayer as L.LayerGroup
        );
      } else {
        if (originTrackLayer && originTrackLayer instanceof L.LayerGroup) {
          originTrackLayer.eachLayer((l) => {
            l.clearAllEventListeners();
            l.remove();
            originTrackLayer.removeLayer(l);
          });
          originTrackLayer.clearAllEventListeners();
          originTrackLayer.remove();
          this.trackGroup.removeLayer(originTrackLayer);
        }
        this.createTrackGroup(
          value
            .filter((v) => v.IsDelete != BoolString.TRUE)
            .map(({ X, Y }) => {
              return [X, Y];
            }),
          this.ColorList[i],
          key
        );

        console.debug(this.trackGroup);
      }
    }

    this.trackGroupData = data;
  };

  /**
   * 创建新的轨迹
   */
  public createTrackGroup = (
    trackPoints: number[][],
    lineColor = "red",
    groupName = ""
  ) => {
    if (!trackPoints || !trackPoints.length) return;

    const trackLayer = new L.LayerGroup();
    trackLayer.options.attribution = "trackLayer_" + groupName;
    // 计算折线的轨迹点
    const points = this.LeafletEx.convertPointsToLatLngExpressions(trackPoints);

    // 创建轨迹折线
    const track = new L.Polyline(points, {
      attribution: "track_" + groupName,
      color: lineColor,
      opacity: 1,
      weight: 3,
    });
    trackLayer.addLayer(track);

    // 创建起点和终点的标记
    const marker4Start = new L.Marker(points[0], {
      attribution: "marker4Start_" + groupName,
      icon: new L.DivIcon({
        iconAnchor: [15, 0],
        className: "marker-track-icon",
        html: `<img src="${startImage}" alt="Custom Icon">`,
      }),
    });
    const marker4End = new L.Marker(points[points.length - 1], {
      attribution: "marker4End_" + groupName,
      icon: new L.DivIcon({
        iconAnchor: [0, 0],
        className: this.enableTrackUpdate
          ? "marker-updateTrack-icon"
          : "marker-track-icon",
        html: `<img src="${
          this.enableTrackUpdate ? TagImage : endImage
        }" alt="Custom Icon">`,
      }),
    });

    // 将标记添加到轨迹组
    if (points.length > 1) trackLayer.addLayer(marker4Start);
    trackLayer.addLayer(marker4End);
    this.trackGroup.addLayer(trackLayer);
  };

  /**
   * 更新原有的轨迹
   */
  public updateTrackGroup = (
    trackPoints: number[][],
    lineColor = "red",
    originTrackLayer: L.LayerGroup
  ) => {
    if (!trackPoints || !trackPoints.length || !originTrackLayer) return;

    const groupName = originTrackLayer.options.attribution?.split("_")[1] ?? "";
    if (!groupName) return;

    const points = this.LeafletEx.convertPointsToLatLngExpressions(trackPoints);

    // 更新轨迹折线
    const track = originTrackLayer
      .getLayers()
      .find((l) => l.options.attribution == "track_" + groupName) as L.Polyline;
    if (!track) return;
    points.forEach((p) => {
      track.addLatLng(p);
    });
    track.setStyle({ color: lineColor });

    // 判断是否存在起点的标记
    if (
      !originTrackLayer
        .getLayers()
        .find((l) => l.options.attribution == "marker4Start_" + groupName)
    ) {
      // 创建起点的标记
      const marker4Start = new L.Marker(points[0], {
        attribution: "marker4Start_" + groupName,
        icon: new L.DivIcon({
          iconAnchor: [15, 0],
          className: "marker-track-icon",
          html: `<img src="${startImage}" alt="Custom Icon">`,
        }),
      });
      originTrackLayer.addLayer(marker4Start);
    }
    // 更新终点的标记
    const marker4End = originTrackLayer
      .getLayers()
      .find(
        (l) => l.options.attribution == "marker4End_" + groupName
      ) as L.Marker;
    if (!marker4End) return;
    marker4End.setLatLng(points[points.length - 1]);
  };

  // #endregion

  // #region （货物）位置渲染相关

  public initCargoPosition = (data: { [key: string]: CLETrack[] }) => {
    console.debug(data);

    const defaultLength = Object.entries(data).length;
    // 如果接收到的 data对象的长度 不等于 positionGroupData 对象的长度，
    // 则初始化ColorList
    if (this.ColorList.length != defaultLength) {
      // 使用positionJson对象的长度进行初始化，如果positionJson对象为undefined，则使用0
      this.ColorList = ColorWorld.initHSVColorList(
        defaultLength,
        this.ThemeName !== "dark"
      );
      console.debug("初始化 ColorList", this.ColorList);
    }

    this.positionGroupData = data;
    this.trackGroup.clearLayers();
    this.cargoAreaGroup.clearLayers();
    this.cargoMarkerGroup.clearLayers();
    // 初始化货物区域
    this.initCargoArea();

    // 更新缩放
    this.zoomUpdated();
  };

  /**
   * 初始化货物区域
   */
  public initCargoArea = () => {
    // 清空现有图层
    this.cargoAreaGroup.clearLayers();

    // 遍历位置数据条目
    Object.entries(this.positionGroupData).forEach(
      ([key, positions], index) => {
        // 为每个位置创建货物区域
        positions.forEach((position) => {
          // 计算货物区域的边界
          const bounds = this.LeafletEx.calculateSquareBounds(
            position.X,
            position.Y
          );
          // 创建矩形货物区域
          const cargoArea = new L.Rectangle(
            [
              [bounds[0][0], bounds[0][1]],
              [bounds[1][0], bounds[1][1]],
            ],
            {
              stroke: false,
              fill: true,
              fillColor: this.ColorList[index],
              fillOpacity: 1,
              className: "cargoArea",
            }
          );

          // 创建弹出窗口并绑定到货物区域
          const popup = new L.Popup({
            content: key,
          });
          cargoArea.bindPopup(popup);

          // 将货物区域添加到货物区域组
          this.cargoAreaGroup.addLayer(cargoArea);
        });
      }
    );
  };

  /**
   * 初始化地图上的货物标记。
   */
  public initCargo = () => {
    this.cargoMarkerGroup.clearLayers();

    if (!this.positionGroupData) return;

    // 生成位置分组并将其分配给 positionGroup
    const positionGroup = Object.values(this.positionGroupData).flatMap(
      (position) => this.AggregationDisplay(position)
    );

    // 遍历每个位置分组
    positionGroup.forEach((group) => {
      // 计算货物分组的中心和文本
      const center = this.LeafletEx.calculateGroupCenterPosition(group);
      const text = this.calculateCargoText(
        this.SearchType4PositionValue,
        group[0]
      );
      const count = group.length;

      // 为货物分组创建一个标记
      const marker = new L.Marker([center[0], center[1]], {
        icon: new L.DivIcon({
          iconAnchor: [0, 0],
          className: "marker-icon",
          html:
            `<img src="${inHere}" alt="Custom Icon" /><div class='marker-text'>${text}</div>` +
            (count > 1 ? `<div class='marker-count'>${count}</div>` : ""),
        }),
      });

      // 将标记添加到货物标记组中
      this.cargoMarkerGroup.addLayer(marker);
    });
  };

  /**
   * 根据搜索类型和位置计算货物文本。
   *
   * @param {CLEBeaconTrailSearchType} searchType - 搜索类型。
   * @param {CLETrack} position - 货物位置。
   * @returns {string} - 计算得到的货物文本。
   */
  public calculateCargoText = (
    searchType: CLEBeaconTrailSearchType,
    position: CLETrack
  ): string => {
    switch (searchType) {
      case CLEBeaconTrailSearchType.AwbNo:
        return position.AwbNo?.slice(
          (position.AwbNo?.length ?? 4) - 4,
          position.AwbNo?.length ?? 0
        );
      case CLEBeaconTrailSearchType.BeaconMac:
        return position.Mac;
      case CLEBeaconTrailSearchType.ULD:
        return position.ULD;
      default:
        return position.RFID;
    }
  };

  /**
   * 根据给定的位置数组，计算位置分组。
   *
   * @param {CLETrack[]} positions - 一个包含位置信息的CLETrack对象数组。
   * @return {CLETrack[][]} 一个包含位置分组的CLETrack对象数组的数组。
   */
  public AggregationDisplay = (positions: CLETrack[]): CLETrack[][] => {
    // 传入的positions数组已经是同一个分组的了
    // 最大间距
    const limitDistance = 50; // 单位px，小于该像素大小的距离判定为一个分组；
    const positionGroup: CLETrack[][] = [];
    for (let i = 0; i < positions.length; i++) {
      const position = positions[i];
      const center1 = this.LeafletEx.convertCoordinatesToLeafletMapPosition(
        position.X,
        position.Y
      );
      const group: CLETrack[] = [position];
      for (let j = 0; j < positions.length; j++) {
        const otherPosition = positions[j];
        if (position === otherPosition) continue;
        const center2 = this.LeafletEx.convertCoordinatesToLeafletMapPosition(
          otherPosition.X,
          otherPosition.Y
        );
        // 计算出当前屏幕下，当前地图中，当前缩放大小下，两个点之间的像素距离
        const distance =
          (this.LeafletEx.calculateDistance(
            center1[0],
            center1[1],
            center2[0],
            center2[1]
          ) ?? 0) * Math.pow(2, this.mapZoom);
        if (distance <= limitDistance) {
          group.push(otherPosition);
        }
      }
      positionGroup.push(group);
    }
    // 理论上，positionGroup中，当某个分组中只包含单个元素的，就可以视为独立的一个分组了（即远离其它货物的一个独立的货物）；
    // 其余的分组，如果互相含有的某个元素，就可以视为多个货物的一个分组（即互相靠近的货物组成的一个分组）;
    // 如 AB，BC，CD，DE，FG，GH，
    // AB，BC，CD，DE 都互相含有某个相同的数据，则分为一组；
    // FG，GH 互相含有某个相同数据，则分为另外一组。
    // 特殊情况下，A --- B --- C --- D --- E，这样的货物发布下，即使A离C、D、E都很远，但是他们互相靠近，可以视为一个分组。

    // 根据上面的情况，对positionGroup进行分组

    const finalGroups: CLETrack[][] = [];
    const visited: Set<number> = new Set();

    for (let i = 0; i < positionGroup.length; i++) {
      if (visited.has(i)) continue;

      const group = positionGroup[i];
      visited.add(i);

      if (group.length === 1) {
        finalGroups.push([group[0]]);
        continue;
      }

      const mergedGroup: CLETrack[] = [...group];

      for (let j = i + 1; j < positionGroup.length; j++) {
        if (visited.has(j)) continue;

        const otherGroup = positionGroup[j];
        if (otherGroup.length === 1) continue;

        if (group.some((p) => otherGroup.includes(p))) {
          mergedGroup.push(...otherGroup);
          visited.add(j);
        }
      }

      finalGroups.push([...new Set(mergedGroup)]);
    }

    return finalGroups;
  };

  // #endregion

  /**
   * 监听地图缩放事件
   */
  public zoomUpdated = (): void => {
    this.mapZoom = this.ThisMap?.getZoom() ?? -1;
    console.debug(`zoomUpdated\t${this.mapZoom}`);
    // 缩放之后需要重新计算货物的位置（重新聚合）
    this.initCargo();
  };
}
