'use strict'

var promise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    reject(new Error('REJECTED!'));
  }, 300);
});

 var the = promise.then(null, function (err) {
  console.log(err.message);
  return err;
});

// console.log(the);
