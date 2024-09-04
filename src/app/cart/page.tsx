/* eslint-disable @next/next/no-img-element */
import { ArrowRight, Minus, Plus, Trash2 } from "lucide-react";

import { Button } from "@/components/core/ui/button";
import DefaultLayout from "@/components/core/layouts/default-layout";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/core/ui/breadcrumb";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/core/ui/card";
import { Input } from "@/components/core/ui/input";
import ProductCartItemCard from "@/components/common/product-cart-item-card";

export const description =
  "An application shell with a header and main content area. The header has a navbar, a search input and and a user nav dropdown. The user nav is toggled by a button with an avatar image.";

export default function HomePage() {
  return (
    <DefaultLayout>
      <div className="border-t-2 mx-6 flex-1 h-full">
        <div className="py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Cart</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="space-y-8">
          <h1 className="text-3xl font-black">SEU CARRINHO</h1>

          <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4">
            <Card className="rounded-3xl p-5 space-y-4 lg:w-2/3">
              <ProductCartItemCard />
              <div className="h-[1px]  bg-muted" />
              <ProductCartItemCard />
              <div className="h-[1px]  bg-muted" />
              <ProductCartItemCard />
            </Card>

            <Card className="text-xl font-medium rounded-3xl p-2 h-fit ">
              <CardHeader>
                <CardTitle className="text-3xl">Resumo do pedido</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 pb-4">
                  <div className="flex justify-between">
                    <p className="text-muted-foreground font-light">Subtotal</p>

                    <p>R$1500</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-muted-foreground font-light">
                      Descontos
                    </p>
                    <p className="text-red-500">-R$100</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-muted-foreground font-light">Frete</p>
                    <p>R$10</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex-1 border-t-2 border-muted pt-6 space-y-4 ">
                  <div className="flex justify-between">
                    <p className="font-medium">Total</p>
                    <p>R$1410</p>
                  </div>
                  <div className="flex flex-row space-x-4">
                    <Input
                      placeholder="Cupom de desconto"
                      className="h-full rounded-full p-6"
                    />
                    <Button className="p-8 rounded-full text-xl w-1/3">
                      Aplicar
                    </Button>
                  </div>
                  <Button className="w-full p-8 rounded-full text-xl space-x-2">
                    <span>Ir para o Pagamento</span>
                    <ArrowRight className="w-6 h-6" />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
