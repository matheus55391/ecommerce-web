"use client";

import { getProducts } from "@/data/products";
import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import ProductCard from "./product-card";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../core/ui/carousel";

export default function ProductsFeaturedList() {
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return (
    <section className="flex w-full py-4 items-center justify-center mb-2 ">
      <div className="flex flex-col space-y-9  w-full px-4 items-center justify-center py-4">
        <div className="flex justify-center">
          <h2 className="text-2xl lg:text-4xl font-black">TOP DESTAQUES</h2>
        </div>

        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-6xl "
        >
          <CarouselContent>
            {products?.slice(4, 8)?.map((product, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 ">
                <div className="">
                  <CarouselItem className="basis-1/2 mx-4" key={product.id}>
                    <ProductCard productName={product.name} {...product} />
                  </CarouselItem>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        {/* <Carousel>
          <CarouselContent className="">
            {products?.slice(4, 8)?.map((product) => (
              <CarouselItem className="basis-1/4 mx-4" key={product.id}>
                <ProductCard productName={product.name} {...product} />
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel> */}

        <div className="flex justify-center w-full">
          <Link
            href="#"
            className="inline-flex h-9 items-center justify-center bg-transparent p-5 text-sm font-medium border transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 w-full md:w-1/6  mx-4 md:mx-8 rounded-full"
            prefetch={false}
          >
            <span className="text-current font-bold">Ver mais</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
