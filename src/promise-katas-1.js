/* 

DO NOT change the names of the functions in this file. 

However, you will have to amend the body of the functions themselves in order to make the tests pass. 

Look at the Promise documentation on MDN
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

You can create a new promise by using the Promise constructor. We use the 'new' keyword,
followed by an uppercase 'Promise'. Invoke the Promise constructor like this 'Promise()' and pass in a callback function 
'Promise(() => {}). 
The callback function in the Promise constructor always has a resolve function as the first
parameter and a reject function as the second parameter, 'Promise((resolve, reject) => {}).
Sometimes we shorten this to 'res' for 'resolve' and 'rej' for 'reject'. The name
of these parameters can be whatever you want to call them, however they will always be a 
resolve and reject function as that is how Promises have been built for us. 

Example use:

const myPromiseWillResolveSuccessfully = true;

const myFirstPromise = new Promise((resolveFunction, rejectFunction) => {
    if (myPromiseWillResolveSuccessfully) resolveFunction("Yay, I got my data")
    else rejectFunction("My promise rejected :(")
})

Remember, a Promise can only resolve successfully, or reject when it fails to resolve.
*/

// 1 Create a function that returns a resolving promise
// Example:
// when we call returnPromise like 'returnPromise()' we expect our function to use the
// 'resolve' Promise callback function in order to resolve successfully

const returnPromise = () => { 
  return new Promise((resolve) => resolve());
};

function returnTen() {
  return new Promise((resolve) => {
    resolve(10);
  });
}
  
  returnTen().then(value => {
    console.log(value)
  }).catch(error => {
    console.error('The promise is expected to resolve with 10!');
  });

function returnString() { 
  return new Promise((resolve) => {
    resolve('string')
  });
}

returnString().then(value => {
  console.log(value)
}).catch(error => {
  console.error("The promise is expected to resolve with 'string'!")
});

const returnBob = () => new Promise((resolve) => resolve({ name: "Bob" }));

returnBob({ name: 'Bob' })
.then(object => {
  console.log(object);
}).catch(error => {
  console.error("The promise is expected to resolve with { name: 'Bob' }!");
});

const returnList = () =>
  new Promise((resolve) => resolve(["eggs", "apples", "milk", "bread"]));

returnList(['eggs', 'apples', 'milk', 'bread'])
.then(array => {
  console.log(array);
}).catch(error => {
  console.error("The promise is expected to resolve with ['eggs', 'apples', 'milk', 'bread']!");
});

const anError = () => new Promise((_, reject) => reject("An error occurred"));

anError()
.then(() => {

}).catch(error => {
  console.error(error);
});

const theNumberOfTheBeast = () => new Promise((_, reject) => reject(666));

theNumberOfTheBeast()
.then(() => {

}).catch(error => {
  console.error(error);
});

const internalServerError = () => new Promise((_, reject) => reject({ error: 500 }));

internalServerError()
.then(() => {
  console.error(error);
});

const happySad = (value) => new Promise((resolve, reject) => {
    value >= 1 ? resolve("happy") : reject("sad");
  });

happySad(0)
.then(answer => {

}).catch(error => {
  console.error('The promise is expected to resolve with happy!');
});

happySad(1)
.then(answer => {
  console.log(result);
  }).catch(error => {
});

const amIYourFather = (value) => new Promise((resolve, reject) =>
    value === "Luke"
      ? resolve("Yes. Luke, I am your father.")
      : reject("Not your dad.")
  );

amIYourFather("something else")
.then(answer => {

}).catch(error => {
  console.error("Not your dad.")
});

amIYourFather("Luke")
.then(answer => {
  console.log(result);
}).catch(error => {
});

const myNameIs = (name) => new Promise((resolve) => {
    resolve(name => `My name is ${name}`);
  });

myNameIs('Romy')
  .then(nameFunc => {
    console.log(nameFunc('Romy'));
}).catch(error => {
  console.error('The promise is expected to resolve with a function that returns "My name is Romy"!')
});


module.exports = {
  returnPromise,
  returnTen,
  returnString,
  returnBob,
  returnList,
  anError,
  theNumberOfTheBeast,
  internalServerError,
  happySad,
  amIYourFather,
  myNameIs,
};