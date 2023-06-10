export interface IIngredient {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
}

export interface IOrderInfo {
  _id: string;
  ingredients: string[];
  status: string;
  createdAt: string;
  updatedAt: string;
  number: number;
  name: string;
}

export interface IPayload {
  orders: IOrderInfo[];
  total: number;
  totalToday: number;
}

export interface IUser {
  name: string;
  email: string;
}
