const concurrently = require('concurrently');
const upath = require('upath');

const browserSyncPath = upath.resolve(upath.dirname(__filename), '../node_modules/.bin/browser-sync');

concurrently([
    { command: 'node --inspect scripts/sb-watch.js', name: 'SB_WATCH', prefixColor: 'bgBlue.bold' },
