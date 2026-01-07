
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UpiPayments() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    // Show loader for exactly 10 seconds, then mark as done
    const t = setTimeout(() => setLoading(false), 10_000);
    return () => clearTimeout(t); // cleanup if user leaves early
  }, []);

  const goToOrders = () => {
    // Change this path if your orders page is different
    navigate("/myorders");
  };

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4 py-10">
      <div className="w-full max-w-md text-center">
        {loading ? (
          <div className="flex flex-col items-center gap-4">
            {/* Loader (spinner) */}
            <div className="h-16 w-16 animate-spin rounded-full border-4 border-slate-300 border-t-slate-900" />
            <p className="text-sm text-slate-600">Processing your UPI payment…</p>
            <p className="text-xs text-slate-500">Please wait about 10 seconds</p>
          </div>
        ) : (
          <div className="flex flex-col items-center gap-6">
            {/* Green verified-style tick (Instagram-like check inside a circle) */}
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500 shadow-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>

            <div className="space-y-1">
              <h2 className="text-xl font-semibold text-emerald-700">
                Payment Verified
              </h2>
              <p className="text-sm text-slate-600">
                Your UPI payment was approved successfully.
              </p>
            </div>

            <button
              type="button"
              onClick={goToOrders}
              className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400"
            >
              Go to your Orders
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
``
