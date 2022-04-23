const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello Mama mama ! dehel");
});

const users = [
  { id: 1, name: "Sabana", email: "sabana@gmail.com", phone: "0178888888" },
  { id: 2, name: "Shabnoor", email: "Shabnoor@gmail.com", phone: "0178888888" },
  {
    id: 3,
    name: "Suchorita",
    email: "Suchorita@gmail.com",
    phone: "0178888888",
  },
  { id: 4, name: "suchonda", email: "suchonda@gmail.com", phone: "0178888888" },
  { id: 5, name: "srabonti", email: "srabonti@gmail.com", phone: "0178888888" },
  { id: 6, name: "sabila", email: "sabila@gmail.com", phone: "0178888888" },
  { id: 7, name: "sohana", email: "sohana@gmail.com", phone: "0178888888" },
];
/* //display in ui all users
app.get("/users", (req, res) => {
  res.send(users);
}); */

// filter by search query parameter
app.get("/users", (req, res) => {
  if (req.query.name) {
    const search = req.query.name.toLocaleLowerCase();
    const matched = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(matched);
  } else {
    res.send(users);
  }
});

//  Route parameter diea data load korar poddhoti-64-4
app.get("/user/:id", (req, res) => {
  console.log(req.params);
  const id = req.params.id;
  //   res.send(id);
  const user = users.find((u) => u.id == id);
  res.send(user);
});

// data send to ui
app.post("/path", (req, res) => {
  // console.log("request", req.body);
  const user = req.body;
  user.id = users.length + 1;
  console.log("request", req.body);
  users.push(user);
  res.send(user);
});

app.listen(port, () => {
  console.log("listening to port", port);
});
