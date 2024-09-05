import Link from "next/link";
import { PackageIcon, StarIcon, TruckIcon } from "lucide-react";

import { Button } from "@/components/core/ui/button";
import DefaultLayout from "@/components/core/layouts/default-layout";
import ProductsFeaturedList from "@/components/common/products-featured-list";

export const description =
  "An application shell with a header and main content area. The header has a navbar, a search input and and a user nav dropdown. The user nav is toggled by a button with an avatar image.";

export default function HomePage() {
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
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover min-h-[300px] minw-[300px] sm:w-full lg:aspect-square"
            />
          </div>
        </div>
      </section>
      <ProductsFeaturedList />

    </DefaultLayout>
  );
}
