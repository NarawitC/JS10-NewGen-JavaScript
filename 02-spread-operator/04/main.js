function doubleAndReturnArgs(arr, ...num) {
  num = num.map((el) => el * 2);

  return [...arr].concat(num);
}
doubleAndReturnArgs([1, 2, 3], 4, 4);
