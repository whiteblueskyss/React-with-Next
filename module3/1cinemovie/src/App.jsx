import { useReducer } from "react";
import "./App.css";
import Footer from "./assets/Footer";
import MovieList from "./cine/MovieList";
import { MovieContext } from "./context/index.js";
import Header from "./Header";
import { cartReducer, initialState } from "./reducers/cartReducer";
import Sidebar from "./Sidebar";

function App() {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <>
      <MovieContext.Provider value={{ state, dispatch }}>
        <Header />
        <main>
          <div className="container grid lg:grid-cols-[218px_1fr] gap-[3.5rem]">
            <Sidebar />
            <MovieList />
          </div>
        </main>
        <Footer />
      </MovieContext.Provider>
    </>
  );
}

export default App;
