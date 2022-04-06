function cloneObject(obj) {
  return { ...obj };
}
const o = { a: 1, b: 2, c: 3 };
cloneObject(o);
