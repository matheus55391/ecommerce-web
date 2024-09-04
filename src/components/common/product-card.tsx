import React from "react";
import { Card, CardContent } from "../core/ui/card";
import { Button } from "../core/ui/button";
import { StarIcon } from "lucide-react";

interface ProductCardProps {
  id: string;
  imageUrl?: string;
  rating: number;
  reviewCount: number;
  productName: string;
  price: number;
}

export default function ProductCard({
  imageUrl = "/placeholder.svg",
  rating = 0,
  reviewCount = 0,
  productName = "Product Name",
  price = 0,
}: ProductCardProps) {
  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  return (
    <Card className="bg-transparent shadow-none border-0 hover:cursor-pointer">
      <CardContent className="flex flex-col items-start gap-4">
        <img
          src={imageUrl}
          width="300"
          height="300"
          alt="Product"
          className="aspect-square overflow-hidden rounded-xl object-cover"
        />
        <div className="flex items-center gap-2">
          <StarIcon className="h-5 w-5 text-yellow-500" />
          <span className="text-sm font-medium">{rating}</span>
          <span className="text-sm text-muted-foreground">
            ({reviewCount} avaliações)
          </span>
        </div>
        <h3 className="text-xl font-bold">{productName}</h3>
        <p className="text-2xl font-bold">{formattedPrice}</p>
        {/* <Button className="inline-flex h-9 items-center w-full justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
          Comprar
        </Button> */}
      </CardContent>
    </Card>
  );
}
