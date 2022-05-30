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

describe("POST /auth/register", () => {
  describe("register user", () => {
    const data = {
      username: "user3",
      email: "user3@mail.com",
      password: "1234566",
      role: "user:sale",
    };
    test("register user", async () => {
      const respon = await request(app).post("/auth/register").send(data);
      console.log(respon.text);
      expect(respon.status).toBe(200);
    });
  });
});

describe("POST /auth/admin_login", () => {
  describe("admin login", () => {
    const data = {
      username: "user2",
      password: "1234566",
    };
    test("admin login", async () => {
      const respon = await request(app).post("/auth/admin_login").send(data);
      expect(respon.status).toBe(200);
    });
  });
});
