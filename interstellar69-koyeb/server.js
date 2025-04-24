const express = require("express");
const basicAuth = require("express-basic-auth");
const { createServer } = require("http");
const { default: uv } = require("@titaniumnetwork-dev/ultraviolet");

const app = express();
const port = process.env.PORT || 8080;

// Password-protect entire app
app.use(basicAuth({
  users: { "user": "6969" },
  challenge: true,
  realm: "Interstellar 69"
}));

// Set up Ultraviolet proxy
uv(app, {
  prefix: '/service/',
  bare: 'https://ultraviolet-titaniumnetwork-dev.bareproxy.repl.co',
  encodeUrl: true,
  injectScript: true
});

// Homepage
app.get("/", (req, res) => {
  res.send("<h1>🔒 Interstellar 69 Proxy</h1><p>Use <code>/service/https://example.com</code> to browse.</p>");
});

createServer(app).listen(port, () => {
  console.log("Interstellar 69 proxy running on port " + port);
});