function sayHi(name) {
  let name = 'Guest';
  console.log(name); // *
}

sayHi('Jim');
// SyntaxError: Identifier 'name' has already been declared
