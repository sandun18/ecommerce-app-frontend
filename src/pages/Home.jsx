import React from 'react';
import Hero from '../components/layout/Hero';
import SectionTitle from '../components/layout/Section.Title';
import ProductGrid from '../components/layout/ProductGrid';
import Features from '../components/layout/Features';
import Newsletter from '../components/layout/Newsletter';
import Footer from '../components/layout/Footer';
import { products } from '../assets/assets';

function toCard(p) {
  return {
    id: p._id,
    name: p.name,
    price: p.price,
    image: Array.isArray(p.image) ? p.image[0] : '',
  };
}

export default function Home() {
  // Dummy product data arrays (rendered via map() inside ProductGrid)
  const latestCollections = products.slice(0, 5).map(toCard);
  const bestSellerProducts = products.filter((p) => p.bestseller).slice(0, 5).map(toCard);

  return (
    <main className="space-y-16 pb-10">
      {/* 2) Hero Section */}
      <Hero />

      {/* 3) Latest Collections */}
      <section className="max-w-7xl mx-auto">
        <SectionTitle
          title="LATEST COLLECTIONS"
          description="Fresh styles curated for a clean, modern wardrobe—made to wear on repeat."
        />
        <ProductGrid products={latestCollections} />
      </section>

      {/* 4) Best Seller */}
      <section className="max-w-7xl mx-auto">
        <SectionTitle
          title="BEST SELLER"
          description="Customer favorites—crafted for comfort, designed for confidence."
        />
        <ProductGrid products={bestSellerProducts} />
      </section>

      {/* 5) Features / Service Highlights */}
      <section className="max-w-7xl mx-auto px-6 md:px-0">
        <div className="text-center">
          <h2 className="text-lg md:text-xl font-light tracking-[0.22em] text-gray-900">
            WHY SHOP WITH FOREVER
          </h2>
          <p className="mt-3 text-sm text-gray-500 max-w-2xl mx-auto">
            Premium service from browsing to delivery—simple, transparent, and reliable.
          </p>
          <div className="mt-8 flex justify-center">
            <span className="w-12 h-px bg-gray-200" aria-hidden="true" />
          </div>
        </div>

        <div className="mt-10">
          <Features />
        </div>
      </section>

      {/* 6) Newsletter */}
      <section className="max-w-7xl mx-auto">
        <Newsletter />
      </section>

      {/* 7) Footer */}
      <Footer />
    </main>
  );
}