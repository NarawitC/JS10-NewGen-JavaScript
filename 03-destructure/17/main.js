const names = [
  { firstName: 'John', lastName: 'Doe' },
  { firstName: 'Jack', lastName: 'Dann' },
  { firstName: 'Joe', lastName: 'Dunne' },
];
for (el of names) {
  const { firstName, lastName } = el;
  console.log(`${firstName} ${lastName}`);
}
