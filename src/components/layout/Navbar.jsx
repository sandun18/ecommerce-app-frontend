import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { assets } from '../../assets/assets';

const menuItems = [
  { label: 'HOME', to: '/' },
  { label: 'COLLECTION', to: '/collection' },
  { label: 'ABOUT', to: '/about' },
  { label: 'CONTACT', to: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="flex items-center justify-between py-4">
        {/* Logo */}
        <Link
          to="/"
          className="text-lg font-light tracking-[0.22em] text-gray-900"
          aria-label="FOREVER Home"
        >
          FOREVER.
        </Link>

        {/* Desktop menu */}
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8 text-xs font-light tracking-widest text-gray-700">
            {menuItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    isActive
                      ? 'text-gray-900'
                      : 'text-gray-700 hover:text-gray-900 transition-colors'
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right icons (desktop) */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/collection" aria-label="Search" className="p-1 rounded hover:bg-gray-100">
            <img src={assets.search_icon} className="w-5" alt="" />
          </Link>

          <Link to="/login" aria-label="Profile" className="p-1 rounded hover:bg-gray-100">
            <img src={assets.profile_icon} className="w-5" alt="" />
          </Link>

          <Link to="/cart" aria-label="Cart" className="relative p-1 rounded hover:bg-gray-100">
            <img src={assets.cart_icon} className="w-5" alt="" />
            <span className="absolute -right-1 -bottom-1 w-4 h-4 bg-black text-white text-[10px] leading-4 rounded-full flex items-center justify-center">
              0
            </span>
          </Link>
        </div>

        {/* Mobile actions */}
        <div className="md:hidden flex items-center gap-3">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            className="p-2 rounded hover:bg-gray-100 transition"
          >
            <img src={assets.menu_icon} className="w-5" alt="" />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${open ? 'block' : 'hidden'} md:hidden border-t border-gray-200`}>
        <div className="py-3">
          <ul className="flex flex-col">
            {menuItems.map((item) => (
              <li key={item.to} className="px-4 py-2 border-b border-gray-100">
                <NavLink
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className="text-sm tracking-widest font-light text-gray-800"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-between px-4 py-4">
            <Link
              to="/collection"
              onClick={() => setOpen(false)}
              aria-label="Search"
              className="p-1 rounded hover:bg-gray-100"
            >
              <img src={assets.search_icon} className="w-5" alt="" />
            </Link>

            <Link
              to="/login"
              onClick={() => setOpen(false)}
              aria-label="Profile"
              className="p-1 rounded hover:bg-gray-100"
            >
              <img src={assets.profile_icon} className="w-5" alt="" />
            </Link>

            <Link
              to="/cart"
              onClick={() => setOpen(false)}
              aria-label="Cart"
              className="relative p-1 rounded hover:bg-gray-100"
            >
              <img src={assets.cart_icon} className="w-5" alt="" />
              <span className="absolute -right-1 -bottom-1 w-4 h-4 bg-black text-white text-[10px] leading-4 rounded-full flex items-center justify-center">
                0
              </span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}