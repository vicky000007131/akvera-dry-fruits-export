import { createContext, useContext, useState, type ReactNode } from "react";
import { products as seedProducts, initialModules, type Product, type DemoRow } from "./data";
type Store = { products: Product[]; setProducts: React.Dispatch<React.SetStateAction<Product[]>>; records: Record<string, DemoRow[]>; setRecords: React.Dispatch<React.SetStateAction<Record<string, DemoRow[]>>>; quoteOpen: boolean; setQuoteOpen: (v: boolean) => void; quoteProduct: string; openQuote: (p?: string) => void; dark: boolean; toggleDark: () => void };
const DemoContext = createContext<Store | null>(null);
export function DemoProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useState(seedProducts);
  const [records, setRecords] = useState(initialModules);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState("");
  const [dark, setDark] = useState(false);
  function toggleDark() { setDark(v => { document.documentElement.classList.toggle("dark", !v); return !v; }); }
  function openQuote(p = "") { setQuoteProduct(p); setQuoteOpen(true); }
  return <DemoContext.Provider value={{ products, setProducts, records, setRecords, quoteOpen, setQuoteOpen, quoteProduct, openQuote, dark, toggleDark }}>{children}</DemoContext.Provider>;
}
export function useDemo() { const ctx = useContext(DemoContext); if (!ctx) throw new Error("DemoProvider is required"); return ctx; }