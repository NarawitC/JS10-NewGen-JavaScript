function sum(...num) {
  return num.reduce((sum, i) => sum + i);
}
sum(1, 5, 3, 6);
