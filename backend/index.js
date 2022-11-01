const express = require("express");
const { v4: uuidv4 } = require("uuid");

const cors = require("cors");

const app = express();
app.use(
  cors({
    origin: "*",
  }),
  express.json()
);

const port = 4000;

const database = {
  patients: {},
  prescriptions: {},
};

app.get("/", (req, res) => {
  res.json({
    message: "hello world!",
  });
});

app.get("/patients", (req, res) => {
  res.json(Object.values(database.patients));
});

app.get("/prescriptions", (req, res) => {
  res.json(Object.values(database.prescriptions));
});

app.get("/patients/:id", (req, res) => {
  const value = database.patients[req.params.id];
  if (value) {
    res.json(value);
  }
  res.sendStatus(404);
});

app.patch("/prescriptions/:id", (req, res) => {
  const prescriptions = database.prescriptions[req.body.id];
  database.prescriptions[req.body.id] = {
    ...prescriptions,
    progress: req.body.progress,
  };
  res.json(database.prescriptions[req.body.id]);
});

app.post("/patients", (req, res) => {
  const {
    firstName,
    lastName,
    dob,
    medicine,
    strength,
    frequency,
    route,
    progress,
  } = req.body || {};
  if (!firstName || !lastName) {
    res.status(400).send("Error: Missing required fields");
  }
  const id = uuidv4();

  database.patients[id] = {
    id,
    firstName,
    lastName,
    dob,
    progress,
  };

  database.prescriptions[id] = {
    id,
    medicine,
    strength,
    frequency,
    route,
    progress,
  };
  res.json(database.patients[id]);
});

app.listen(port, () => {
  console.log(`🚀 Server @ Port: ${port}`);
});
