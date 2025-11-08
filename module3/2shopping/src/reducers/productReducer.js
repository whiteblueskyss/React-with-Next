const initialProducts = [
  {
    id: 1,
    cover: "image 1.png",
    title: "Gradient Graphic T-shirt",
    rating: 5,
    left: 6,
    onCart: 0,
    price: 195,
    date: "2023-12-15T08:23:00.000Z",
  },
  {
    id: 2,
    cover: "image 7-1.png",
    title: "Checkered Shirt",
    rating: 5,
    left: 2,
    onCart: 0,
    price: 200,
    date: "2024-02-10T14:45:00.000Z",
  },
  {
    id: 3,
    cover: "image 7.png",
    title: "Vertical Striped Shirt",
    rating: 2,
    left: 40,
    onCart: 0,
    price: 350,
    date: "2024-01-05T19:30:00.000Z",
  },
  {
    id: 4,
    cover: "image 8-1.png",
    title: "Courage Graphic T-shirt",
    rating: 1,
    left: 8,
    onCart: 0,
    price: 180,
    date: "2023-11-22T11:10:00.000Z",
  },
  {
    id: 5,
    cover: "image 8-2.png",
    title: "Polo with Tipping Details",
    rating: 3,
    left: 0,
    onCart: 0,
    price: 80,
    date: "2024-03-18T09:55:00.000Z",
  },
  {
    id: 6,
    cover: "image 8.png",
    title: "Black Striped T-shirt",
    rating: 4,
    left: 100,
    onCart: 0,
    price: 500,
    date: "2023-10-30T17:40:00.000Z",
  },
  {
    id: 7,
    cover: "image 9-1.png",
    title: "Skinny Fit Jeans",
    rating: 5,
    left: 0,
    onCart: 0,
    price: 320,
    date: "2024-04-12T13:20:00.000Z",
    added: false,
  },
  {
    id: 8,
    cover: "image 9-2.png",
    title: "Checkered Shirt",
    rating: 2,
    left: 140,
    onCart: 0,
    price: 170,
    date: "2024-05-01T21:05:00.000Z",
    added: false,
  },
  {
    id: 9,
    cover: "image 9.png",
    title: "Sleeve Striped T-shirt",
    rating: 2,
    left: 109,
    onCart: 0,
    price: 299,
    date: "2023-09-17T06:15:00.000Z",
  },
  {
    id: 10,
    cover: "image 10-1.png",
    title: "Sleeve Striped T-shirt",
    rating: 1,
    left: 109,
    onCart: 0,
    price: 299,
    date: "2024-06-08T16:00:00.000Z",
  },
];

const productReducer = (state, action) => {
  // console.log(action.type);
  switch (action.type) {
    case "INCREMENT_ITEM":
      return state.map((product) =>
        product.id === action.payload.id && product.left > 0
          ? { ...product, left: product.left - 1, onCart: product.onCart + 1 }
          : product
      );

    case "DECREMENT_ITEM":
      return state.map((product) =>
        product.id === action.payload.id
          ? { ...product, left: product.left + 1, onCart: product.onCart - 1 }
          : product
      );

    case "REMOVE_FROM_CART":
      return state.map((product) =>
        product.id === action.payload.id
          ? { ...product, left: product.left + product.onCart, onCart: 0 }
          : product
      );

    default:
      return state;
  }
};

export { initialProducts, productReducer };
