import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/core/ui/accordion";
import { Label } from "@/components/core/ui/label";
import { Checkbox } from "@/components/core/ui/checkbox";

const SearchFilters = () => (
  <div className="hidden sm:flex flex-col gap-4 items-start py-2 mx-4 lg:mx-0">
    <h3 className="text-2xl font-semibold">Filtros</h3>
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="category">
        <AccordionTrigger className="text-base">Categorias</AccordionTrigger>
        <AccordionContent>
          <div className="grid gap-2">
            <Label className="flex items-center gap-2 font-normal">
              <Checkbox id="category-roupas" /> Roupas
            </Label>
            <Label className="flex items-center gap-2 font-normal">
              <Checkbox id="category-eletronicos" /> Eletrônicos
            </Label>
            <Label className="flex items-center gap-2 font-normal">
              <Checkbox id="category-moveis" /> Móveis
            </Label>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="price">
        <AccordionTrigger className="text-base">Preço</AccordionTrigger>
        <AccordionContent>
          <div className="grid gap-2">
            <Label className="flex items-center gap-2 font-normal">
              <Checkbox id="price-low" /> Menor preço
            </Label>
            <Label className="flex items-center gap-2 font-normal">
              <Checkbox id="price-high" /> Maior preço
            </Label>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>
);

export default SearchFilters;
