import { createContext, useContext, useState } from "react";
 
export const KartContext = createContext(null);
 
export function KartProvider({ children }) {
  const [products, setProducts] = useState({});
 
  return (
    <KartContext.Provider value={{ products, setProducts }}>
          {children}
    </KartContext.Provider>
  );
}
 
export default function useKart() {
  const context = useContext(KartContext);
  if (!context) {
    throw new Error("useKart must be used inside KartProvider");
  }
  return context;
}