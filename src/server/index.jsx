'use strict';

import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import program from 'commander';
import React from 'react';
import { renderToString } from 'react-dom/server'
import { RoutingContext, match } from 'react-router';
import createLocation from 'history/lib/createLocation';
import routes from '../shared/routes.jsx';


// Initialize express app
let app = express();

/* --------- BEGIN Middlewares --------- */
// Logging
app.use(morgan('dev'));

// Cross Origin Resource Sharing
app.use(cors());

// Configure static directory
const staticDir = path.join(__dirname, '..', '..', 'build');
app.use(express.static(staticDir));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(function(req, res, next) {
  if (req.path.substr(-1) !== '/' && req.path.length > 1) {
    const query = req.url.slice(req.path.length);
    res.redirect(301, req.path + '/' + query);
  } else {
    next();
  }
});

app.use((req, res) => {
  const location = createLocation(req.url);
  match({ routes, location }, (err, redirectLocation, renderProps) => {
    if (err) {
      console.error(err);
      return res.status(500).end('Internal server error');
    }
    if (!renderProps) return res.status(404).end('Not found.');

    const InitialComponent = (
      <RoutingContext {...renderProps} />
    );
    const componentHTML = renderToString(InitialComponent);
    const HTML = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <title>Valengram 2016</title>
      </head>
      <body>
        <div id="react">${componentHTML}</div>
        <script type="application/javascript" src="bundle.js"></script>
      </body>
    </html>
    `
    res.end(HTML);
  });
});

export default app;
