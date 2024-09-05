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
    <div className=" flex flex-col bg-transparent  border-0 hover:cursor-pointer  ">
      <div className="flex flex-col items-start space-y-3 ">
        <img
          src={imageUrl}
          width="300"
          height="300"
          alt="Product"
          className="aspect-square overflow-hidden rounded-xl object-cover transition-all"
        />
        <h3 className="text-sm lg:text-xl font-bold ">{productName}</h3>

        <div className="flex flex-col lg:flex-row items-center  ">
          <div className="flex flex-row items-center ">
            <StarIcon className="h-4 w-4 lg:h-6 lg:w-6 text-yellow-500" />
            <StarIcon className="h-4 w-4 lg:h-6 lg:w-6 text-yellow-500" />
            <StarIcon className="h-4 w-4 lg:h-6 lg:w-6 text-yellow-500" />
            <StarIcon className="h-4 w-4 lg:h-6 lg:w-6 text-yellow-500" />
            <StarIcon className="h-4 w-4 lg:h-6 lg:w-6 text-yellow-500" />

            <span className="text-xs lg:text-base font-medium pl-2 ">
              {rating}<span className="font-light">/5</span>
            </span>
          </div>
        </div>
        <p className="text-sm lg:text-xl font-bold ">{formattedPrice}</p>
        {/* <Button className="inline-flex h-9 items-center w-full justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
          Comprar
        </Button> */}
      </div>
    </div>
  );
}
