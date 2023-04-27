import { SetCoords } from "../../../../types/types";

export function handleMouseMove(event: any, setCoords: SetCoords): void {
  const map = event.target;
  const bounds = map.getBoundingClientRect();
  const x = event.clientX - bounds.left;
  const y = event.clientY - bounds.top;
  const latLon = pixelToLatLon(x, y, map.offsetWidth, map.offsetHeight);
  setCoords({ lat: latLon[0], lon: latLon[1] });
}

export function pixelToLatLon(
  x: number,
  y: number,
  width: number,
  height: number
): number[] {
  const lat = (y / height) * 180 - 90;
  const lon = (x / width) * 360 - 180;
  return [lat, lon];
}
