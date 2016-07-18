'use strict'

var promise = new Promise(function (resolve, reject) {
  resolve('SECRET VALUE');
})

//do same thing as above

// var promise = Promise.reject(new Error('SECRET VALUE'));
 //or

// var promise = Promise.resolve('SECRET VALUE');


promise.catch(function (err) {
  console.log(err);
})
