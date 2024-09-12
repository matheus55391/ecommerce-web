import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/core/ui/card";
  import { Input } from "@/components/core/ui/input";
  import { Button } from "@/components/core/ui/button";
  import { ArrowRight } from "lucide-react";
import OrderSummary from "./order-summary";
  
  export default function CartSummary() {
    return (
      <Card className="text-xl font-medium rounded-3xl h-fit">
        <CardHeader>
          <CardTitle className="text-2xl lg:text-3xl">Resumo do pedido</CardTitle>
        </CardHeader>
        <CardContent>
          <OrderSummary />
        </CardContent>
        <CardFooter>
          <CartActions />
        </CardFooter>
      </Card>
    );
  }
  
  function CartActions() {
    return (
      <div className="flex-1 border-t-2 border-muted pt-6 space-y-4">
        <TotalAmount total={1410} />
        <DiscountCodeForm />
        <CheckoutButton />
      </div>
    );
  }
  
  function TotalAmount({ total }: { total: number }) {
    return (
      <div className="flex justify-between">
        <p className="font-medium text-base">Total</p>
        <p className="text-base">R${total}</p>
      </div>
    );
  }
  
  function DiscountCodeForm() {
    return (
      <div className="flex flex-row space-x-2 lg:space-x-4">
        <Input
          placeholder="Cupom de desconto"
          className="h-full rounded-full p-4 lg:p-6"
        />
        <Button className="p-6 lg:p-8 rounded-full text-base lg:text-lg w-1/3">
          Aplicar
        </Button>
      </div>
    );
  }
  
  function CheckoutButton() {
    return (
      <Button className="w-full p-6 lg:p-8 rounded-full text-xl space-x-2">
        <span>Ir para o Pagamento</span>
        <ArrowRight className="w-6 h-6" />
      </Button>
    );
  }
  