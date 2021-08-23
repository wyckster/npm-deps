This demonstrates a problem with dependencies of local modules.

`main` depends on `problem` and `problem` depends on `something`.

<pre>
main
└─ problem
   └─ something
</pre>

But if you do `npm install` in the `~/main` folder, you get the following when you run `node app.js`.

<pre>
Error: Cannot find module '@modules/something'
Require stack:
- E:\npm-deps\main\app.js
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:880:15)
    at Function.Module._load (internal/modules/cjs/loader.js:725:27)
    at Module.require (internal/modules/cjs/loader.js:952:19)
    at require (internal/modules/cjs/helpers.js:88:18)
    at Object.<anonymous> (E:\npm-deps\main\app.js:1:25)
    at Module._compile (internal/modules/cjs/loader.js:1063:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
    at Module.load (internal/modules/cjs/loader.js:928:32)
    at Function.Module._load (internal/modules/cjs/loader.js:769:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12) {
  code: 'MODULE_NOT_FOUND',
  requireStack: [ 'E:\\npm-deps\\main\\app.js' ]
}
</pre>
