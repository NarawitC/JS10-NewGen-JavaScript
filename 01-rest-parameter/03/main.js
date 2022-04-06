function mergeObjects(...objs) {
  // objs.reverse();
  return Object.assign(...objs.reverse());
}

const a = { a: 1, b: 1 };
const b = { b: 2 };
const c = { c: 3 };
mergeObjects(a, b, c);
