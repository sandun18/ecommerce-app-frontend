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


  

  return (
    <div>
      <h1>Collection</h1>
    </div>
  );
}