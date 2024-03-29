const express=require("express")
const cors=require("cors");

const authRoutes=require("./routes/authRoutes")
const setupRoutes=require("./routes/setupRoute")
const pumpRoutes=require("./routes/pumpRoute")
const stockRoutes=require("./routes/stockRoute")
const ledgerRoutes=require("./routes/ledgerRoutes")
const userRoutes=require("./routes/allUserRoute")

const pumpSalesRoutes=require("./routes/pumpRoutes/salesRoutes")
const pumpPartyRoutes=require("./routes/pumpRoutes/partyRoutes")
const pumpMiscRoutes=require("./routes/pumpRoutes/miscRoutes")
const expenditureRoutes=require("./routes/pumpRoutes/expenditureRoutes")
const purchaseRoutes=require("./routes/pumpRoutes/purchaseRoutes")

const app=express();
app.use(express.json());
app.use(cors());

app.use("/api/auth",authRoutes)
app.use("/api/setup",setupRoutes)
app.use("/api/pump",pumpRoutes)
app.use("/api/stock",stockRoutes)
app.use("/api/ledger",ledgerRoutes)
app.use("/api/allUsers",userRoutes)

app.use("/api/pumps/sales",pumpSalesRoutes)
app.use("/api/pumps/party",pumpPartyRoutes)
app.use("/api/pumps/misc",pumpMiscRoutes)
app.use("/api/pumps/purchase",purchaseRoutes)
app.use("/api/pumps/expenditure",expenditureRoutes)


module.exports = app;
