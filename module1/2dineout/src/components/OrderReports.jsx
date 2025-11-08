import { useState } from "react";
import { FunnelIcon } from "../svgs/Svgs";

function ReportItem({ item, onHandleDeliver, onHandleDelete }) {
  return (
    <>
      <tr className="border-t border-gray-700">
        <td className="py-3">{item.id}</td>
        <td className="py-3">{item.name}</td>
        <td className="py-3">{item.items}</td>
        <td className="py-3">{item.amount}</td>
        <td className="py-3">
          <span className="text-red-500">{!item.isDelivered && "PENDING"}</span>
          <span className="text-green-500">
            {item.isDelivered && "DELIVERED"}
          </span>
        </td>
        <td className="py-3">
          <button
            className="bg-gray-800 hover:bg-red-600 text-xs px-3 py-1 rounded-full mr-1 transition-colors duration-300"
            onClick={() => onHandleDelete(item.id)}
          >
            DELETE
          </button>

          {!item.isDelivered && (
            <button
              className="bg-gray-800 hover:bg-green-600 text-xs px-3 py-1 rounded-full transition-colors duration-300"
              onClick={() => onHandleDeliver(item.id)}
            >
              DELIVERED
            </button>
          )}
        </td>
      </tr>
    </>
  );
}

export default function OrderReports({ orders, onDeliver, onDelete }) {
  const [filter, setFilter] = useState("All");

  const filteredOrders = orders.filter((order) => {
    if (filter === "All") return true;
    if (filter === "Pending") return !order.isDelivered;
    if (filter === "Delivered") return order.isDelivered;
    return true;
  });

  function onFilter(e) {
    setFilter(e.target.value);
  }

  return (
    <>
      <div>
        <div className="flex justify-between">
          <h2 className="text-xl font-bold mb-4">Order Reports</h2>

          <div className="flex gap-4 items-center">
            <FunnelIcon />
            <select
              className="appearance-none bg-zinc-900 accent-orange-600 border-none outline-none rounded-sm"
              onChange={onFilter}
            >
              <option>All</option>
              <option>Pending</option>
              <option>Delivered</option>
            </select>
          </div>
        </div>
        <div className="bg-cardbg rounded-lg p-4">
          <div className="reports-container">
            <table className="min-w-full">
              <thead>
                <tr className="text-left text-sm">
                  <th className="pb-3 font-medium">ID</th>
                  <th className="pb-3 font-medium">Customer Name</th>
                  <th className="pb-3 font-medium">Items</th>
                  <th className="pb-3 font-medium">Amount</th>
                  <th className="pb-3 font-medium">Status</th>
                  <th className="pb-3 font-medium">Action</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {/* <!-- Row 1 --> */}

                {filteredOrders.map((it) => (
                  <ReportItem
                    key={it.id}
                    item={it}
                    onHandleDeliver={(id) => onDeliver(id)}
                    onHandleDelete={(id) => onDelete(id)}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
