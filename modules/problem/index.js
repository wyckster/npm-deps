const { doSomething } = require('@modules/something');

function doProblem() {
  console.log('other begins');
  doSomething();
  console.log('other ends');
}

module.exports = { doProblem };