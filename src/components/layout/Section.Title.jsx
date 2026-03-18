import React from 'react';

export default function SectionTitle({ title, description }) {
  return (
    <div className="text-center">
      <h2 className="text-lg md:text-xl font-light tracking-[0.22em] text-gray-900">
        {title}
      </h2>
      <p className="mt-3 text-sm text-gray-500 max-w-2xl mx-auto">
        {description}
      </p>
      <div className="mt-8 flex justify-center">
        <span className="w-12 h-px bg-gray-200" aria-hidden="true" />
      </div>
    </div>
  );
}