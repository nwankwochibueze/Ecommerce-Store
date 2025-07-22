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

export type SanityImage = {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
}
