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

export default function CartPage() {
  return (
    <DefaultLayout>
      <div className="border-t-2 mx-3 lg:mx-6 flex-1 h-full">
        <div className="py-4">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Início</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Carrinho</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div>
          <h1 className="text-3xl font-black mb-2 lg:mb-4 ">SEU CARRINHO</h1>

          <div className="flex flex-col space-y-4  lg:space-y-0 lg:flex-row lg:space-x-4">
            <Card className="rounded-3xl p-4 lg:p-5 space-y-4 lg:w-2/3">
              <ProductCartItemCard />
              <div className="h-[1px]  bg-muted" />
              <ProductCartItemCard />
              <div className="h-[1px]  bg-muted" />
              <ProductCartItemCard />
            </Card>

            <Card className="text-xl font-medium rounded-3xl h-fit ">
              <CardHeader>
                <CardTitle className="text-2xl lg:text-3xl">Resumo do pedido</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 pb-4">
                  <div className="flex justify-between">
                    <p className="text-muted-foreground font-light text-base">Subtotal</p>

                    <p className="text-base">R$1500</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-muted-foreground font-light text-base">
                      Descontos
                    </p>
                    <p className="text-red-500 text-base">-R$100</p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-muted-foreground font-light text-base">Frete</p>
                    <p className="text-base">R$10</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex-1 border-t-2 border-muted pt-6 space-y-4 ">
                  <div className="flex justify-between">
                    <p className="font-medium text-base">Total</p>
                    <p className="text-base">R$1410</p>
                  </div>
                  <div className="flex flex-row space-x-2 lg:space-x-4">
                    <Input
                      placeholder="Cupom de desconto"
                      className="h-full rounded-full p-4 lg:p-6"
                    />
                    <Button className="p-6 lg:p-8 rounded-full text-base lg:text-lg w-1/3">
                      Aplicar
                    </Button>
                  </div>
                  <Button className="w-full p-6 lg:p-8 rounded-full text-xl space-x-2">
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
