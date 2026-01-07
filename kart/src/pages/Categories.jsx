
import React from 'react';
import { Link } from 'react-router-dom'; // For Next.js: use `next/link` and href

const macBlack = '#0A0A0A';

const categories = [
  { name: 'Apparel', path: '/shop/apparel', tag: 'Popular' },
  { name: 'Accessories', path: '/shop/accessories', tag: 'Trending' },
  { name: 'Footwear', path: '/shop/footwear', tag: 'New' },
  { name: 'Gadgets', path: '/shop/gadgets', tag: 'Hot' },
  { name: 'Home & Living', path: '/shop/home', tag: 'Curated' },
  { name: 'Beauty & Care', path: '/shop/beauty', tag: 'Essentials' },
  { name: 'Watches', path: '/shop/watches', tag: 'Classic' },
  { name: 'Bags', path: '/shop/bags', tag: 'Editor’s pick' },
  { name: 'Sports & Fitness', path: '/shop/sports', tag: 'Active' },
  { name: 'Kids', path: '/shop/kids', tag: 'Fresh' },
  { name: 'Stationery', path: '/shop/stationery', tag: 'Neat' },
  { name: 'Gifts', path: '/shop/gifts', tag: 'Seasonal' },
];

export default function Category() {
  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* Header */}
        <header className="mb-6">
          <h1 className="text-2xl font-bold" style={{ color: macBlack }}>
            Shop by Category
          </h1>
          <p className="mt-1 text-sm text-slate-600">
            Explore curated collections from Russell Shop.
          </p>
        </header>

        {/* Filter Bar (static) */}
        <div className="mb-6 flex flex-wrap items-center gap-2">
          {['All', 'Popular', 'New', 'Trending', 'Essentials'].map((f, i) => (
            <button
              key={i}
              type="button"
              className={`rounded-full border px-3 py-1 text-xs font-semibold transition
                ${f === 'All'
                  ? 'border-slate-900 bg-slate-900 text-white'
                  : 'border-slate-300 text-slate-700 hover:bg-slate-50'}
              `}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {categories.map((c) => (
            <Link
              key={c.name}
              to={c.path}
              className="group rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow transition"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-sm font-semibold" style={{ color: macBlack }}>
                  {c.name}
                </h3>
                <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-semibold text-slate-600">
                  {c.tag}
                </span>
              </div>
              <p className="mt-2 text-xs text-slate-500">
                Handpicked items • Fast delivery
              </p>

              {/* Tiny divider + micro stats (static) */}
              <div className="mt-4 h-px bg-slate-200" />
              <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500">
                <span>~ 200+ products</span>
                <span className="group-hover:text-slate-700">Explore →</span>
              </div>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link
            to="/shop"
            className="rounded-lg bg-[#0A0A0A] px-5 py-3 text-center text-sm font-semibold text-white hover:bg-black transition"
          >
            View All Products
          </Link>
          <Link
            to="/offers"
            className="rounded-lg border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-[#0A0A0A] hover:bg-slate-50 transition"
          >
            See Offers
          </Link>
        </div>
      </div>
    </div>
  );
}
