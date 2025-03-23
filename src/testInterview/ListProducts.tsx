import { useCallback, useEffect, useState } from "react";
import { useFetch } from "./hooks/useFetch";
import React from "react";
interface ListProductsProps {
  changeLocation: (page: string, params: Record<string, number>) => void;
}
type Product = {
  id: number;
  title: string;
  category: string;
  description: string;
  price: number;
  thumbnail: string;
};
export const ListProducts = React.memo(
  ({ changeLocation }: ListProductsProps) => {
    console.log("ListProducts is rendering");

    const { loading, error, data } = useFetch<{ products: Product[] }>(
      "https://dummyjson.com/products",
      "GET"
    );

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error!</div>;

    return (
      <div>
        <h1>Products</h1>
        <ul>
          {data &&
            data.products.map((product: Product) => (
              <li
                onClick={() => changeLocation("view", { id: product.id })}
                key={product.id}
              >
                {product.title}
              </li>
            ))}
        </ul>
      </div>
    );
  }
);
