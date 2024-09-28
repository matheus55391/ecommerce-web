"use client";

import Link from "next/link";
import {
  CircleUser,
  Menu,
  Package2,
  Search,
  ShoppingCartIcon,
} from "lucide-react";

import { Button } from "@/components/core/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/core/ui/dropdown-menu";
import { Input } from "@/components/core/ui/input";
import { Sheet, SheetContent, SheetTrigger } from "@/components/core/ui/sheet";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

interface DefaultLayoutProps {
  children?: React.ReactNode;
}

const searchSchema = z.object({
  searchTerm: z.string().min(1, "Search term is required"),
});

type SearchForm = z.infer<typeof searchSchema>;

export const description =
  "An application shell with a header and main content area. The header has a navbar, a search input and and a user nav dropdown. The user nav is toggled by a button with an avatar image.";

function DefaultLayout({ children }: DefaultLayoutProps) {
  const isAuthenticated = true;
  const router = useRouter();
  const { register, handleSubmit } = useForm<SearchForm>({
    resolver: zodResolver(searchSchema),
  });

  const onSubmit: SubmitHandler<SearchForm> = (data) => {
    console.log('[onSubmit]', data);
    if (data.searchTerm.trim()) {
      router.push(`search/${encodeURIComponent(data.searchTerm)}`);
    }
  };

  return (
    <div className="flex flex-col min-h-screen  max-w-screen min-w-screen overflow-hidden items-center">
      <div className="flex items-center text-sm justify-center py-2 bg-black text-white w-full">
        <span className="text-xs font-extralight">
          Sign up and get 20% off to your first order.{" "}
          <span className="hover:cursor-pointer border-b-[1px] font-light">
            Sign Up Now
          </span>
        </span>
      </div>
      <header className="sticky flex h-16 items-center gap-4 bg-background w-full max-w-7xl px-2 md:px-1 sm:px-1 ">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <span className="sr-only md:text-xl font-black md:not-sr-only">
              Shopp.co
            </span>
          </Link>
          <Link
            href="#"
            className="text-foreground transition-colors hover:text-foreground"
          >
            Início
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Promoções
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="shrink-0 md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link
                href="#"
                className="flex items-center gap-2 text-lg font-semibold"
              >
                <Package2 className="h-6 w-6" />
                <span className="sr-only">Acme Inc</span>
              </Link>
              <Link href="#" className="hover:text-foreground">
                Dashboard
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Orders
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Products
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Customers
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                Analytics
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <div className="flex w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4 space-x-2">
          <form className="ml-auto flex-1 sm:flex-initial w-full sm:w-[300px] md:w-[200px] lg:w-[300px]">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for products..."
                className="pl-8 rounded-full  "
                {...register("searchTerm")}
                onKeyDown={(e) => {
        
                  if (e.key === "Enter") {
                    handleSubmit(onSubmit)();
                  }
                }}
              />
            </div>
          </form>
          <Link href="/cart" className="relative" prefetch={false}>
            <ShoppingCartIcon className="h-6 w-6" />
            <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground rounded-full px-2 py-0.5 text-xs font-medium">
              3
            </span>
          </Link>
          {isAuthenticated ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="secondary"
                  size="icon"
                  className="rounded-full"
                >
                  <CircleUser className="h-5 w-5" />
                  <span className="sr-only">Toggle user menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link
              href="#"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <span>Sign in</span> or <span>Sign up</span>
            </Link>
          )}
        </div>
      </header>
      <main className="flex-1 w-full ">{children}</main>
      <footer className="bg-muted p-6 md:py-12 w-full flex flex-row mt-8  ">
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm  mx-auto ">
          <div className="grid gap-1">
            <h3 className="font-semibold">Sobre</h3>
            <Link href="#" prefetch={false}>
              Who we are
            </Link>
            <Link href="#" prefetch={false}>
              Our Story
            </Link>
            <Link href="#" prefetch={false}>
              Our Team
            </Link>
            <Link href="#" prefetch={false}>
              Careers
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Products</h3>
            <Link href="#" prefetch={false}>
              Clothes
            </Link>
            <Link href="#" prefetch={false}>
              Accessories
            </Link>
            <Link href="#" prefetch={false}>
              Shoes
            </Link>
            <Link href="#" prefetch={false}>
              Electronics
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Help</h3>
            <Link href="#" prefetch={false}>
              Service
            </Link>
            <Link href="#" prefetch={false}>
              Exchanges and Returns
            </Link>
            <Link href="#" prefetch={false}>
              Payment Methods
            </Link>
            <Link href="#" prefetch={false}>
              Frequently Asked Questions
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#" prefetch={false}>
              Privacy Policy
            </Link>
            <Link href="#" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="#" prefetch={false}>
              Cookies Policy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DefaultLayout;
