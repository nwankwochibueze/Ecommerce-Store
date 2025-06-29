// src/features/products/Products.ts
import axios from "axios";

const projectId = "1bgx820g";
const dataset = "production";
const query = encodeURIComponent(
  `*[_type == "product"]{_id, title, description, price, "imageUrl": image.asset->url}`
);
const url = `https://${projectId}.api.sanity.io/v2021-10-21/data/query/${dataset}?query=${query}`;

export interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
}

export async function fetchProducts(): Promise<Product[]> {
  const res = await axios.get(url);
  return res.data.result;
}
