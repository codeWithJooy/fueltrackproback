const express = require('express');
const app=require("./app")
const mongoose=require("mongoose")
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 5000;

const uri = process.env.ATLAS_URI;
mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connection to DB Open");
    app.listen(PORT, (s) => {
      console.log(`Server Running on port ${PORT}`);
    });
  })
  .catch((err) => console.log(err));
