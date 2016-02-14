import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import program from 'commander';
import { renderToString } from 'react-dom/server'

import AppComponent from '../../build/generated/app'

function main (opts) {
  // Initialize express app
  let app = express();

  /* --------- BEGIN Middlewares --------- */
  // Add a trailing '/' to the path if there is none
  app.use(function (req, res, next) {
    if (req.path.substr(-1) !== '/' && req.path.length > 1) {
      const query = req.url.slice(req.path.length);
      res.redirect(301, req.path + '/' + query);
    } else {
      next();
    }
  });

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

  // Routes middlewares
  app.use('/', index)

  /* --------- BEGIN Route handlers --------- */
  function index (req, res) {
    // XXX: This is pretty hacky, should cleanup
    const componentHTML = renderToString(AppComponent)
    const HTML = `
    <!Doctype html>
      <html>
        <head>
          <title>Valengram 2016</title>
          <link rel="stylesheet" type="text/css" href="style.css">
        </head>
        <body>
          <div id='react'>${componentHTML}</div>
          <script type="text/javascript" src='bundle.js'></script>
        </body>
      </html>
    `
    res.send(HTML)
  }

  // TODO: ADD ME!
  /* ---------- END Route handlers ---------- */

  // Create HTTP server
  let port = process.env.PORT || 3000;
  app.listen(port);
  console.log(`Express listening on port ${port}`);
}

if (require.main === module) {
  program
  .description('Info: Starts the backend koa.js webserver')
  .usage(': babel-node --harmony server.py [options]')
  .option('-s --store <name>',
          'specify type of store (memory|mongo) [memory]', 'memory')
  .parse(process.argv);

  main(program);
}
