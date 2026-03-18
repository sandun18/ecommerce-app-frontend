import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  const { id, name, price, image } = product;

  return (
    <Link
      to={id ? `/product/${id}` : '/collection'}
      className="block group"
      aria-label={name}
    >
      <div className="border border-gray-200 bg-gray-50 overflow-hidden">
        <div className="aspect-[3/4]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
          />
        </div>
      </div>

      <div className="mt-4">
        <h3 className="text-sm font-light text-gray-900 truncate">{name}</h3>
        <p className="mt-2 text-sm font-light text-gray-600">
          ₹{price}
        </p>
      </div>
    </Link>
  );
}