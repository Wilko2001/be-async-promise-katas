const { fetch } = require("./fakeApi");

const food = () => fetch("food").then((res) => res.data);

const cat = () => fetch("cats").then((res) => res.data.cats.sort());

const dog = () => {
  return fetch('dogs').then((res) => {
    const data = res.data;
    const naughtiestDog = data.dogs.reduce((acc, cur) => {
      return cur.naughty > acc.naughty ? cur : acc;
    }, data.dogs[0]);
    return { name: naughtiestDog.name, naughty: naughtiestDog.naughty };
  });
};

const joke = () => {
    return Promise.all([
      fetch("jokes", "question").then(res => res.joke),
      fetch("jokes", "answer").then(res => res.answer)
    ]).then(([question, answer]) => {
      return { question, answer };
    });
  }

module.exports = {
  food,
  cat,
  dog,
  joke,
};