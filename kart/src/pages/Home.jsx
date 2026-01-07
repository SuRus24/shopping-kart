
import React from 'react';
import { Link } from 'react-router-dom'; // For Next.js: use `next/link` and href.

const macBlack = '#0A0A0A';

/** Simple image component with alt + responsive classes */
const Img = ({ src, alt, className = '' }) => (
  <img
    src={src}
    alt={alt}
    className={`w-full h-auto rounded-lg border border-slate-200 object-cover ${className}`}
    loading="lazy"
  />
);

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">


      {/* ====== Hero ====== */}
      <section className="mx-auto max-w-7xl px-6 pt-12 pb-16 lg:flex lg:items-center lg:gap-12">
        <div className="flex-1">
          <p className="text-xs font-semibold tracking-wider text-slate-500 uppercase">Welcome to Russell Shop</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold leading-tight" style={{ color: macBlack }}>
            Premium products, <span className="text-slate-700">seamless checkout</span>, dependable support.
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl">
            Explore curated collections designed for quality and comfort. Free delivery on eligible orders.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              to="/products"
              className="rounded-lg bg-[#0A0A0A] px-6 py-3 text-white text-sm font-semibold hover:bg-black text-center"
            >
              Start Shopping
            </Link>
            <a
              href="#bestsellers"
              className="rounded-lg border border-slate-300 px-6 py-3 text-[#0A0A0A] text-sm font-semibold hover:bg-slate-50 text-center"
            >
              View Bestsellers
            </a>
          </div>

          <div className="mt-6 flex items-center gap-6 text-xs text-slate-500">
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              Secure payments
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              Free returns (7 days)
            </div>
            <div className="flex items-center gap-2">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
              24×7 support
            </div>
          </div>
        </div>

        <div className="flex-1 mt-10 lg:mt-0">
          {/* Hero image — shopping / ecommerce */}
          <Img
            src="https://th.bing.com/th/id/OIP.jpK1gB5QQdthjdcQB9ExDQHaEK?w=265&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3"
            alt="Shopping cart in a store aisle"
            className="h-auto lg:h-96"
          />
          {/* Source: Unsplash shopping/ecommerce images (royalty‑free). [1](https://unsplash.com/s/photos/shopping-ecommerce)[2](https://unsplash.com/s/photos/shopping-cart) */}
        </div>
      </section>

      {/* ====== Features ====== */}
      <section id="features" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <h2 className="text-2xl font-semibold text-center" style={{ color: macBlack }}>
            Why shop with us
          </h2>
          <p className="mt-2 text-center text-slate-600">Everything you need for a delightful shopping experience.</p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Feature cards (static icons via images) */}
            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow transition">
              <Img
                src="https://th.bing.com/th/id/OIP.ydqVnYlLv4yl5epU0WNT-QHaFw?w=221&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3"
                alt="Delivery van miniature"
                className="h-28 object-cover"
              />
              <h3 className="mt-4 text-base font-semibold" style={{ color: macBlack }}>Fast & Free Shipping</h3>
              <p className="mt-2 text-sm text-slate-600">Eligible orders delivered quickly at no extra cost.</p>
              {/* Image from Unsplash (royalty‑free). [1](https://unsplash.com/s/photos/shopping-ecommerce) */}
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow transition">
              <Img
                src="https://th.bing.com/th/id/OIP.RaoNOjhR-10yEYwpD-VlMAHaEK?w=305&h=180&c=7&r=0&o=7&dpr=2&pid=1.7&rm=3"
                alt="Quality seal and packaging"
                className="h-28 object-cover"
              />
              <h3 className="mt-4 text-base font-semibold" style={{ color: macBlack }}>Trusted Quality</h3>
              <p className="mt-2 text-sm text-slate-600">Curated items with rigorous quality checks.</p>
              {/* Unsplash image. [1](https://unsplash.com/s/photos/shopping-ecommerce) */}
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow transition">
              <Img
                src="https://th.bing.com/th/id/OIP.V-RWkSAXyyHpQ2jqAVxVlwHaEJ?w=317&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
                alt="Credit card and phone for secure payments"
                className="h-28 object-cover"
              />
              <h3 className="mt-4 text-base font-semibold" style={{ color: macBlack }}>Secure Payments</h3>
              <p className="mt-2 text-sm text-slate-600">Encrypted checkout with major payment methods.</p>
              {/* Unsplash image. [1](https://unsplash.com/s/photos/shopping-ecommerce) */}
            </div>

            <div className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow transition">
              <Img
                src="https://th.bing.com/th/id/OIP.UvHatZuTxzF9rJC7WoL-ygHaEJ?w=292&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
                alt="Return box and tape"
                className="h-28 object-cover"
              />
              <h3 className="mt-4 text-base font-semibold" style={{ color: macBlack }}>Easy Returns</h3>
              <p className="mt-2 text-sm text-slate-600">Simple, no‑hassle returns within 7 days.</p>
              {/* Unsplash image. [1](https://unsplash.com/s/photos/shopping-ecommerce) */}
            </div>
          </div>
        </div>
      </section>

      {/* ====== Categories ====== */}
      <section id="categories" className="mx-auto max-w-7xl px-6 py-14">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold" style={{ color: macBlack }}>Shop by Category</h2>
            <p className="mt-1 text-slate-600">Browse our most‑loved categories.</p>
          </div>
          <Link to="/shop" className="hidden sm:inline-block text-sm font-semibold text-[#0A0A0A] hover:underline">
            View all
          </Link>
        </div>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Apparel */}
          <a href="#bestsellers" className="group block">
            <Img
              src="https://th.bing.com/th/id/OIP.YiyipjpwQDh3d4ykv-NWCQHaEK?w=275&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
              alt="Apparel flat lay"
              className="h-44 object-cover"
            />
            <div className="mt-3 flex items-center justify-between">
              <h3 className="text-sm font-semibold" style={{ color: macBlack }}>Apparel</h3>
              <span className="text-xs text-slate-500 group-hover:text-slate-700">Explore →</span>
            </div>
            {/* Clothing flat-lay images on Unsplash. span className="text-xs text-slate-500 group-hover:text-slate-700">Explore →</span>
            </div>
            {/* Unsplash decor flat-lay / lifestyle photos. [1](https://unsplash.com/s/photos/shopping-ecommerce) */}
          </a>

          {/* Gadgets */}
          <a href="#bestsellers" className="group block">
            <Img
              src="https://th.bing.com/th/id/OIP.47Sx-Iig2kzDzuMpyNPqXwHaHa?w=172&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
              alt="Gadgets and phone"
              className="h-44 object-cover"
            />
            <div className="mt-3 flex items-center justify-between">
              <h3 className="text-sm font-semibold" style={{ color: macBlack }}>Gadgets</h3>
              <span className="text-xs text-slate-500 group-hover:text-slate-700">Explore →</span>
            </div>
            {/* Unsplash tech product imagery. [1](https://unsplash.com/s/photos/shopping-ecommerce) */}
          </a>
        </div>
      </section>

      {/* ====== Bestsellers (Static cards with stock images) ====== */}
      <section id="bestsellers" className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <h2 className="text-2xl font-semibold text-center" style={{ color: macBlack }}>
            Bestsellers
          </h2>
          <p className="mt-2 text-center text-slate-600">Our community’s top picks this week.</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow transition">
              <Img
                src="https://th.bing.com/th/id/OIP.2tBiPQ4h3t3vrXfJMpF3_wHaEK?w=331&h=186&c=7&r=0&o=7&pid=1.7&rm=3"
                alt="Lifestyle sneakers"
                className="h-44 object-cover"
              />
              <h3 className="mt-3 text-sm font-semibold" style={{ color: macBlack }}>Lifestyle Sneakers</h3>
              <p className="mt-1 text-xs text-slate-500">Comfort-first everyday wear.</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm font-semibold" style={{ color: macBlack }}>$99.99</span>
                <Link to="/product" className="text-xs font-semibold text-[#0A0A0A] hover:underline">
                  View details
                </Link>
              </div>
              {/* Pexels ecommerce hero/product images are free to use. [3](https://www.pexels.com/search/e%20commerce%20hero/) */}
            </div>

            {/* Card 2 */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow transition">
              <Img
                src="https://th.bing.com/th/id/OIP.3te_TykXdmenhbw8w1u1kQHaEK?w=330&h=186&c=7&r=0&o=7&pid=1.7&rm=3"
                alt="Folded sweatshirt"
                className="h-44 object-cover"
              />
              <h3 className="mt-3 text-sm font-semibold" style={{ color: macBlack }}>Cozy Sweatshirt</h3>
              <p className="mt-1 text-xs text-slate-500">Soft cotton blend, everyday essential.</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm font-semibold" style={{ color: macBlack }}>$59.99</span>
                <Link to="/product" className="text-xs font-semibold text-[#0A0A0A] hover:underline">
                  View details
                </Link>
              </div>
              {/* Clothing flat-lay on Unsplash. [4](https://unsplash.com/s/photos/clothing-flat-lay) */}
            </div>

            {/* Card 3 */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow transition">
              <Img
                src="https://th.bing.com/th/id/OIP.c-BipCZM_l4uSqc5jEuHCQHaEJ?w=331&h=186&c=7&r=0&o=7&pid=1.7&rm=3"
                alt="Wireless headphones"
                className="h-44 object-cover"
              />
              <h3 className="mt-3 text-sm font-semibold" style={{ color: macBlack }}>Wireless Headphones</h3>
              <p className="mt-1 text-xs text-slate-500">Noise‑isolating design with long battery.</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm font-semibold" style={{ color: macBlack }}>$149.99</span>
                <Link to="/product" className="text-xs font-semibold text-[#0A0A0A] hover:underline">
                  View details
                </Link>
              </div>
              {/* Unsplash tech image. [1](https://unsplash.com/s/photos/shopping-ecommerce) */}
            </div>

            {/* Card 4 */}
            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm hover:shadow transition">
              <Img
                src="https://th.bing.com/th/id/OIP.LJsJhXuF17NsxrX9yqGUWgHaJ4?w=131&h=150&c=6&o=7&pid=1.7&rm=3"
                alt="Watch flat lay"
                className="h-44 object-cover"
              />
              <h3 className="mt-3 text-sm font-semibold" style={{ color: macBlack }}>Minimal Watch</h3>
              <p className="mt-1 text-xs text-slate-500">Timeless design, everyday classic.</p>
              <div className="mt-3 flex items-center justify-between">
                <span className="text-sm font-semibold" style={{ color: macBlack }}>$129.99</span>
                <Link to="/product" className="text-xs font-semibold text-[#0A0A0A] hover:underline">
                  View details
                </Link>
              </div>

            </div>


            {/* Testimonial 3 */}

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
