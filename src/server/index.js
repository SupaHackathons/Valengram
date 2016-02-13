import path from 'path';
import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import program from 'commander';

function main (opts) {
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

  // Routes middlewares
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
