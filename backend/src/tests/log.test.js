import request from "supertest";

it("Get logs for specific user", async () => {
  const name = "Test User";
  const response = await request("http://localhost:8080").get(`/log/${name}`);
  expect(response.status).toBe(200);
});

it("Should save user log to database", async () => {
  const userLog = {
    name: "Test User",
    email: "test.user@email.com",
    log: "I 6 Nothing to report\nW 7 Out for lunch\nE 42 21 ERROR: Something has gone horribly wrong\nI 52 Something went wrong while I was out for lunch",
  };

  const response = await request("http://localhost:8080")
    .post("/log")
    .set({
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
    })
    .send(userLog);

  expect(response.status).toBe(201);
});
