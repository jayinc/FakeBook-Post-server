import express, { response } from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

var posts = [
  { text: "some post 0" },
  { text: "some post 1" },
  { text: "some post2" },
];

app.get("/", (_req, res) => {
  res.send("Hola 🤠 I'm your ExpressJS server!");
});

app.get("/post/:id", (req, res) => {
  const id = Number(req.params.id);
  console.log(posts[id]);
  res.send(posts[id]);
  console.log(posts);
});

app.get("/posts", (_req, res) => {
  res.send(posts);
});

app.post("/post", (req, res) => {
  posts.push(req.body);

  res.send(`your post is saved 🥳 now we have ${posts.length} posts`);
});

app.put("/post", (_req, res) => {
  res.send("I am Express.js server");
});

app.delete("/post", (_req, res) => {
  res.send("I am Express.js server");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Hello server is listening at http://localhost:${PORT}`);
});

// https://devcenter.heroku.com/articles/getting-started-with-nodejs
