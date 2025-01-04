export interface Category {
  id: number;
  name: string;
  children?: Category[];
}

export interface Property {
  id: number;
  name: string;
  parent?: number;
  options?: Option[];
}

export interface Option {
  id: number;
  name: string;
  parent?: number;
  child?: boolean;
}
