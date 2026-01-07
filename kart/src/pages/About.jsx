
import React from 'react';
import { Link } from 'react-router-dom'; // For Next.js: use `next/link` and change `to` -> `href`

const macBlack = '#0A0A0A';

export default function About() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero / Intro */}
      <section className="mx-auto max-w-7xl px-6 pt-10 pb-6">
        <div className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-slate-100 p-6 lg:p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div>
              <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                Russell Shop
              </p>
              <h1 className="mt-2 text-3xl sm:text-4xl font-bold" style={{ color: macBlack }}>
                About Us
              </h1>
              <p className="mt-2 text-sm text-slate-600">
                We’re building a premium shopping experience — curated products, seamless checkout,
                and dependable support. Designed with care, delivered with speed.
              </p>
            </div>
            <div className="flex gap-2">
              <Link
                to="/shop"
                className="rounded-lg bg-[#0A0A0A] px-4 py-2 text-sm font-semibold text-white hover:bg-black"
              >
                Shop Now
              </Link>
              <Link
                to="/deals"
                className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-[#0A0A0A] hover:bg-slate-50"
              >
                Today’s Deals
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold" style={{ color: macBlack }}>Our Mission</h2>
            <p className="mt-2 text-sm text-slate-600">
              To make high-quality products accessible through a thoughtful, fast, and secure
              shopping journey — from discovery to doorstep.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold" style={{ color: macBlack }}>Our Vision</h2>
            <p className="mt-2 text-sm text-slate-600">
              A trusted destination that customers love for its clean design, helpful support, and
              consistently delightful experience.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold" style={{ color: macBlack }}>What We Value</h2>
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Quality', desc: 'Curated products with rigorous checks.' },
              { title: 'Transparency', desc: 'Clear pricing, shipping, and returns.' },
              { title: 'Security', desc: 'Encrypted payments, safe data handling.' },
              { title: 'Care', desc: 'Friendly support and easy resolutions.' },
            ].map((v) => (
              <div key={v.title} className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <h3 className="text-sm font-semibold" style={{ color: macBlack }}>{v.title}</h3>
                <p className="mt-1 text-xs text-slate-600">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline (static) */}
      <section className="mx-auto max-w-7xl px-6 pb-8">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold" style={{ color: macBlack }}>Our Journey</h2>
          <div className="mt-4 space-y-4">
            {[
              { year: '2024', text: 'Conceptualized Russell Shop and built the first prototype.' },
              { year: '2025', text: 'Launched core store experience with secure checkout.' },
              { year: '2026', text: 'Expanded categories and improved customer care.' },
            ].map((t) => (
              <div key={t.year} className="flex items-start gap-3">
                <span className="mt-0.5 h-2 w-2 rounded-full bg-slate-900" aria-hidden />
                <div>
                  <p className="text-sm font-semibold" style={{ color: macBlack }}>{t.year}</p>
                  <p className="text-xs text-slate-600">{t.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs / Support snippet (static) */}
      <section className="mx-auto max-w-7xl px-6 pb-12">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold" style={{ color: macBlack }}>FAQs & Support</h2>
          <div className="mt-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div>
              <h3 className="text-sm font-semibold" style={{ color: macBlack }}>Shipping</h3>
              <p className="mt-1 text-xs text-slate-600">Fast delivery on eligible orders. Track inside your account.</p>
              <Link to="/shipping" className="mt-2 inline-block text-xs font-semibold text-[#0A0A0A] hover:underline">Learn more</Link>
            </div>
            <div>
              <h3 className="text-sm font-semibold" style={{ color: macBlack }}>Returns</h3>
              <p className="mt-1 text-xs text-slate-600">Easy returns within 7 days for most products.</p>
              <Link to="/returns" className="mt-2 inline-block text-xs font-semibold text-[#0A0A0A] hover:underline">View policy</Link>
            </div>
            <div>
              <h3 className="text-sm font-semibold" style={{ color: macBlack }}>Contact</h3>
              <p className="mt-1 text-xs text-slate-600">We’re here to help — reach us via phone or email.</p>
              <div className="mt-2 text-xs text-slate-600">
                <p>Phone: +91 00000 00000 (demo)</p>
                <p>Email: support@russellshop.com (demo)</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Link
              to="/support"
              className="rounded-lg bg-[#0A0A0A] px-5 py-3 text-center text-sm font-semibold text-white hover:bg-black transition"
            >
              Visit Support Center
            </Link>
            <Link
              to="/contact"
              className="rounded-lg border border-slate-300 px-5 py-3 text-center text-sm font-semibold text-[#0A0A0A] hover:bg-slate-50 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
``
