import { ShoppingCart, StarIcon } from "lucide-react";
import { Button } from "../core/ui/button";

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
    <div className=" flex flex-col bg-transparent  border-0 hover:cursor-pointer sm:items-center transition-all">
      <div className="flex sm:flex-col sm:items-start sm:space-y-3 px-4">
        <img
          src={"/placeholder.svg"}
          width="300"
          height="300"
          alt="Product"
          className="aspect-square overflow-hidden rounded-xl object-cover transition-all max-w-[120px] sm:max-w-[100%]  "
        />
        <div className="flex flex-col px-4 sm:px-0 sm:space-y-2  w-full">
          <div className="flex flex-col lg:flex-row   ">
            <div className="flex flex-row items-center ">
              <StarIcon className="h-4 w-4 lg:h-6 lg:w-6 text-yellow-500" />
              <StarIcon className="h-4 w-4 lg:h-6 lg:w-6 text-yellow-500" />
              <StarIcon className="h-4 w-4 lg:h-6 lg:w-6 text-yellow-500" />
              <StarIcon className="h-4 w-4 lg:h-6 lg:w-6 text-yellow-500" />
              <StarIcon className="h-4 w-4 lg:h-6 lg:w-6 text-yellow-500" />

              <span className="text-xs lg:text-base font-medium pl-2 ">
                {rating}
                <span className="font-light">/5</span>
              </span>
            </div>
          </div>
          <h3 className="text-lg lg:text-xl font-bold ">{productName}</h3>

          <p className="text-sm  lg:text-xl font-semibold ">{formattedPrice}</p>
          <Button className="w-full mt-auto">
            <ShoppingCart className="w-4 h-4 mr-2" />
            <span>Add to cart</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
