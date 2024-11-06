import express from "express";
import cors from "cors";
const app = express();

// Middleware
app.use(cors());

const PORT = 5050;

const todos = [
  { id: 1, name: "Schrank aufbauen", userId: 1 },
  { id: 2, name: "Sofa verrücken", userId: 1 },
  { id: 3, name: "Küche putzen", userId: 1 },
  { id: 3, name: "Fenster putzen", userId: 1 },
];

app.get("/", function (req, res) {
  res.send("I have to fix my apartment");
});

app.get("/todos/all", (req, res) => {
  res.json(todos);
});

app.get("/todos/byid", (req, res) => {
  // const query = req.query --> {"todoId": 1}
  const todoId = req.query.todoId;
  console.log("MY TODOID", typeof todoId);
  if (!todoId) res.send("No Todo Id provided");
  const todoIdNr = parseInt(todoId);
  const todo = todos.find((item) => item.id === todoIdNr);
  res.json(todo);
});

app.listen(PORT, () => {
  console.log(`Express App is running on http://localhost:${PORT}`);
});