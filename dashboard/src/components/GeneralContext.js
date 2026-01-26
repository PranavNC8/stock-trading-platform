import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = createContext();

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  const [holdings, setHoldings] = useState([]);
  const [orders, setOrders] = useState([]);


  // Fetch holdings from backend
  const fetchHoldings = async () => {
    try {
      const res = await axios.get("http://localhost:8000/allholdings");
      setHoldings(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const fetchOrders = async () => {
    try {
      const res = await axios.get("http://localhost:8000/allorders");
      setOrders(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  // Load holdings on app start
  useEffect(() => {
    fetchHoldings();
    fetchOrders();
  }, []);

  const openBuyWindow = (uid) => {
    setIsBuyWindowOpen(true);
    setSelectedStockUID(uid);
  };

  const closeBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStockUID("");
  };

  return (
    <GeneralContext.Provider
      value={{
        openBuyWindow,
        closeBuyWindow,
        holdings,
        fetchHoldings, // 👈 Important
        orders,        // 👈 add
        fetchOrders,
      }}
    >
      {props.children}

      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
