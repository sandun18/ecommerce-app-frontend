import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!email.trim()) return;

    // No backend in this demo; keep it beginner-friendly.
    alert(`Subscribed with: ${email}`);
    setEmail('');
  }

  return (
    <section className="border border-gray-200 bg-white">
      <div className="px-6 md:px-10 py-12 md:py-14 text-center">
        <h2 className="text-lg md:text-xl font-light tracking-[0.18em] text-gray-900">
          Subscribe now &amp; get 20% off
        </h2>
        <p className="mt-3 text-sm text-gray-500 max-w-2xl mx-auto">
          Be the first to discover new arrivals, exclusive offers, and timeless styles.
        </p>

        <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full sm:w-80 border border-gray-200 px-4 py-3 text-sm outline-none focus:border-gray-400"
            aria-label="Email address"
          />
          <button
            type="submit"
            className="bg-black text-white text-xs tracking-[0.2em] px-7 py-3 hover:bg-gray-900 transition"
          >
            SUBSCRIBE
          </button>
        </form>
      </div>
    </section>
  );
}