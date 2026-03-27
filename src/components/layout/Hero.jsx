import React from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';

export default function Hero() {
  return (
    <section className="rounded-2xl overflow-hidden border border-gray-200 bg-white shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left copy */}
        <div className="px-6 md:px-12 py-14 md:py-20 flex flex-col justify-center bg-gradient-to-br from-white to-gray-50">
          <div className="flex items-center gap-3">
            <span className="w-10 h-px bg-gray-800" aria-hidden="true" />
            <p className="text-[11px] tracking-[0.22em] font-light text-gray-600">
              OUR BESTSELLERS
            </p>
          </div>

          <h1 className="mt-6 text-4xl md:text-6xl font-light tracking-tight text-gray-900 leading-tight">
            Latest Arrivals
          </h1>

          <div className="mt-8">
            <Link
              to="/collection"
              className="inline-flex items-center justify-center bg-black text-white text-xs tracking-[0.2em] px-7 py-3"
            >
              SHOP NOW
            </Link>
          </div>
        </div>

        {/* Right image */}
        <div className="h-[360px] md:h-auto">
          <img
            src={assets.hero_img}
            alt="Fashion model"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}