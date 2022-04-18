// export interface IProduct {
//   id: number;
//   title: string;
//   price: number; 
//   discount?: number;
//   sale?: number;
//   description: string;
//   color?: string;
//   addInfo?: string;
//   category?: string;
// }

export interface IProduct {
  id: number,
  title: string,
  price: number,
  discount: number,
  description?: string,
  category?: string,
  tag?: string,
  color?: string,
  trending?: boolean,
  sqft?: string,
  additional?: string,
  units?: string[]
}

export interface IChoice {
  id: number;
  name: string;
}