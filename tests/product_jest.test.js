const request = require("supertest");
const createServer = require("../createServer");
const connectDB = require("../server/database/connection");
const app = createServer();

beforeEach((done) => {
  connectDB.connect();
  done();
});

afterEach((done) => {
  connectDB.close();
  done();
});

jest.setTimeout(30000);

describe("products", () => {
  test("get products", async () => {
    const respon = await request(app).get("/");
    expect(respon.status).toBe(200);
  });
  test("new product", async () => {
    const data = {
      product_name: "Cơm sườn 4",
      price: 12000,
      category: 135,
    };
    const respon = await request(app).post("/products/new").send(data);
    expect(respon.status).toBe(200);
  });
});
