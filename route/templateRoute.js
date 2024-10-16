const templateRoute = require("express").Router();
const {
  homeController,
  createController,
  updateController,
} = require("../controller/templateController");

templateRoute.get("/", homeController);
templateRoute.get("/create", createController);
templateRoute.get("/edit", updateController);

module.exports = templateRoute;
