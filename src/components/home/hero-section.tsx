import Link from "next/link";
import ProductStats from "@/components/home/product-stats";
import ActionButton from "./action-button";

export default function HeroSection() {
  return (
    <section className="flex w-full py-12 md:py-24 lg:py-32 bg-muted items-center justify-center mb-2">
      <div className="container grid gap-8 px-4 md:px-6 lg:grid-cols-2 lg:gap-12 max-w-7xl ">
        <div className="flex flex-col justify-center space-y-4">
          <HeroContent />
          <HeroActions />
          <ProductStats />
        </div>
        <HeroImage />
      </div>
    </section>
  );
}

function HeroContent() {
  return (
    <div className="space-y-2">
      <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
        Find the best products for you
      </h1>
      <p className="max-w-[600px] text-muted-foreground md:text-xl">
        Explore our selection of high-quality products and find everything you
        need in one place.
      </p>
    </div>
  );
}

function HeroActions() {
  return (
    <div className="flex flex-col gap-2 min-[400px]:flex-row">
      <ActionButton
        className="bg-primary text-primary-foreground hover:bg-primary/90"
        text="Add to cart"
      />
      <Link
        href="#"
        className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
        prefetch={false}
      >
        See more
      </Link>
    </div>
  );
}

function HeroImage() {
  return (
    <div className="ml-auto">
      <img
        src="/placeholder.svg"
        width="550"
        height="550"
        alt="Hero"
        className="mx-auto aspect-video overflow-hidden rounded-xl object-cover min-h-[300px] sm:w-full lg:aspect-square"
      />
    </div>
  );
}
