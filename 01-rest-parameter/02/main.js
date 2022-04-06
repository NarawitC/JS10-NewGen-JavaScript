function filterOutOdds(...num) {
  return num.filter((el) => {
    return el % 2 === 0;
  });
}
filterOutOdds(2, 1, 5, 0, 9, 7);
