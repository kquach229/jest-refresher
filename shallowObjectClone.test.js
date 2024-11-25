const shallowObjectClone = require('./shallowObjectClone');

test('create clone of obj parameter', () => {
  const myObj = { person: 'Hitchiker', number: 42 };
  expect(shallowObjectClone(myObj)).toStrictEqual(myObj);
});
