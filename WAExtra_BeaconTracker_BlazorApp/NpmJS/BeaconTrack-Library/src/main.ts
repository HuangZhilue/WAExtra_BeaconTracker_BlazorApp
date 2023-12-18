import MapWorld from "./components/map/MapWorld";

const InitMapWorld = (): MapWorld => {
  return new MapWorld();
};

// const Get = (mapWorldRef: MapWorld, property: string): any => {
//   return mapWorldRef[property as keyof MapWorld];
// };

export { InitMapWorld };
