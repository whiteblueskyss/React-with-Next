import { useContext, useState } from "react";
import { MovieContext } from "../context/index.js";
import { getImgUrl } from "../utils/cine-utility.js";
import MovieDetailsModal from "./MovieDetailsModal.jsx";
import Rating from "./Rating.jsx";

export default function MovieCard({ movie }) {
  const [showModal, setShowModal] = useState(false);
  const { state, dispatch } = useContext(MovieContext);

  function addDataToCart(movie) {
    const found = state.cartData.find((item) => item.id === movie.id);

    if (!found) {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          ...movie,
        },
      });
    }
  }

  return (
    <>
      {showModal && (
        <MovieDetailsModal
          movie={movie}
          onClose={() => setShowModal(false)}
          addMovie={(movie) => addDataToCart(movie)}
        />
      )}

      <figure
        key={movie.id}
        className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl"
      >
        <a href="#" onClick={() => setShowModal(true)}>
          <img
            className="w-full object-cover"
            src={getImgUrl(movie.cover)}
            alt=""
          />
        </a>
        <figcaption className="pt-4">
          <h3 className="text-xl mb-1">{movie.title}</h3>
          <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>
          <Rating value={movie.rating} />
          <a
            className="bg-primary rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#171923] font-semibold text-sm"
            href="#"
            onClick={() => addDataToCart(movie)}
          >
            <img src="./assets/tag.svg" alt="" />
            <span>${movie.price} | Add to Cart</span>
          </a>
        </figcaption>
      </figure>
    </>
  );
}
