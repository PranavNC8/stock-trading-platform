import React, { useState, useContext } from "react";
import GeneralContext from "./GeneralContext";
import api from "../utils/api";

function BuyActionWindow({ uid }) {
  const { closeBuyWindow, fetchHoldings, fetchOrders } =
    useContext(GeneralContext);

  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState("");
  const [mode, setMode] = useState("BUY");

  const handleSubmit = async () => {
    try {
      await api.post("/newOrder", {
        name: uid,
        qty,
        price,
        mode,
      });

      await fetchHoldings();
      await fetchOrders();

      closeBuyWindow();
    } catch (err) {
      console.error("Order error:", err);
    }
  };

  return (
    <div className="buy-window">
      <h4>{uid}</h4>

      <input
        type="number"
        value={qty}
        onChange={(e) => setQty(e.target.value)}
        placeholder="Quantity"
      />

      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Price"
      />

      <button onClick={handleSubmit}>Place Order</button>
      <button onClick={closeBuyWindow}>Cancel</button>
    </div>
  );
}

export default BuyActionWindow;
