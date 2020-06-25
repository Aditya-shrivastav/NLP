import {urlSubmit} from '../client/js/urlForm'

describe('Test, the function "urlSubmit()" should be a function' , () => {
    test('It should be a function', () => {
        expect(typeof urlSubmit).toBe("function");
    });
});

describe('Test, the function "urlSubmit()" should exist' , () => {
    test('It should return true', () => {
        expect(urlSubmit).toBeDefined();
    });
});
