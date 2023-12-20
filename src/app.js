import express from "express";

const app = express();

app.get("/livenessprobe", (req, res) => {
  res.status(200).json({
    app: "express seed",
  });
});

app.listen(8443, () => {
  console.log(`api running on http://localhost:8443`);
});
