import { Product } from "@/data/products";
import ProductCard from "../common/product-card";

interface ProductListProps {
    products: Product[];
}
const ProductList = ({ products }: ProductListProps) => (
  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 transition-all">
    {products.map((product) => (
      <div key={product.id} className="overflow-hidden items-center p-1 transition-all">
        <ProductCard
          id={product.id}
          price={product.price}
          productName={product.name}
          imageUrl={product.imageUrl}
          reviewCount={1}
          rating={1}
        />
      </div>
    ))}
  </div>
);

export default ProductList;
