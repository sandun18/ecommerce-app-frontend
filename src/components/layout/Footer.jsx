import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-14">
        {/* Footer Top Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left: Brand */}
          <div>
            <Link
              to="/"
              className="text-lg font-light tracking-[0.22em] text-gray-900"
              aria-label="FOREVER Home"
            >
              FOREVER.
            </Link>
            <p className="mt-4 text-sm text-gray-500 leading-relaxed max-w-sm">
              Minimal fashion, timeless silhouettes. Designed to feel effortless—every day.
            </p>
          </div>

          {/* Middle: Company */}
          <div>
            <h3 className="text-sm tracking-[0.2em] font-light text-gray-900">
              COMPANY
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-gray-600">
              <li>
                <Link to="/" className="hover:text-gray-900 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-900 transition">
                  About us
                </Link>
              </li>
              <li>
                <Link to="/collection" className="hover:text-gray-900 transition">
                  Delivery
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition">
                  Privacy policy
                </a>
              </li>
            </ul>
          </div>

          {/* Right: Get in touch */}
          <div>
            <h3 className="text-sm tracking-[0.2em] font-light text-gray-900">
              GET IN TOUCH
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-gray-600">
              <li>
                <a href="tel:+15551234567" className="hover:text-gray-900 transition">
                  +1 (555) 123-4567
                </a>
              </li>
              <li>
                <a
                  href="mailto:support@forever.com"
                  className="hover:text-gray-900 transition"
                >
                  support@forever.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom: Copyright */}
        <div className="mt-12 pt-6 border-t border-gray-200 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} FOREVER. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

