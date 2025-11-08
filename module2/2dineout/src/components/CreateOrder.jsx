import { useState } from "react";
import chicken from "../assets/chicken.svg";
import burger from "../assets/food-svgrepo-com.svg";
import hamburger from "../assets/hamburger.svg";
import pizza from "../assets/pizza.svg";
import submarine from "../assets/submarine.svg";
import { MinusIcon, PlusIcon } from "../svgs/Svgs";

export default function CreateOrder({ getOrder }) {
  function Item({ item, onSelect }) {
    return (
      <>
        <div className="bg-gray-700 bg-opacity-30 rounded-md p-3 mb-3 flex justify-between items-center hover:bg-opacity-40 transition-all duration-300">
          <div className="flex items-center">
            <div className="w-12 h-12   flex items-center justify-center mr-3">
              <img src={item.img} alt={item.imgText} className="w-10 h-10" />
            </div>
            <div>
              <h3 className="font-medium">{item.imgText}</h3>
              <p className="text-xs text-gray-400">BDT {item.price}</p>
            </div>
          </div>
          <button
            className="w-8 h-8 bg-gray-800 hover:bg-primary rounded-full flex items-center justify-center transition-colors duration-300"
            type="submit"
            onClick={() => onSelect(item.id)}
          >
            {item.isSelected ? <MinusIcon /> : <PlusIcon />}
          </button>
        </div>
      </>
    );
  }

  const initialItems = [
    {
      id: 1,
      img: hamburger,
      imgText: "Hamburger",
      price: 100,
      isSelected: false,
    },
    {
      id: 2,
      img: chicken,
      imgText: "Chicken Nuggets",
      price: 200,
      isSelected: false,
    },
    {
      id: 3,
      img: submarine,
      imgText: "Submarine Sandwich",
      price: 300,
      isSelected: false,
    },

    {
      id: 4,
      img: pizza,
      imgText: "Pizza slices",
      price: 150,
      isSelected: false,
    },
    {
      id: 5,
      img: burger,
      imgText: "Black Burger",
      price: 85,
      isSelected: false,
    },
  ];

  const [items, setItems] = useState(initialItems);

  const initialOrder = {
    name: "",
    items: 0,
    amount: 0,
  };

  const [order, setOrder] = useState(initialOrder);

  function handleOrder(id) {
    let newItems = items.map((item) => {
      if (item.id == id) {
        if (item.isSelected == false) {
          setOrder({
            ...order,
            items: order.items + 1,
            amount: order.amount + item.price,
          });
        } else {
          setOrder({
            ...order,
            items: order.items - 1,
            amount: order.amount - item.price,
          });
        }

        item.isSelected = !item.isSelected;
      }
      return item;
    });
    setItems(newItems);
  }

  function handleChange(e) {
    setOrder({ ...order, [e.target.name]: e.target.value });
  }

  function placeOder() {
    getOrder(order);
    setOrder(initialOrder);
    setItems(initialItems);
  }

  return (
    <>
      <div className="bg-cardbg rounded-lg p-6 h-[calc(100vh_-_130px)]">
        <h2 className="text-xl font-bold mb-1">CREATE ORDER</h2>
        <p className="text-gray-400 text-sm mb-4">
          Accurately fulfill customer orders based on a precise understanding of
          their requirements.
        </p>

        {/* <!-- Customer Name Input --> */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">
            Customer Name
          </label>
          <input
            type="text"
            className="w-full bg-gray-700 bg-opacity-50 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary transition-all duration-300"
            value={order.name}
            name="name"
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Choose Items</label>
          <div className="items-container">
            {/* <!-- Items --> */}

            {items.map((it) => (
              <Item key={it.id} item={it} onSelect={handleOrder} />
            ))}
          </div>
        </div>

        {/* <!-- Place Order Button --> */}
        <button
          className="w-full bg-primary hover:bg-opacity-90 text-white font-medium py-3 rounded-full transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
          onClick={placeOder}
        >
          Place Order (BDT {order.amount})
        </button>
      </div>
    </>
  );
}
