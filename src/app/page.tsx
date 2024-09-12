import DefaultLayout from "@/components/core/layouts/default-layout";
import HeroSection from "@/components/home/hero-section";
import ProductsFeaturedList from "@/components/common/products-featured-list";

export default function HomePage() {
  return (
    <DefaultLayout>
      <HeroSection />
      <ProductsFeaturedList />
    </DefaultLayout>
  );
}
