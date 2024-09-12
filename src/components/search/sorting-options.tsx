import { Button } from "@/components/core/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
} from "@/components/core/ui/dropdown-menu";
import { ArrowUpDownIcon, FilterIcon } from "lucide-react";

interface SortingOptionsProps {
  productsPerPage: number;
  setProductsPerPage: (productsPerPage: number) => void;
}

const SortingOptions = ({
  productsPerPage,
  setProductsPerPage,
}: SortingOptionsProps) => (
  <div className="flex flex-col sm:flex-row  sm:items-center justify-between  mx-4 mt-0 mb-3">
    <div className="hidden sm:block">
      <h1 className="text-2xl font-medium">Products</h1>
    </div>
    <div className="flex space-x-2">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-1/2">
            <FilterIcon className="w-4 h-4 mr-2" />
            Filter
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[200px]" align="end">
          <DropdownMenuRadioGroup
            value={productsPerPage.toString()}
            onValueChange={(value) => setProductsPerPage(Number(value))}
          >
            <DropdownMenuRadioItem value={"9"}>9</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value={"12"}>12</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value={"15"}>15</DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <DropdownMenu>
        <DropdownMenuTrigger className="w-1/2" asChild>
          <Button variant="outline" className="shrink-0">
            <ArrowUpDownIcon className="w-4 h-4 mr-2" />
            Sort by
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[200px]" align="end">
          <DropdownMenuRadioGroup value="featured">
            <DropdownMenuRadioItem value="featured">
              Most Popular
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="low">
              Lowest Price
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="high">
              Highest Price
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
    <div className="block sm:hidden mt-2">
      <h1 className="text-base font-normal">
        <span className="text-sm font-semibold">You search for: </span>Camisa
      </h1>
    </div>
  </div>
);

export default SortingOptions;
