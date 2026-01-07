import { NavLink } from "react-router-dom";
import useOrderKart from "../orderContext/OrderContext";
// src/components/Navbar.jsx
export default function Navbar() {
  const {totalOrderCount}=useOrderKart()
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-900 mb-10 mt-0 shadow-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-8">
        {/* Brand */}
        <NavLink to="/" className="inline-flex items-center gap-2">
          <span className="rounded bg-white px-2 py-1 text-xs font-bold text-slate-900">
            Russell
          </span>
          <span className="text-lg font-semibold text-white">Shop</span>
        </NavLink>

        {/* Desktop nav links */}
        <div className="flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "bg-white text-blue-600 rounded-md px-3 py-2 transition-colors"
                : "text-slate-600 hover:text-white transition-colors"
            }
          >
            Home
          </NavLink>

          {/* // products */}
          <NavLink
            to="/products"
            // className={(isActive)=>`text-sm font-medium ${ isActive ? "bg-white text-slate-900 " : " text-slate-200 hover:text-white"}  transition-colors`}

            className={({ isActive }) =>
              isActive
                ? "bg-white text-blue-600 rounded-md px-3 py-2 transition-colors"
                : "text-slate-600 hover:text-white transition-colors"
            }
          >
            Products
          </NavLink>

          {/* categories */}
          <NavLink
            to="/categories"
            className={({ isActive }) =>
              isActive
                ? "bg-white text-blue-600 rounded-md px-3 py-2 transition-colors"
                : "text-slate-600 hover:text-white transition-colors"
            }
          >
            Categories
          </NavLink>
          {/* // myorders */}
          <NavLink
            to="/myorders"
            // className={(isActive)=>`text-sm font-medium ${ isActive ? "bg-white text-slate-900 " : " text-slate-200 hover:text-white"}  transition-colors`}

            className={({ isActive }) =>
              isActive
                ? "bg-white text-blue-600 rounded-md px-3 py-2 transition-colors"
                : "text-slate-600 hover:text-white transition-colors"
            }
          >
            My Orders
          </NavLink>
          {/* deals */}
          <NavLink
            to="/deals"
            className={({ isActive }) =>
              isActive
                ? "bg-white text-blue-600 rounded-md px-3 py-2 transition-colors"
                : "text-slate-600 hover:text-white transition-colors"
            }
          >
            Deals
          </NavLink>

          {/* about */}
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "bg-white text-blue-600 rounded-md px-3 py-2 transition-colors"
                : "text-slate-600 hover:text-white transition-colors"
            }
          >
            About
          </NavLink>
        </div>

        {/* Actions (Cart) */}
        <div className="relative inline-flex items-center gap-3">
          <NavLink
            to="/kart"
            className={({ isActive }) =>
              isActive
                ? "bg-white text-blue-600 rounded-md px-3 py-2 transition-colors"
                : "text-slate-600 hover:text-white transition-colors"
            }
            aria-label="View cart"
          >
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="9" cy="21" r="1" />
              <circle cx="20" cy="21" r="1" />
              <path d="M1 1h4l2.68 12.39a2 2 0 0 0 2 1.61h7.72a2 2 0 0 0 2-1.61L23 6H6" />
            </svg>
            <span className="text-sm font-medium">Cart</span>
          </NavLink>

          {/* Badge (styling only; replace content dynamically) */}
          <span className="absolute -right-3 -top-3 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-white px-1 text-xs font-bold text-slate-900">
            {/* kartCount & setkart count*/} {totalOrderCount}
          </span>
        </div>
      </div>
    </nav>
  );
}
