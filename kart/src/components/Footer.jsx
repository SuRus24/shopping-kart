
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      {/* Top section */}
      <div className="mx-auto max-w-7xl px-6 sm:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              {/* Simple RS monogram */}
              <div
                className="h-10 w-10 rounded-md flex items-center justify-center"
                style={{ backgroundColor: '#1D1D1F' }}
                aria-hidden="true"
              >
                <span className="text-white font-semibold">RS</span>
              </div>
              <span
                className="text-xl font-semibold"
                style={{ color: '#1D1D1F' }}
              >
                Russell Shop
              </span>
            </div>
            <p className="mt-4 text-sm text-gray-600">
              Premium shopping experience—thoughtfully curated products,
              seamless checkout, and dependable support.
            </p>

            {/* Social icons */}
            <div className="mt-4 flex gap-3">
              <a
                href="https://facebook.com/russellshop" // TODO: update
                className="p-2 rounded-md border border-gray-200 hover:border-gray-300"
                aria-label="Facebook"
                title="Facebook"
              >
                {/* Facebook SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1D1D1F"
                  strokeWidth="1.5"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/russellshop" // TODO: update
                className="p-2 rounded-md border border-gray-200 hover:border-gray-300"
                aria-label="Instagram"
                title="Instagram"
              >
                {/* Instagram SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1D1D1F"
                  strokeWidth="1.5"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <path d="M16 8h.01" />
                  <circle cx="12" cy="12" r="3.5" />
                </svg>
              </a>
              <a
                href="https://x.com/russellshop" // TODO: update
                className="p-2 rounded-md border border-gray-200 hover:border-gray-300"
                aria-label="X (Twitter)"
                title="X (Twitter)"
              >
                {/* X/Twitter SVG */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#1D1D1F"
                  strokeWidth="1.5"
                >
                  <path d="M4 4l8 8-8 8M20 4L12 12l8 8" />
                </svg>
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: '#1D1D1F' }}
            >
              Shop
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="/collections/new" className="text-gray-700 hover:text-black">New Arrivals</a></li>
              <li><a href="/collections/sale" className="text-gray-700 hover:text-black">Sale</a></li>
              <li><a href="/collections/bestsellers" className="text-gray-700 hover:text-black">Bestsellers</a></li>
              <li><a href="/gift-cards" className="text-gray-700 hover:text-black">Gift Cards</a></li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: '#1D1D1F' }}
            >
              Help
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a href="/support" className="text-gray-700 hover:text-black">Support Center</a></li>
              <li><a href="/shipping" className="text-gray-700 hover:text-black">Shipping & Delivery</a></li>
              <li><a href="/returns" className="text-gray-700 hover:text-black">Returns & Exchanges</a></li>
              <li><a href="/faq" className="text-gray-700 hover:text-black">FAQs</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: '#1D1D1F' }}
            >
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-gray-700">
              <li>
                <span className="block font-medium" style={{ color: '#1D1D1F' }}>
                  Support
                </span>
                {/* TODO: Replace with real numbers */}
                <div className="mt-1">
                  <p>India: <a href="tel:+91-00000-00000" className="hover:text-black">+91 00000 00000</a></p>
                  <p>Global: <a href="tel:+1-800-000-0000" className="hover:text-black">+1 (800) 000‑0000</a></p>
                </div>
              </li>
              <li>
                <span className="block font-medium" style={{ color: '#1D1D1F' }}>
                  Email
                </span>
                {/* TODO: Replace with real email */}
                <a href="mailto:support@russellshop.com" className="hover:text-black">
                  support@russellshop.com
                </a>
              </li>
              <li>
                <span className="block font-medium" style={{ color: '#1D1D1F' }}>
                  Address
                </span>
                {/* TODO: Replace with real address */}
                <p className="text-gray-700">123 Russell Lane, Mumbai, MH 400001</p>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-10 rounded-lg border border-gray-200 p-5 sm:p-6">
          <div className="sm:flex sm:items-center sm:justify-between">
            <div>
              <h4
                className="text-base font-semibold"
                style={{ color: '#1D1D1F' }}
              >
                Stay in the loop
              </h4>
              <p className="mt-1 text-sm text-gray-600">
                Subscribe for product drops, exclusive offers, and updates.
              </p>
            </div>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="mt-4 sm:mt-0 flex w-full sm:w-auto gap-2"
              aria-label="Newsletter subscription"
            >
              <input
                type="email"
                required
                placeholder="you@example.com"
                className="flex-1 sm:w-64 rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black/70 focus:border-black"
              />
              <button
                type="submit"
                className="rounded-md px-4 py-2 text-sm font-medium text-white"
                style={{ backgroundColor: '#1D1D1F' }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-gray-50">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-gray-600">
              © {new Date().getFullYear()} Russell Shop. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600">
              <a href="/privacy" className="hover:text-black">Privacy Policy</a>
              <span className="hidden sm:inline">•</span>
              <a href="/terms" className="hover:text-black">Terms of Service</a>
              <span className="hidden sm:inline">•</span>
              <a href="/contact" className="hover:text-black">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
