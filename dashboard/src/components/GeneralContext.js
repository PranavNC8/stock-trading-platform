import React, { useState, useEffect, createContext } from "react";
import api from "../utils/api";
import BuyActionWindow from "./BuyActionWindow";

const GeneralContext = createContext();

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStockUID, setSelectedStockUID] = useState("");

  const [holdings, setHoldings] = useState([]);
  const [orders, setOrders] = useState([]);

  const fetchHoldings = async () => {
    try {
      const res = await api.get("/allholdings");
      setHoldings(res.data);
    } catch (err) {
      console.error("Holdings fetch error:", err);
    }
  };

  const fetchOrders = async () => {
    try {
      const res = await api.get("/allorders");
      setOrders(res.data);
    } catch (err) {
      console.error("Orders fetch error:", err);
    }
  };

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
        orders,
        fetchHoldings,
        fetchOrders,
      }}
    >
      {props.children}
      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
    </GeneralContext.Provider>
  );
};

export default GeneralContext;
