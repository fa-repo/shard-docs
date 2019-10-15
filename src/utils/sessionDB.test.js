import sessionDB from "./sessionDB";

test("sessionDB() sets and gets values from sessionStorage correctly", () => {
  expect(sessionDB.get('key')).toBe(undefined);
  expect(sessionDB.get('key', 'Default value')).toBe('Default value');
  sessionDB.set('key', 'Hello world');
  expect(sessionDB.get('key')).toBe('Hello world');
  sessionDB.set('key', 'Hello universe');
  expect(sessionDB.get('key')).toBe('Hello universe');
  expect(sessionDB.get('key')).toBeString();
  sessionDB.set('is-bool', true)
  expect(sessionDB.get('is-bool')).toBeBoolean();
  sessionDB.set('is-array', [1, 2, 3])
  expect(sessionDB.get('is-array')).toBeArray();
  sessionDB.set('is-object', { a: 'a', b: 'b' })
  expect(sessionDB.get('is-object')).toBeObject();
});
