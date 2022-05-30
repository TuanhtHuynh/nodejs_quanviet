const homeRoutes = require("./server/routes/homeRoutes");
const categoryRouter = require("./server/routes/categoryRoutes");
const productRouter = require("./server/routes/productRoute");
const authRoute = require("./server/routes/authRoutes");
const adminRoute = require("./server/routes/adminRoutes");
const fileRoute = require("./server/routes/fileRoutes");
const menuRoute = require("./server/routes/menuRoutes");

const routes = (app) => {
  app.use("", homeRoutes);
  app.use("/menus", menuRoute);

  app.use("/products", productRouter);
  app.use("/categories", categoryRouter);
  app.use("/auth", authRoute);
  app.use("/upload", fileRoute);

  app.use("/admin", adminRoute);
  return app;
};
module.exports = routes;
