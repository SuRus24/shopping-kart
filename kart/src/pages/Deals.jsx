
import React from 'react';
import { Link } from 'react-router-dom'; // For Next.js: use `next/link` and href

const macBlack = '#0A0A0A';

const FILTERS = ['All', 'Apparel', 'Accessories', 'Gadgets', 'Home'];
const DEALS = [
  {
    title: 'Winter Essentials',
    tag: 'Apparel',
    blurb: 'Flat 40% off • Limited time',
    savings: 'Save up to ₹1200',
    coupon: 'WINTER40',
    path: '/shop/apparel',
    ends: 'Ends Jan 31',
    highlight: 'Hot',
  },
  {
    title: 'Minimal Watches',
    tag: 'Accessories',
    blurb: 'Buy 1 Get 1 (BOGO)',
    savings: '₹1299 effective each',
    coupon: 'WATCHBOGO',
    path: '/shop/watches',
    ends: 'Ends Feb 10',
    highlight: 'BOGO',
  },
  {
    title: 'Wireless Audio',
    tag: 'Gadgets',
    blurb: 'Extra 15% off on checkout',
    savings: 'Card offers apply',
    coupon: 'SOUND15',
    path: '/shop/gadgets',
    ends: 'Ends Jan 25',
    highlight: 'New',
  },
  {
    title: 'Home & Living',
    tag: 'Home',
    blurb: 'Up to 50% off',
    savings: 'Free shipping on ₹999+',
    coupon: 'HOME50',
    path: '/shop/home',
    ends: 'Ends Jan 20',
    highlight: 'Save big',
  },
  {
    title: 'Everyday Bags',
    tag: 'Accessories',
    blurb: 'Flat 25% off',
    savings: '₹800 off on combos',
    coupon: 'BAG25',
    path: '/shop/bags',
    ends: 'Ends Jan 22',
    highlight: 'Pick',
  },
  {
    title: 'Sneaker Week',
    tag: 'Apparel',
    blurb: 'Extra ₹500 off',
    savings: 'Price drop on 30+ styles',
    coupon: 'KICKS500',
    path: '/shop/footwear',
    ends: 'Ends Jan 18',
    highlight: 'Drop',
  },
];

export default function Deals() {
  const [active, setActive] = React.useState('All');

  const visibleDeals = DEALS.filter((d) => active === 'All' || d.tag === active);

  const copy = (text) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 pt-10 pb-8">
          <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100 p-6 lg:p-8 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
              <div>
                <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                  Russell Shop • Exclusive
                </p>
                <h1 className="mt-2 text-3xl sm:text-4xl font-bold" style={{ color: macBlack }}>
                  Today’s Beautiful Deals
                </h1>
                <p className="mt-2 text-sm text-slate-600">
                  Curated discounts, clean checkout, and fast delivery. Limited time — don’t miss out.
                </p>

                {/* Mini perks */}
                <div className="mt-4 flex flex-wrap gap-4 text-xs text-slate-600">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" /> Extra 10% with code <b>RS10</b>
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" /> Free returns (7 days)
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500" /> Secure payments
                  </span>
                </div>
              </div>

              {/* Action bar */}
              <div className="flex gap-2">
                <button
                  type="button"
                  className="rounded-lg bg-[#0A0A0A] px-4 py-2 text-sm font-semibold text-white hover:bg-black"
                  onClick={() => copy('RS10')}
                  title="Copy extra 10% code"
                >
                  Copy RS10
                </button>
                <Link
                  to="/shop"
                  className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-[#0A0A0A] hover:bg-slate-50"
                >
                  View All
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative ribbon */}
        <div aria-hidden="true" className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white to-transparent" />
      </section>

      {/* ===== Filters ===== */}
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="flex flex-wrap items-center gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setActive(f)}
              className={`rounded-full border px-3 py-1 text-xs font-semibold transition
                ${active === f
                  ? 'border-slate-900 bg-slate-900 text-white'
                  : 'border-slate-300 text-slate-700 hover:bg-slate-50'}
              `}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* ===== Deals Grid ===== */}
      <div className="mx-auto max-w-7xl px-6 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6">
          {visibleDeals.map((d) => (
            <div
              key={d.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-md transition"
            >
              {/* top accent */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900" />

              <div className="p-5">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-base font-semibold" style={{ color: macBlack }}>
                      {d.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-600">{d.blurb}</p>
                  </div>
                  <span className="rounded-full bg-slate-100 px-2 py-1 text-[10px] font-semibold text-slate-600">
                    {d.tag}
                  </span>
                </div>

                {/* savings + ends */}
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-sm font-semibold" style={{ color: macBlack }}>
                    {d.savings}
                  </span>
                  <span className="text-[11px] text-slate-500">{d.ends}</span>
                </div>

                {/* coupon block */}
                <div className="mt-4 flex items-center gap-2">
                  <code className="rounded-lg bg-slate-50 px-2 py-1 text-[11px] font-semibold text-slate-700 border border-slate-200">
                    {d.coupon}
                  </code>
                  <button
                    type="button"
                    onClick={() => copy(d.coupon)}
                    className="text-[11px] font-semibold text-slate-600 hover:text-slate-800"
                  >
                    Copy
                  </button>
                </div>

                {/* CTA buttons */}
                <div className="mt-5 flex gap-2">
                  <Link
                    to={d.path}
                    className="flex-1 rounded-lg bg-[#0A0A0A] px-4 py-2 text-center text-xs font-semibold text-white hover:bg-black"
                  >
                    Shop Deal
                  </Link>
                  <Link
                    to="/terms"
                    className="rounded-lg border border-slate-300 px-3 py-2 text-center text-xs font-semibold text-[#0A0A0A] hover:bg-slate-50"
                  >
                    T&Cs
                  </Link>
                </div>
              </div>

              {/* corner badge */}
              <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rotate-45 bg-gradient-to-br from-slate-900 to-slate-700 opacity-10" />
              <span className="absolute right-2 top-2 rounded-md bg-slate-900/90 px-2 py-1 text-[10px] font-semibold text-white">
                {d.highlight}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link
            to="/offers"
            className="rounded-lg bg-[#0A0A0A] px-5 py-3 text-center text-sm font-semibold text-white hover:bg-black transition"
          >
            See More Offers
          </Link>
          <Link
            to="/shop"
            className="rounded-lg border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-[#0A0A0A] hover:bg-slate-50 transition"
          >
            View All Products
          </Link>
        </div>
      </div>
    </div>
  );
}


