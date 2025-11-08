import { useState } from "react";
import CreateOrder from "./components/CreateOrder.jsx";
import Navbar from "./components/Navbar.jsx";
import OrderReports from "./components/OrderReports.jsx";
import OrderSummary from "./components/OrderSummary.jsx";

function All() {
  const [orders, setOrders] = useState([]);
  const [nextId, setNextId] = useState(1);

  function takeOrder(order) {
    const newOrder = { ...order, id: nextId, isDelivered: false };
    setOrders([newOrder, ...orders]);
    setNextId(nextId + 1);
  }

  function handleDeliver(id) {
    let newOrders = orders.map((order) => {
      if (order.id === id) {
        order.isDelivered = true;
      }
      return order;
    });
    setOrders(newOrders);
  }

  function handleDelete(id) {
    let afterDelete = orders.filter((order) => order.id !== id);
    setOrders(afterDelete);
  }

  return (
    <>
      <div className="container mx-auto px-4 h-screen flex flex-col">
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 flex-grow">
          <CreateOrder getOrder={takeOrder} />
          <div className="md:col-span-2 h-[calc(100vh_-_130px)]">
            <OrderSummary orders={orders} />
            <OrderReports
              orders={orders}
              onDeliver={handleDeliver}
              onDelete={handleDelete}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default All;
