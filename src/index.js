'use strict';
var server = require('./server/index.jsx');

function main (opts) {

  // Routes middlewares
  // TODO: ADD ME!
  /* ---------- END Route handlers ---------- */

  // Create HTTP server
  const PORT = process.env.PORT || 3000;
  server.listen(port);
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
