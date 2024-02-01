/* eslint-disable no-undef */
// TODO: Create tests suite for validation function
const { isValid } = require('../validations');

describe('validations tests suites - isValid', () => {
    test('should return true', () => {
        const result = isValid("monSuperTag&1");
        expect(result).toBe(true);
    });
});
