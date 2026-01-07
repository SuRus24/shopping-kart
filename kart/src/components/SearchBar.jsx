
// src/components/SearchBar.jsx
export default function SearchBar({isSearch, setIsSearch}) {
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="relative">
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e)=>{setIsSearch(e.target.value)}}
          value={isSearch}
          className="w-full rounded-full border border-slate-300 bg-white px-4 py-2 pl-10 text-sm text-slate-700 shadow-sm focus:border-slate-500 focus:ring-2 focus:ring-slate-400 focus:outline-none"
        />
        <svg
          className="absolute left-3 top-2.5 h-5 w-5 text-slate-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 1110.5 3a7.5 7.5 0 016.15 13.65z"
          />
        </svg>
      </div>
    </div>
  );
}
