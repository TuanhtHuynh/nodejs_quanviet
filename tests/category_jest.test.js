const request = require("supertest");
const createServer = require("../createServer");
const app = createServer();
const connectDB = require("../server/database/connection");
const mongoose = require("mongoose");

beforeEach((done) => {
  mongoose
    .connect("mongodb://localhost/maruviet", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoIndex: true,
    })
    .then(() => done());
});

afterEach((done) => {
  mongoose.connection.close().then(() => done());
});

jest.setTimeout(30000);

describe("categories", () => {
  test("new category", async () => {
    const data = {
      name: "Bánh tráng m",
    };
    const respon = await request(app).post("/categories/new").send(data);
    expect(respon.status).toBe(200);
  });

  test("update category", async () => {
    const data = {
      name: "Banh tráng",
      id: 16,
    };
    const respon = await request(app).put("/categories").send(data);
    expect(respon.status).toBe(200);
  });
});
