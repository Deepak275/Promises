'use strict'

// var promise = new Promise(function (resolve) {
//   resolve('SECRET VALUE');
// });
//
// promise.then(function (res) {
//   return res;
// }).then(function (res) {
//   console.log('In the res '+res);
// });

first().then(second).then(console.log);
