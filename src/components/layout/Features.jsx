import React from 'react';
import { assets } from '../../assets/assets';

export default function Features({ items }) {
  const defaultItems = [
    {
      icon: assets.exchange_icon,
      title: 'Easy Exchange Policy',
      text: 'Exchange hassle-free with simple steps and fast confirmation.',
    },
    {
      icon: assets.quality_icon,
      title: '7 Days Return Policy',
      text: 'Changed your mind? Return within 7 days in original condition.',
    },
    {
      icon: assets.support_img,
      title: 'Best Customer Support',
      text: 'Get quick help from our friendly team, whenever you need it.',
    },
  ];

  const data = items || defaultItems;

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {data.map((f) => (
          <div
            key={f.title}
            className="border border-gray-200 bg-white px-6 py-8 text-center"
          >
            <div className="flex justify-center">
              <img src={f.icon} alt="" className="w-10 h-10" />
            </div>
            <h3 className="mt-5 text-sm font-light tracking-wide text-gray-900">
              {f.title}
            </h3>
            <p className="mt-3 text-sm text-gray-500 leading-relaxed">
              {f.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}