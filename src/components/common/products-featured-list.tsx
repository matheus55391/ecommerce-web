"use client";

import { getProducts } from "@/data/products";
import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import ProductCard from "./product-card";
import Link from "next/link";

export default function ProductsFeaturedList() {
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const threeRandomProducts = useCallback(() => {
    return products?.slice(3, 6);
  }, [products]);

  return (
    <section className="w-full py-12 flex items-center justify-center">
      <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-3 lg:gap-12">
        <div className="col-span-3 flex justify-center">
          <h2 className="text-4xl font-bold">Produtos em Destaque</h2>
        </div>
        {threeRandomProducts()?.map((product) => (
          <ProductCard
            key={product.id}
            productName={product.name}
            {...product}
          />
        ))}
        <div className="col-span-3 flex justify-center">
          <Link
            href="#"
            className="inline-flex h-9 items-center justify-center  bg-transparent px-4 py-2 text-sm font-medium border rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            <span className="text-current">Ver mais</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
