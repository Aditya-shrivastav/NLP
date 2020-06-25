import {textSubmit} from '../client/js/textForm'

describe('Test, the function "textSubmit()" should be a function' , () => {
    test('It should be a function', () => {
        expect(typeof textSubmit).toBe("function");
    });
});

describe('Test, the function "textSubmit()" should exist' , () => {
    test('It should return true', () => {
        expect(textSubmit).toBeDefined();
    });
});
