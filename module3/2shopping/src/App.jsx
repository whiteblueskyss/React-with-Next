import { useReducer, useState } from "react";
import "./App.css";
import CartItems from "./cart/CartItems";
import { ProductContext, SearchContext } from "./context/index.js";
import Header from "./header/Header";
import Footer from "./others/Footer";
import SignupOffer from "./others/SignuOffer";
import Subscribe from "./others/Subscribe";
import ProductList from "./product/ProductList";
import { initialProducts, productReducer } from "./reducers/productReducer";

function App() {
  const [products, productDispatch] = useReducer(
    productReducer,
    initialProducts
  );

  const [searchKey, setSearchKey] = useState(null);

  return (
    <>
      <SignupOffer />
      <ProductContext.Provider value={{ products, productDispatch }}>
        <SearchContext.Provider value={{ searchKey, setSearchKey }}>
          <Header />
          <main className="container mx-auto px-4 md:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <ProductList />
              <CartItems />
            </div>
          </main>
        </SearchContext.Provider>
      </ProductContext.Provider>
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
