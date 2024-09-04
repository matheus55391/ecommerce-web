import Link from "next/link";
import {
  PackageIcon, StarIcon,
  TruckIcon
} from "lucide-react";

import { Button } from "@/components/ui/button";
import DefaultLayout from "@/components/layouts/default-layout";
import { Card, CardContent } from "@/components/ui/card";

export const description =
  "An application shell with a header and main content area. The header has a navbar, a search input and and a user nav dropdown. The user nav is toggled by a button with an avatar image.";

export default function HomePage() {
  const isAuthenticated = true;
  return (
    <DefaultLayout>
      <section className="flex w-full py-12 md:py-24 lg:py-32 bg-muted items-center justify-center mb-2">
        <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12   ">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Encontre os melhores produtos para você
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Explore nossa seleção de produtos de alta qualidade e encontre
                tudo o que você precisa em um só lugar.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                Comprar Agora
              </Button>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Saiba Mais
              </Link>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <StarIcon className="h-5 w-5 text-yellow-500" />
                <span className="text-sm font-medium">4.8</span>
              </div>
              <div className="flex items-center gap-2">
                <PackageIcon className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">10k+ Vendas</span>
              </div>
              <div className="flex items-center gap-2">
                <TruckIcon className="h-5 w-5 text-primary" />
                <span className="text-sm font-medium">Entrega Rápida</span>
              </div>
            </div>
          </div>
          <div className="ml-auto ">
            <img
              src="/placeholder.svg"
              width="550"
              height="550"
              alt="Hero"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:aspect-square"
            />
          </div>
        </div>
      </section>
      <section className="w-full py-12 flex items-center justify-center">
        <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-3 lg:gap-12">
          <div className="col-span-3 flex justify-center">
            <h2 className="text-4xl font-bold">Produtos em Destaque</h2>
          </div>
          <Card className="bg-transparent shadow-none border-0" >
            <CardContent className="flex flex-col items-start gap-4">
              <img
                src="/placeholder.svg"
                width="300"
                height="300"
                alt="Product"
                className="aspect-square overflow-hidden rounded-xl object-cover"
              />
              <div className="flex items-center gap-2">
                <StarIcon className="h-5 w-5 text-yellow-500" />
                <span className="text-sm font-medium">4.8</span>
                <span className="text-sm text-muted-foreground">
                  (120 avaliações)
                </span>
              </div>
              <h3 className="text-xl font-bold">Camiseta Básica</h3>
              <p className="text-2xl font-bold">R$ 49,99</p>
              <Button className="inline-flex h-9 items-center w-full justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                Comprar
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-transparent shadow-none border-0">
            <CardContent className="flex flex-col items-start gap-4">
              <img
                src="/placeholder.svg"
                width="300"
                height="300"
                alt="Product"
                className="aspect-square overflow-hidden rounded-xl object-cover"
              />
              <div className="flex items-center gap-2">
                <StarIcon className="h-5 w-5 text-yellow-500" />
                <span className="text-sm font-medium">4.6</span>
                <span className="text-sm text-muted-foreground">
                  (85 avaliações)
                </span>
              </div>
              <h3 className="text-xl font-bold">Calça Jeans</h3>
              <p className="text-2xl font-bold">R$ 99,99</p>
              <Button className="inline-flex h-9 items-center w-full justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                Comprar
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-transparent shadow-none border-0">
            <CardContent className="flex flex-col items-start gap-4">
              <img
                src="/placeholder.svg"
                width="300"
                height="300"
                alt="Product"
                className="aspect-square overflow-hidden rounded-xl object-cover"
              />
              <div className="flex items-center gap-2">
                <StarIcon className="h-5 w-5 text-yellow-500" />
                <span className="text-sm font-medium">4.7</span>
                <span className="text-sm text-muted-foreground">
                  (92 avaliações)
                </span>
              </div>
              <h3 className="text-xl font-bold">Tênis Esportivo</h3>
              <p className="text-2xl font-bold">R$ 129,99</p>
              <Button className="inline-flex h-9 w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50">
                Comprar
              </Button>
            </CardContent>
          </Card>
          <div className="col-span-3 flex justify-center">
            <Link
              href="#"
              className="inline-flex h-9 items-center justify-center  bg-transparent px-4 py-2 text-sm font-medium border rounded-xl transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
             <span className="text-current">Ver mais</span>
            </Link>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
