const express = require("express");
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const listing = Schema({
  title: {
    type: String,
    require: true,
  },

  description: String,
  image: {
    type: String,
    default:
      "https://img.freepik.com/premium-vector/new-product-banner-template-design_579179-1372.jpg",
    set: (v) =>
      v === ""
        ? "https://img.freepik.com/premium-vector/new-product-banner-template-design_579179-1372.jpg"
        : v,
  },

  price: Number,
});

const Listing = mongoose.model("Listing", listing);
module.exports = Listing;
