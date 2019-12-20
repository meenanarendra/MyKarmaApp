# MyKarmaApp

Created web application to test Karma, Mocha, chai, sinon and requirejs. I was able to excute the test cases and suddenly the it stop working. 
now when i run the application. I see below log

C:\My\MyKarmaAppGit\create-template\MyKarmaApp>karma start --log-level debug
19 12 2019 22:20:51.257:DEBUG [config]: Loading config C:\My\MyKarmaAppGit\create-template\MyKarmaApp\karma.conf.js
19 12 2019 22:20:51.284:DEBUG [karma-server]: Final config Config {
  LOG_DISABLE: 'OFF',
  LOG_ERROR: 'ERROR',
  LOG_WARN: 'WARN',
  LOG_INFO: 'INFO',
  LOG_DEBUG: 'DEBUG',
  frameworks: [ 'mocha', 'requirejs', 'chai', 'sinon' ],
  protocol: 'http:',
  port: 9876,
  listenAddress: '0.0.0.0',
  hostname: 'localhost',
  httpsServerConfig: {},
  basePath: 'C:/My/MyKarmaAppGit/create-template/MyKarmaApp',
  files:
   [ Pattern {
       pattern: 'C:/My/MyKarmaAppGit/create-template/MyKarmaApp/src/*.js',
       served: true,
       included: false,
       watched: true,
       nocache: false,
       weight: [ 1, 0, 1, 0, 0, 0 ],
       type: undefined },
     Pattern {
       pattern: 'C:/My/MyKarmaAppGit/create-template/MyKarmaApp/test/*.js',
       served: true,
       included: false,
       watched: true,
       nocache: false,
       weight: [ 1, 0, 1, 0, 0, 0 ],
       type: undefined },
     Pattern {
       pattern:
        'C:/My/MyKarmaAppGit/create-template/MyKarmaApp/node_modules/mocha/mocha.js',
       served: true,
       included: false,
       watched: true,
       nocache: true,
       weight: [ 1, 0, 0, 0, 0, 0 ],
       type: undefined },
     Pattern {
       pattern:
        'C:/My/MyKarmaAppGit/create-template/MyKarmaApp/node_modules/chai/chai.js',
       served: true,
       included: false,
       watched: true,
       nocache: true,
       weight: [ 1, 0, 0, 0, 0, 0 ],
       type: undefined },
     Pattern {
       pattern:
        'C:/My/MyKarmaAppGit/create-template/MyKarmaApp/node_modules/sinon/lib/sinon.js',
       served: true,
       included: false,
       watched: true,
       nocache: true,
       weight: [ 1, 0, 0, 0, 0, 0 ],
       type: undefined },
     Pattern {
       pattern:
        'C:/My/MyKarmaAppGit/create-template/MyKarmaApp/node_modules/jquery/dist/jquery.js',
       served: true,
       included: false,
       watched: true,
       nocache: true,
       weight: [ 1, 0, 0, 0, 0, 0 ],
       type: undefined },
     Pattern {
       pattern:
        'C:/My/MyKarmaAppGit/create-template/MyKarmaApp/test-main.js',
       served: true,
       included: true,
       watched: true,
       nocache: false,
       weight: [ 1, 0, 0, 0, 0, 0 ],
       type: undefined } ],
  browserConsoleLogOptions: { level: 'debug', format: '%b %T: %m', terminal: true },
  customContextFile: null,
  customDebugFile: null,
  customClientContextFile: null,
  exclude:
   [ 'C:/My/MyKarmaAppGit/create-template/MyKarmaApp/karma.conf.js' ],
  logLevel: 'DEBUG',
  colors: true,
  autoWatch: true,
  autoWatchBatchDelay: 250,
  restartOnFileChange: false,
  usePolling: false,
  reporters: [ 'progress' ],
  singleRun: false,
  browsers: [ 'IE' ],
  captureTimeout: 60000,
  pingTimeout: 5000,
  proxies: {},
  proxyValidateSSL: true,
  preprocessors: [Object: null prototype] {},
  preprocessor_priority: {},
  urlRoot: '/',
  upstreamProxy: undefined,
  reportSlowerThan: 0,
  loggers:
   [ { type: 'console',
       layout: { type: 'pattern', pattern: '%[%d{DATE}:%p [%c]: %]%m' } } ],
  transports: [ 'polling', 'websocket' ],
  forceJSONP: false,
  plugins:
   [ 'karma-ie-launcher',
     'karma-requirejs',
     'karma-sinon',
     'karma-mocha',
     'karma-chai',
     'karma-chrome-launcher' ],
  client:
   { args: [],
     useIframe: true,
     runInParent: false,
     captureConsole: true,
     clearContext: true },
  defaultClient:
   { args: [],
     useIframe: true,
     runInParent: false,
     captureConsole: true,
     clearContext: true },
  browserDisconnectTimeout: 2000,
  browserDisconnectTolerance: 0,
  browserNoActivityTimeout: 30000,
  processKillTimeout: 2000,
  concurrency: Infinity,
  failOnEmptyTestSuite: true,
  retryLimit: 2,
  detached: false,
  crossOriginAttribute: true,
  browserSocketTimeout: 20000,
  cmd: 'start',
  configFile:
   'C:\\My\\MyKarmaAppGit\\create-template\\MyKarmaApp\\karma.conf.js' }
