const express = require("express");
const fetch = require("node-fetch");

let getData = async (req, res) => {
  const API = "http://api.weatherapi.com/v1/current.json?key=fd85542d4d33427895e174003221611&q=" + req.body.location;
  const response = await fetch(API);
  const data = await response.json();
  return res.status(200).json({ data: data });
};

let data = (req, res) => {
  res.render("index", { title: "Weather" });
};

module.exports = { data, getData };
