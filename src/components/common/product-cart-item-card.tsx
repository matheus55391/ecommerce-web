import { Minus, Plus, Trash2 } from "lucide-react";

const ProductCartItemCard = () => {
  return (
    <div className="flex flex-row space-x-4 text-xl font-medium ">
      <img
        src={"/placeholder.svg"}
        width="200"
        height="140"
        alt="Product"
        className="aspect-square overflow-hidden rounded-xl object-cover max-w-32 max-h-32 min-h-24 min-w-24"
      />
      <div className="flex flex-col text-base font-light w-full">
        <div className="flex flex-row justify-between hover:cursor-pointer">
          <div className="w-full">
            <span className="text-sm font-normal text-muted-foreground ">Marca</span>
            <h3 className="text-lg lg:text-2xl font-bold lg:w-5/6 w-full line-clamp-1  lg:line-clamp-2">
              Product Name
            </h3>
          </div>
          <Trash2 className="min-h-5 min-w-5 lg:min-h-6 lg:min-w-6 text-red-500 hover:text-red-400 mt-2 mr-2" />
        </div>
        {/* <span className="text-sm">Size: Large</span>
        <span className="text-sm">Color: White</span> */}
        <div className="flex flex-row justify-between items-center w-full mt-auto">
          <div className="flex flex-col ">
            <span className="hidden lg:block text-base font-light mt-auto text-muted-foreground">
              Preço à vista no PIX:
            </span>
            <span className="text-base lg:text-xl font-semibold mt-auto">
              R$500,00
            </span>
          </div>
          <div className="flex flex-row space-x-6 bg-muted p-2 px-3 lg:px-4 rounded-full items-center">
            <Minus className="h-3 w-3 lg:h-5 lg:w-5" />
            <span>1</span>
            <Plus className="h-3 w-3 lg:h-5 lg:w-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCartItemCard;
