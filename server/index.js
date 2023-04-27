const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(express.json());
app.use(cors());

//Home Api route
app.post("/", async (req, res) => {
  //fetch External API

  const body = req.body;
  let url = "https://chimpu.xyz/api/post.php";
  const response = await fetch(url, {
    method: "post",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" },
  });
  const data = await response.json();
  // console.log(data);
  return res.json({
    ...data,
    phoneorigen: response.headers.get("phoneorigen"),
  });
});

//Create server instance
app.listen(8800, () => {
  console.log("Connected to server....");
});
