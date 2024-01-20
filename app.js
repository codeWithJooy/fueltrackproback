const express=require("express")
const cors=require("cors");

const authRoutes=require("./routes/authRoutes")
const setupRoutes=require("./routes/setupRoute")
const pumpRoutes=require("./routes/pumpRoute")
const stockRoutes=require("./routes/stockRoute")

const app=express();
app.use(express.json());
app.use(cors());

app.use("/api/auth",authRoutes)
app.use("/api/setup",setupRoutes)
app.use("/api/pump",pumpRoutes)
app.use("/api/stock",stockRoutes)
module.exports = app;
