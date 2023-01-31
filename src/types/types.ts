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
  tags: string[];
}

export interface UserState {
  users: UserType[];
}
