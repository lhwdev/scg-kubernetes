import server from "http-server";

server.createServer({
  root: "/usr/share/http-public",
}).listen(80);
