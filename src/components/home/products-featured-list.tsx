'use client';

import { useQuery } from "@tanstack/react-query";
import { getProducts, Product } from "@/data/products";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/core/ui/carousel";
import ProductCard from "../common/product-card";

export default function ProductsFeaturedList() {
  const { data: products } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  return (
    <section className="flex w-full py-4 items-center justify-center mb-2">
      <div className="flex flex-col space-y-9 w-full px-4 items-center justify-center py-4 max-w-7xl">
        <h2 className="text-2xl lg:text-4xl font-black">TOP DESTAQUES</h2>
        <ProductCarousel products={products?.slice(4, 8) as Product[]} />
        <SeeMoreButton />
      </div>
    </section>
  );
}

interface ProductCarouselProps {
  products: Product[];
}

function ProductCarousel({ products }: ProductCarouselProps) {
  return (
    <Carousel opts={{ align: "start" }} className="w-full max-w-6xl">
      <CarouselContent>
        {products?.map((product) => (
          <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={product.id}>
            <ProductCard productName={product.name} {...product} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

function SeeMoreButton() {
  return (
    <Link
      href="#"
      className="inline-flex h-9 items-center justify-center bg-transparent p-5 text-sm font-medium border transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 w-full md:w-1/6 mx-4 md:mx-8 rounded-full"
      prefetch={false}
    >
      <span className="text-current font-bold">Ver mais</span>
    </Link>
  );
}
