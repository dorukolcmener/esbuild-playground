import express from "express";

const app = express();

app.use(express.static("bundle"));
app.listen(3000);
