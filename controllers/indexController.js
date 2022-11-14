const express = require("express");
const fetch = require("node-fetch");

let getData = async (req, res) => {
  const API = "http://api.weatherapi.com/v1/current.json?key=a2c4ce37a28b431bb1292413221411&q=" + req.body.location;
  const response = await fetch(API);
  const data = await response.json();
  return res.status(200).json({data: data});

};

let data = (req, res) => {
  console.log(req.params.location);
  res.render("index");
};

module.exports = { data, getData };
