import { Card } from "@/components/core/ui/card";
import ProductCartItemCard from "@/components/common/product-cart-item-card";

export default function CartItemsList() {
  return (
    <Card className="rounded-3xl p-4 lg:p-5 space-y-4 lg:w-2/3">
      <ProductCartItemCard />
      <Divider />
      <ProductCartItemCard />
      <Divider />
      <ProductCartItemCard />
    </Card>
  );
}

function Divider() {
  return <div className="h-[1px] bg-muted" />;
}
