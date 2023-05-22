export interface Person {
  id: number;
  name: string;
  age: number;
}

export interface PersonState {
  persons: Person[];
}

export interface Column {
  [x: string]: any;
  id: number;
  colName: string;
}

export interface ColumnProps {
  columns: Column[];
}

export interface UserType {
  key: React.Key;
  firstName: string;
  lastName: string;
  age: number;
  address: string;
}

export interface UserState {
  users: UserType[];
}

export interface User {
  username: string;
  email: string;
  date: Date;
  id: string;
}

export interface RootUserObject {
  status: string;
  user: User;
  token: string;
}

export interface Coords {
  lat: number;
  lon: number;
}
export type SetCoords = React.Dispatch<React.SetStateAction<Coords>>;

export interface IGeoJSONPolygon {
  type: "FeatureCollection",
  features: [{
    type: "Feature",
    properties: {},
    geometry: {
      type: "Polygon",
      coordinates: Array<Array<[number, number]>>
    }
  }],
  bbox: [number, number, number, number]
}
