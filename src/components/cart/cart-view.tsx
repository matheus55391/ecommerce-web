import CartBreadcrumb from "@/components/cart/cart-bread-crumb";
import CartItemsList from "@/components/cart/cart-items-list";
import CartSummary from "@/components/cart/cart-summary";

export default function CartView() {
  return (
    <div className="border-t-2  flex-1 h-full mx-auto max-w-7xl">
      <CartBreadcrumb />

      <div>
        <h1 className="text-3xl font-black mb-2 lg:mb-4 ">SEU CARRINHO</h1>

        <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4">
          <CartItemsList />
          <CartSummary />
        </div>
      </div>
    </div>
  );
}
