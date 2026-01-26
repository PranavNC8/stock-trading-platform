import React, { useContext } from "react";
import GeneralContext from "./GeneralContext";

import "./Orders.css"; // 👈 add this

const Orders = () => {
  const { orders } = useContext(GeneralContext);

  return (
    <div className="orders-container">
      <h3 className="orders-title">
        Orders <span>({orders.length})</span>
      </h3>

      <div className="orders-table-wrapper">
        <table className="orders-table">
          <thead>
            <tr>
              <th>Stock</th>
              <th>Qty</th>
              <th>Price (₹)</th>
              <th>Type</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <td className="stock-name">{order.name}</td>

                <td>{order.qty}</td>

                <td>₹ {order.price}</td>

                <td>
                  <span
                    className={
                      order.mode === "BUY"
                        ? "order-type buy"
                        : "order-type sell"
                    }
                  >
                    {order.mode}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {orders.length === 0 && (
          <p className="no-orders">No orders placed yet.</p>
        )}
      </div>
    </div>
  );
};

export default Orders;
