const express = require("express"),
  app = express();

app.get("/", (req, res) => {
  res.json(parse(req));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Serving on ${PORT}`);
});

const parse = req => {
  const header = req.headers;
  const language = header["accept-language"].split(",")[0];
  const ip = header["x-forwarded-for"] || req.connection.remoteAddress;
  const userAgent = header["user-agent"].split(/[\(\)]/)[1];

  return { language, ip, userAgent };
};
