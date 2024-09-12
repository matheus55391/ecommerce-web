"use client";

import { useState } from "react";
import BreadcrumbComponent from "./breadcrumb";
import SearchFilters from "./search-filters";
import SortingOptions from "./sorting-options";
import ProductList from "./product-list";
import PaginationComponent from "./pagination";
import { Product } from "@/data/products";

export function SearchView() {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(9);

  const products: Product[] = [
    {
      id: '200',
      name: "Product 1",
      imageUrl: "https://via.placeholder.com/150",
      price: 9.99,
      reviewCount: 5,
      rating: 4.5
    },
    {
      id: '201',
      name: "Product 1",
      imageUrl: "https://via.placeholder.com/150",
      price: 9.99,
      reviewCount: 5,
      rating: 4.5
    },
    {
      id: '202',
      name: "Product 1",
      imageUrl: "https://via.placeholder.com/150",
      price: 9.99,
      reviewCount: 5,
      rating: 4.5
    },
    {
      id: '203',
      name: "Product 1",
      imageUrl: "https://via.placeholder.com/150",
      price: 9.99,
      reviewCount: 5,
      rating: 4.5
    },
    {
      id: '204',
      name: "Product 1",
      imageUrl: "https://via.placeholder.com/150",
      price: 9.99,
      reviewCount: 5,
      rating: 4.5
    },
    {
      id: '205',
      name: "Product 1",
      imageUrl: "https://via.placeholder.com/150",
      price: 9.99,
      reviewCount: 5,
      rating: 4.5
    },
    {
      id: '206',
      name: "Product 1",
      imageUrl: "https://via.placeholder.com/150",
      price: 9.99,
      reviewCount: 5,
      rating: 4.5
    },
    {
      id: '207',
      name: "Product 1",
      imageUrl: "https://via.placeholder.com/150",
      price: 9.99,
      reviewCount: 5,
      rating: 4.5
    },
    {
      id: '208',
      name: "Product 1",
      imageUrl: "https://via.placeholder.com/150",
      price: 9.99,
      reviewCount: 5,
      rating: 4.5
    }
  ]

  const totalPages = Math.ceil(products.length / productsPerPage);
  const handlePageChange = (pageNumber: number) => setCurrentPage(pageNumber);

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="flex flex-col items-center">
      <section className="space-y-4 pt-4 border-t-2 max-w-7xl w-full">
        <BreadcrumbComponent />
        <div className="md:grid md:grid-cols-[240px_1fr] gap-6 md:gap-8">
          <SearchFilters />
          <div className="w-full">
            <SortingOptions productsPerPage={productsPerPage} setProductsPerPage={setProductsPerPage} />
            <ProductList products={currentProducts} />
            <PaginationComponent currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
          </div>
        </div>
      </section>
    </div>
  );
}
