// function* test() {
// console.log('object');
// let one = 'one';
// let three = 'three';

//  yield ajax("https://jsonplaceholder.typicode.com/posts")
//  console.log(one,three);

//   const two = yield ajax(
//     `https://jsonplaceholder.typicode.com/posts/1`
//   );

//   console.log(two);
// }

// async function ajax(url) {
//   fetch(url)
//     .then((data) => data.json())
//     .then((data) => navid.next('hello'));
// }

// const navid = test();
// navid.next();

// var b = function thisName() {
//   console.log(this);
//   console.log(this.name);
// }

// const a = b;
// a()

// const c = {
//   type: "object",
//   name: "c",
// };

// const a = {
//   func: thisName,
//   name: "I'm an a",
//   obj: c,
// };

// const b = {
//   func: a.func,
//   name: "I'm a b",
//   obj: a.obj,
// };

// const d = {
//   func: b.func,
//   name: "that's a ddddd",
// };

// thisName();
// a.func();
// b.func = a.func;
// b.func();
// d.func();

function soundFunction(sound) {
  this.sound = sound;
}

const d = soundFunction;

console.log(new d());

soundFunction.prototype.talk = function () {
  console.log(this.sound);
};

const b = new soundFunction("meow!");
console.log(b);
b.talk();
