import express from "express";
import mongoose from "mongoose";
import Data from "./data.js";
import Videos from "./dbModel.js";
import Cors from "cors";
//app config
const app = express();
const port = 9000;
//middlewares
app.use(express.json());
app.use(Cors());
//db config
const connection_url =
  "mongodb+srv://admin:N7mT0zO3hRU9aMjz@cluster0.npsjpsi.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(connection_url)
  .then(() => {
    console.log("c succesful");
  })
  .catch((err) => console.log("no con"));
// api endpoints
app.get("/", (req, res) => res.status(200).send("hello world"));
app.get("/v1/posts", (req, res) => res.status(200).send(Data));
app.get("/v2/posts", (req, res) => {
  const dbVideos = req.body;
  Videos.find((err, data) => {
    if (err) {
      res.status(500).send(err);
      console.log(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/v2/posts", (req, res) => {
  const dbVideos = req.body;
  Videos.create(dbVideos, (err, data) => {
    if (err) {
      res.status(500).send(err);
      console.log(err);
    } else {
      res.status(201).send(data);
    }
  });
});
// api listener
app.listen(port, () => console.log(`listening on localhost:${port}`));
