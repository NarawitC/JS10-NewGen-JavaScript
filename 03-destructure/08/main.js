function checkAge({ age, ...profile }) {
  if (age > 18) {
    return `${profile.firstName} ${profile.lastName}`;
  }
  return 'No allowed';
}

const obj = { firstName: 'John', lastName: 'Doe', age: 19 };
checkAge(obj);
