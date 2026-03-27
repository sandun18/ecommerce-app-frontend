import React, { useMemo, useState } from 'react';
import { products } from '../assets/assets';
import ProductCard from '../components/layout/ProductCard';

function toCard(p) {
  return {
    id: p._id,
    name: p.name,
    price: p.price,
    image: Array.isArray(p.image) ? p.image[0] : '',
    category: p.category || 'all',
    subCategory: p.subCategory || 'all',
  };
}

const SORT_OPTIONS = [
  { value: 'relevant', label: 'Relevant' },
  { value: 'low-high', label: 'Price: Low to High' },
  { value: 'high-low', label: 'Price: High to Low' },
  { value: 'name-asc', label: 'Name: A to Z' },
];

export default function Collection() {
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('relevant');

  const cards = useMemo(() => products.map(toCard), []);
  const categories = useMemo(
    () => ['all', ...new Set(cards.map((p) => p.category).filter(Boolean))],
    [cards]
  );

  const filtered = useMemo(() => {
    let list = [...cards];

    if (category !== 'all') {
      list = list.filter((p) => p.category === category);
    }

    if (sortBy === 'low-high') list.sort((a, b) => a.price - b.price);
    if (sortBy === 'high-low') list.sort((a, b) => b.price - a.price);
    if (sortBy === 'name-asc') list.sort((a, b) => a.name.localeCompare(b.name));

    return list;
  }, [cards, category, sortBy]);

  return (
    <main className="py-10">
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-medium text-gray-900">Collections</h1>
          <p className="mt-2 text-sm text-gray-500">
            Explore our full range and find your perfect fit.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c === 'all' ? 'All Categories' : c}
              </option>
            ))}
          </select>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 py-2 text-sm bg-white"
          >
            {SORT_OPTIONS.map((s) => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 sm:gap-6">
        {filtered.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-12 text-center text-sm text-gray-500">
          No products found for selected filter.
        </div>
      )}
    </main>
  );
}