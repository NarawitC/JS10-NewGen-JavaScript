let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

// function topSalaries(salaries) {
//   let keyArr = Object.keys(salaries);
//   if (keyArr.length === 0) return null;
//   let { John, Pete, Mary } = salaries;
//   let valueArr = [John, Pete, Mary];
//   let maxIndex = 0;
//   let maxValue = 0;
//   valueArr.forEach((el, index) => {
//     if (el > maxValue) maxIndex = index;
//     maxValue = el;
//   });
//   return keyArr[maxIndex];
// }
// topSalaries(salaries);

// function betterTopSalaries(salaries) {
//   let keyArr = Object.keys(salaries);
//   if (keyArr.length === 0) return null;
//   let entries = Object.entries(salaries);
//   // console.log(entries);
//   let maxIndex = 0;
//   let maxValue = 0;
//   entries.forEach((el, index) => {
//     if (el[1] > maxValue) {
//       maxValue = el[1];
//       maxIndex = index;
//     }
//   });
//   return keyArr[maxIndex];
// }
// betterTopSalaries(salaries);

// Object.keys(salaries).reduce((a, b) => {
//   if (salaries[a] > salaries[b]) return a;
//   else return b;
// });

function betterTopSalaries(salaries) {
  let { John, Pete, Mary } = salaries;
  if (John === undefined) return null;
  let valueArr = [John, Pete, Mary];
  let maxValue = valueArr.reduce((a, b) => {
    if (a > b) return a;
    return b;
  },0);
  for (let key in salaries) {
    if (salaries[key] === maxValue) return key;
  }
}
betterTopSalaries(salaries);
// !รออาจารย์เฉลย
