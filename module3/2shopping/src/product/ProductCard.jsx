import { useContext } from "react";
import { ProductContext, SearchContext } from "../context/index.js";
import { getImgUrl } from "../utility/utility.js";
import Rating from "./Rating.jsx";

export default function ProductCard({ filterKey }) {
  const { products, productDispatch } = useContext(ProductContext);
  const { searchKey } = useContext(SearchContext);

  function increment(item) {
    productDispatch({ type: "INCREMENT_ITEM", payload: item });
  }

  function removeFromCart(item) {
    productDispatch({ type: "REMOVE_FROM_CART", payload: item });
  }

  let filterProducts = products;

  if (filterKey == "Price: Low to High") {
    filterProducts = products.sort((a, b) => a.price - b.price);
  } else if (filterKey == "Price: High to Low") {
    filterProducts = products.sort((a, b) => b.price - a.price);
  } else if (filterKey == "Newest") {
    filterProducts = products.sort(
      (a, b) => new Date(b.date) - new Date(a.date)
    );
  } else if (filterKey == "Most Popular") {
    filterProducts = products.sort((a, b) => b.rating - a.rating);
  }

  let searchProducts = filterProducts;

  if (searchKey != null && searchKey.length > 0) {
    searchProducts = filterProducts.filter((product) =>
      product.title.toLowerCase().includes(searchKey.toLowerCase())
    );
  }

  return (
    <>
      {searchProducts.map((item) => (
        <div
          key={item.id}
          className="bg-gray-100 rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300"
        >
          <div className="h-48 bg-gray-200 flex items-center justify-center">
            <img
              src={getImgUrl(item.cover)}
              alt={item.title}
              className="h-full w-auto object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="font-medium">{item.title}</h3>
            <div className="flex items-center justify-between">
              <Rating value={item.rating} />
              <span className="text-xs text-gray-700">
                ({item.left} pcs left)
              </span>
            </div>
            <p className="font-bold">${item.price} </p>

            {item.left > 0 && item.onCart == 0 && (
              <button
                className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900"
                onClick={() => increment(item)}
              >
                Add to Cart
              </button>
            )}

            {item.onCart != 0 && (
              <button
                className="w-full mt-2 bg-red-800 py-1 text-gray-100 rounded flex items-center justify-center"
                onClick={() => removeFromCart(item)}
              >
                Remove from Cart
              </button>
            )}

            {item.onCart == 0 && item.left == 0 && (
              <button
                disabled
                className="disabled:bg-gray-700 disabled:text-gray-400 disabled:cursor-not-allowed w-full mt-2 bg-gray-800 py-1 text-gray-100 rounded flex items-center justify-center active:translate-y-1 transition-all active:bg-gray-900"
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      ))}

      {searchProducts.length == 0 && (
        <p className="flex justify-center items-center h-32 text-gray-500">
          Search dosn't match with any product title.
        </p>
      )}
    </>
  );
}
