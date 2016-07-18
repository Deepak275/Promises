'use strict'

var promise = new Promise(function (fullfill, reject) {
  setTimeout(function () {
    fullfill('FULFILLED!');
  }, 300);
});

promise.then(console.log);

// var promise = new Promise(function(resolve, reject) {
//   // do a thing, possibly async, then…
//
//   if (1/* everything turned out fine */) {
//     resolve("Stuff worked!");
//   }
//   else {
//     reject(Error("It broke"));
//   }
// });
//
// console.log(typeof promise);
// //console.log(promise.then());
