import { useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductList() {
  const [filterKey, setFilterKey] = useState("Most Popular");

  return (
    <>
      <div className="lg:col-span-2">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold">Your Products</h2>
          <div className="flex items-center space-x-2">
            <span className="text-sm">Sort by:</span>
            <select
              className="border rounded-md px-2 py-1 text-sm"
              value={filterKey}
              onChange={() => setFilterKey(event.target.value)}
            >
              <option>Most Popular</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="product-grid">
          <ProductCard filterKey={filterKey} />
        </div>
      </div>
    </>
  );
}