19 12 2019 22:20:51.289:DEBUG [plugin]: Loading plugin karma-ie-launcher.
19 12 2019 22:20:51.329:DEBUG [plugin]: Loading plugin karma-requirejs.
19 12 2019 22:20:51.342:DEBUG [plugin]: Loading plugin karma-sinon.
19 12 2019 22:20:51.349:DEBUG [plugin]: Loading plugin karma-mocha.
19 12 2019 22:20:51.365:DEBUG [plugin]: Loading plugin karma-chai.
19 12 2019 22:20:51.373:DEBUG [plugin]: Loading plugin karma-chrome-launcher.
19 12 2019 22:20:51.564:DEBUG [web-server]: Instantiating middleware
19 12 2019 22:20:51.882:DEBUG [filelist]: Not preprocessing "C:/My/MyKarmaAppGit/create-template/MyKarmaApp/node_modules/mocha/mocha.js" due to nocache
19 12 2019 22:20:51.890:DEBUG [filelist]: Not preprocessing "C:/My/MyKarmaAppGit/create-template/MyKarmaApp/node_modules/chai/chai.js" due to nocache
19 12 2019 22:20:51.897:DEBUG [filelist]: Not preprocessing "C:/My/MyKarmaAppGit/create-template/MyKarmaApp/node_modules/sinon/lib/sinon.js" due to nocache
19 12 2019 22:20:51.903:DEBUG [filelist]: Not preprocessing "C:/My/MyKarmaAppGit/create-template/MyKarmaApp/node_modules/jquery/dist/jquery.js" due to nocache
19 12 2019 22:20:52.103:DEBUG [karma-server]: List of files has changed, trying to execute
19 12 2019 22:20:52.106:WARN [karma]: No captured browser, open http://localhost:9876/
19 12 2019 22:20:52.262:DEBUG [watcher]: Watching "C:/My/MyKarmaAppGit/create-template/MyKarmaApp/src"
19 12 2019 22:20:52.269:DEBUG [watcher]: Watching "C:/My/MyKarmaAppGit/create-template/MyKarmaApp/test"
19 12 2019 22:20:52.270:DEBUG [watcher]: Watching "C:/My/MyKarmaAppGit/create-template/MyKarmaApp/node_modules/mocha/mocha.js"
19 12 2019 22:20:52.279:DEBUG [watcher]: Watching "C:/My/MyKarmaAppGit/create-template/MyKarmaApp/node_modules/chai/chai.js"
19 12 2019 22:20:52.286:DEBUG [watcher]: Watching "C:/My/MyKarmaAppGit/create-template/MyKarmaApp/node_modules/sinon/lib/sinon.js"
19 12 2019 22:20:52.289:DEBUG [watcher]: Watching "C:/My/MyKarmaAppGit/create-template/MyKarmaApp/node_modules/jquery/dist/jquery.js"
19 12 2019 22:20:52.296:DEBUG [watcher]: Watching "C:/My/MyKarmaAppGit/create-template/MyKarmaApp/test-main.js"
19 12 2019 22:20:52.305:INFO [karma-server]: Karma v4.4.1 server started at http://0.0.0.0:9876/
19 12 2019 22:20:52.308:INFO [launcher]: Launching browsers IE with concurrency unlimited
19 12 2019 22:20:52.353:INFO [launcher]: Starting browser IE
19 12 2019 22:20:52.357:DEBUG [launcher]: null -> BEING_CAPTURED
19 12 2019 22:20:52.359:DEBUG [temp-dir]: Creating temp dir at C:\Users\NAREND~1\AppData\Local\Temp\karma-56915947
19 12 2019 22:20:52.370:DEBUG [launcher]: C:\Program Files\Internet Explorer\iexplore.exe http://localhost:9876/?id=56915947
19 12 2019 22:20:55.187:DEBUG [web-server]: serving: C:\Users\narendra_k_meena\AppData\Roaming\npm\node_modules\karma\static/client.html
19 12 2019 22:20:56.507:DEBUG [web-server]: serving: C:\Users\narendra_k_meena\AppData\Roaming\npm\node_modules\karma\static/karma.js
19 12 2019 22:21:00.076:DEBUG [karma-server]: A browser has connected on socket cB1D5BLOO7aCKQryAAAA
19 12 2019 22:21:00.265:DEBUG [web-server]: upgrade /socket.io/?EIO=3&transport=websocket&sid=cB1D5BLOO7aCKQryAAAA
19 12 2019 22:21:00.329:DEBUG [IE 11.0.0 (Windows 10.0.0)]: undefined -> CONNECTED
19 12 2019 22:21:00.337:INFO [IE 11.0.0 (Windows 10.0.0)]: Connected on socket cB1D5BLOO7aCKQryAAAA with id 56915947
19 12 2019 22:21:00.340:DEBUG [launcher]: BEING_CAPTURED -> CAPTURED
19 12 2019 22:21:00.342:DEBUG [launcher]: IE (id 56915947) captured in 8.029 secs
19 12 2019 22:21:00.346:DEBUG [karma]: All browsers are ready, executing
19 12 2019 22:21:00.347:DEBUG [karma]: Captured 1 browsers
19 12 2019 22:21:00.396:DEBUG [middleware:karma]: custom files null null null
19 12 2019 22:21:00.399:DEBUG [middleware:karma]: Serving static request /context.html
19 12 2019 22:21:00.470:DEBUG [web-server]: serving: C:\Users\narendra_k_meena\AppData\Roaming\npm\node_modules\karma\static/context.html
19 12 2019 22:21:00.573:DEBUG [web-server]: serving: C:\Users\narendra_k_meena\AppData\Roaming\npm\node_modules\karma\static/context.js
19 12 2019 22:21:00.952:DEBUG [IE 11.0.0 (Windows 10.0.0)]: CONNECTED -> EXECUTING
IE 11.0.0 (Windows 10.0.0): Executed 0 of 0 SUCCESS (0 secs / 0 secs)
IE 11.0.0 (Windows 10.0.0): Executed 0 of 0 SUCCESS (0.029 secs / 0 secs)
TOTAL: 0 SUCCESS
