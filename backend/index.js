require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");
const { OrdersModel } = require("./model/OrdersModel");

const app = express();
const PORT = process.env.PORT || 8000;
const MONGO_URL = process.env.MONGO_URL;

/* ---------- MIDDLEWARE ---------- */
app.use(
  cors({
    origin: ["http://localhost:3000", "http://localhost:3001"],
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());


/* ---------- TEST ROUTE ---------- */
app.get("/", (req, res) => {
  res.send("Backend is running");
});

/* ---------- AUTH ROUTES ---------- */
app.use("/api/auth", require("./routes/authRoutes"));

/* ---------- TRADING ROUTES ---------- */

app.post("/newOrder", async (req, res) => {
  try {
    const { name, qty, price, mode } = req.body;

    const newOrder = new OrdersModel({ name, qty, price, mode });
    await newOrder.save();

    if (mode === "BUY") {
      let holding = await HoldingsModel.findOne({ name });

      if (holding) {
        const totalQty = holding.qty + Number(qty);
        const newAvg =
          (holding.avg * holding.qty + Number(price) * Number(qty)) / totalQty;

        holding.qty = totalQty;
        holding.avg = newAvg;
        holding.price = price;

        await holding.save();
      } else {
        const newHolding = new HoldingsModel({
          name,
          qty,
          avg: price,
          price,
          net: "0.00%",
          day: "0.00%",
          isLoss: false,
        });

        await newHolding.save();
      }
    }

    res.json({ success: true, message: "Order placed successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get("/allorders", async (req, res) => {
  const orders = await OrdersModel.find({});
  res.json(orders);
});

app.get("/allholdings", async (req, res) => {
  const holdings = await HoldingsModel.find({});
  res.json(holdings);
});

app.get("/allpositions", async (req, res) => {
  const positions = await PositionsModel.find({});
  res.json(positions);
});

/* ---------- DB + SERVER START ---------- */

mongoose
  .connect(MONGO_URL)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err);
  });
