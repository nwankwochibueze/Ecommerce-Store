// src/types.ts
export interface CartProduct {
  _id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  selectedSize: string;
  selectedColor: string;
  quantity: number;
}
