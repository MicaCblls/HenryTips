import Product from "./Product.interface";

export const getProducts = async (): Promise<Product[]> => {
  const response = await fetch("data.json");
  const products = await response.json();
  return products;
};
