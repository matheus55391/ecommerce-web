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

interface DefaultLayoutProps {
  children?: React.ReactNode;
}

export const description =
  "An application shell with a header and main content area. The header has a navbar, a search input and and a user nav dropdown. The user nav is toggled by a button with an avatar image.";

function DefaultLayout({ children }: DefaultLayoutProps) {
  const isAuthenticated = true;
  return (
    <div className="flex flex-col min-h-screen  max-w-screen min-w-screen overflow-hidden  ">
      <header className="sticky top-0 flex h-16 items-center gap-4  bg-background px-4 md:px-6">
        <nav className="hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
          <Link
            href="#"
            className="flex items-center gap-2 text-lg font-semibold md:text-base"
          >
            <Package2 className="h-6 w-6" />
            <span className="sr-only md:not-sr-only">Shopp.co</span>
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
            Produtos
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Sobre
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Contatos
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Administração
          </Link>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 md:hidden"
            >
              <Menu className="h-5 w-5" />
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
          <form className="ml-auto flex-1 sm:flex-initial">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Buscar por produtos..."
                className="pl-8 rounded-full sm:w-[300px] md:w-[200px] lg:w-[300px]"
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
              <span>Entrar</span> ou <span>Cadastre-se</span>
            </Link>
          )}
        </div>
      </header>
      <main className="flex-1 max-w-full">
        {children}
      </main>
      <footer className="bg-muted p-6 md:py-12 w-full flex flex-row mt-8">
     
        <div className="container max-w-7xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
          <div className="grid gap-1">
            <h3 className="font-semibold">Sobre</h3>
            <Link href="#" prefetch={false}>
              Quem Somos
            </Link>
            <Link href="#" prefetch={false}>
              Nossas Lojas
            </Link>
            <Link href="#" prefetch={false}>
              Carreiras
            </Link>
            <Link href="#" prefetch={false}>
              Notícias
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Produtos</h3>
            <Link href="#" prefetch={false}>
              Roupas
            </Link>
            <Link href="#" prefetch={false}>
              Acessórios
            </Link>
            <Link href="#" prefetch={false}>
              Calçados
            </Link>
            <Link href="#" prefetch={false}>
              Eletrônicos
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Ajuda</h3>
            <Link href="#" prefetch={false}>
              Atendimento
            </Link>
            <Link href="#" prefetch={false}>
              Trocas e Devoluções
            </Link>
            <Link href="#" prefetch={false}>
              Formas de Pagamento
            </Link>
            <Link href="#" prefetch={false}>
              Perguntas Frequentes
            </Link>
          </div>
          <div className="grid gap-1">
            <h3 className="font-semibold">Legal</h3>
            <Link href="#" prefetch={false}>
              Política de Privacidade
            </Link>
            <Link href="#" prefetch={false}>
              Termos de Uso
            </Link>
            <Link href="#" prefetch={false}>
              Política de Cookies
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default DefaultLayout;
