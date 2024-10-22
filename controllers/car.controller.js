const mongoose = require("mongoose");
const Car = require("../models/Car");
const { parse } = require("dotenv");
const carController = {};

carController.createCar = async (req, res, next) => {
  try {
    // YOUR CODE HERE
    const { make, model, release_date, transmission_type, size, style, price } =
      req.body;

    if (
      !make ||
      !model ||
      !release_date ||
      !transmission_type ||
      !size ||
      !style ||
      !price
    ) {
      return res.status(400)("Missing fields");
    }

    const newCar = await new Car({
      make: make,
      model: model,
      release_date: release_date,
      transmission_type: transmission_type,
      size: size,
      style: style,
      price: price,
    }).save();

    const response = {
      message: "successfully created a new car",
      car: newCar,
    };

    res.status(200).send(response);
  } catch (err) {
    next(err);
  }
};

carController.getCars = async (req, res, next) => {
  // YOUR CODE HERE
  let { page, ...filterQuery } = req.query;

  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 5;
    const cars = await Car.find();
    const total = await Car.countDocuments({ isDeleted: false });

    const response = {
      message: "Get Car List Successfully!",
      page: page,
      total: total,
      cars: cars,
    };

    res.status(200).send(response);
  } catch (err) {
    // YOUR CODE HERE
    next(err);
  }
};

carController.editCar = async (req, res, next) => {
  try {
    // YOUR CODE HERE
  } catch (err) {
    // YOUR CODE HERE
  }
};

carController.deleteCar = async (req, res, next) => {
  try {
    // YOUR CODE HERE
  } catch (err) {
    // YOUR CODE HERE
  }
};

module.exports = carController;
