function removeRandom(...arr) {
  let result = [];
  for (el of arr) {
    for (item of el) {
      result.push(item);
    }
  }
  let position = Math.floor(Math.random() * result.length);
  result.splice(position, 1);
  return result;
}
removeRandom([0, 1, 2, 3, 4, 5]);
