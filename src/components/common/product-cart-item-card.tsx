import { Minus, Plus, Trash2 } from "lucide-react";

const ProductCartItemCard = () => {
  return (
    <div className="flex flex-row space-x-4 text-xl font-medium ">
      <img
        src={"/placeholder.svg"}
        width="200"
        height="140"
        alt="Product"
        className="aspect-square overflow-hidden rounded-xl object-cover"
      />
      <div className="flex flex-col text-base font-light space-y-2 w-full">
        <div className="flex flex-row justify-between hover:cursor-pointer">
          <h3 className="text-2xl font-bold">Product Name</h3>
          <Trash2 className="h-6 w-6 text-red-500 hover:text-red-400" />
        </div>
        <span>Size: Large</span>
        <span>Color: White</span>
        <div className="flex flex-row justify-between items-center w-full">
          <span className="text-2xl font-semibold">R$500</span>
          <div className="flex flex-row space-x-6 bg-muted p-2 px-4 rounded-full">
            <Minus className="h-5 w-5" />
            <span>1</span>
            <Plus className="h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCartItemCard;