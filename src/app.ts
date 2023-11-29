import "dotenv/config";
import express from "express"
import cors from "cors"
import { router } from "express-file-routing"
import path from "path";

const app = express();
app.use(cors({
  origin: 'http://localhost:5173'
}));
app.use(express.json());

(async function main () {
  app.use("/api", await router({
    directory: path.join(__dirname, "routes"),
  }))
  app.use(express.static(path.join(__dirname, 'public')));
  app.use("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
  });
})();

app.listen(3000)