exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'azaman_mFM2JE',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'LrZsx4Hx19KDXRbpwZ6p',

  updateJob: false,
  specs: [
    './features/**/*.feature',
], 
 exclude: [],

  logLevel: 'warn',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  hostname: 'hub.browserstack.com',
  services: [['browserstack']],
  baseUrl: 'https://www.mlb.com',


  before: function () {
    var chai = require('chai');
    global.expect = chai.expect;
    chai.Should();
  },
  framework: 'cucumber',
  reporter: {
    ui: 'bdd',
    timeout: 60000,
  },
  cucumberOpts: {
    requireModule: ['@babel/register'],
    require: ['./features/step-definitions/*.js'],
    backtrace: false,
    requireModule: [],
    dryRun: false,
    failFast: false,
    format: ['pretty'],
    snippets: true,
    source: true,
    profile: [],
    strict: false,
    tagExpression: '',
    timeout: 60000,
    ignoreUndefinedDefinitions: false
  },
  beforeCommand: function (commandName, args) {
    browser. setWindowSize(1200. ,900)
  },
};
