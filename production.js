const express = require('express');
const path = require('path');
const app = express();

app.use('/static', express.static(path.join(__dirname, './dist')));
const ClientStatsPath = path.join(__dirname, './dist/stats.json');
const ServerRendererPath = path.join(__dirname, './dist/server.js');
const ServerRenderer = require(ServerRendererPath).default;
const Stats = require(ClientStatsPath);

app.use(ServerRenderer(Stats));

app.listen(3000);