const { validate, validateFields } = require('./');

describe('Test validate* function:', () => {
    test('Throw error if payload is not an object', () => {
        expect(() =>
            validate({
                data: {
                    payload: 1,
                    meta: { source: 'ui', algorithm: 'deflate' },
                },
                name: 'ui',
            })
        ).toThrowError(`ui: payload should be an object`);
    });

    test('Throw error if payload doesn`t have field "name"', () => {
        expect(() =>
            validate({
                data: {
                    payload: { email: 'james.bond@gmail.com' },
                    meta: { source: 'ui', algorithm: 'deflate' },
                },
                name: 'ui',
            })
        ).toThrowError(`ui: payload should have required field name`);
    });

    test('Throw error if payload.name is empty string', () => {
        expect(() =>
            validate({
                data: {
                    payload: { email: 'james.bond@gmail.com', name: '' },
                    meta: {
                        source: 'ui',
                        algorithm: 'deflate',
                    },
                },
                name: 'ui',
            })
        ).toThrowError(`ui: payload.name should not be empty`);
    });

    test('Throw error if typeof payload.name !== string', () => {
        expect(() =>
            validate({
                data: {
                    payload: {
                        email: 'james.bond@gmail.com',
                        name: 777,
                    },
                    meta: {
                        source: 'ui',
                        algorithm: 'deflate',
                    },
                },
                name: 'ui',
            })
        ).toThrowError(`ui: payload.name should be a string`);
    });

    test('Throw error if payload doesn`t have field "email"', () => {
        expect(() =>
            validate({
                data: {
                    payload: {
                        name: 'James',
                    },
                    meta: {
                        source: 'ui',
                        algorithm: 'deflate',
                    },
                },
                name: 'ui',
            })
        ).toThrowError(`ui: payload should have required field email`);
    });

    test('Throw error if payload.email is empty string', () => {
        expect(() =>
            validate({
                data: {
                    payload: {
                        name: 'James',
                        email: '',
                    },
                    meta: {
                        source: 'ui',
                        algorithm: 'deflate',
                    },
                },
                name: 'ui',
            })
        ).toThrowError(`ui: payload.email should not be empty`);
    });

    test('Throw error if typeof payload.email !== string', () => {
        expect(() =>
            validate({
                data: {
                    payload: {
                        name: 'James',
                        email: 777,
                    },
                    meta: {
                        source: 'ui',
                        algorithm: 'deflate',
                    },
                },
                name: 'ui',
            })
        ).toThrowError(`ui: payload.email should be a string`);
    });

    test('Throw error if payload doesn`t have field "password"', () => {
        expect(() =>
            validate({
                data: {
                    payload: {
                        name: 'James',
                        email: 'james.bond@gmail.com',
                    },
                    meta: {
                        source: 'ui',
                        algorithm: 'deflate',
                    },
                },
                name: 'ui',
            })
        ).toThrowError(`ui: payload should have required field password`);
    });

    test('Throw error if payload.password is empty string', () => {
        expect(() =>
            validate({
                data: {
                    payload: {
                        name: 'James',
                        email: 'james.bond@gmail.com',
                        password: '',
                    },
                    meta: {
                        source: 'ui',
                        algorithm: 'deflate',
                    },
                },
                name: 'ui',
            })
        ).toThrowError(`ui: payload.password should not be empty`);
    });

    test('Throw error if typeof payload.password !== string', () => {
        expect(() =>
            validate({
                data: {
                    payload: {
                        name: 'James',
                        email: 'james.bond@gmail.com',
                        password: true,
                    },
                    meta: {
                        source: 'ui',
                        algorithm: 'deflate',
                    },
                },
                name: 'ui',
            })
        ).toThrowError(`ui: payload.password should be a string`);
    });
});

describe('Test validateFields function:', () => {
    test('Throw error if data contains not allowed field', () => {
        expect(() =>
            validateFields({
                data: {
                    payload: {
                        name: 'James',
                        email: 'james.bond@gmail.com',
                        checksum: 'A034DC89',
                    },
                    meta: {
                        source: 'ui',
                        algorithm: 'deflate',
                    },
                },
                name: 'ui',
                instance: null,
            })
        ).toThrowError(`ui: data contains not allowed field — checksum`);
    });

    test('Throw error if data contains not allowed field', () => {
        expect(() =>
            validateFields({
                data: {
                    payload: {
                        name: 'James',
                        email: 'james.bond@gmail.com',
                    },
                    meta: {
                        source: 'ui',
                        algorithm: 'deflate',
                    },
                    footer: { flag: true },
                },
                name: 'ui',
                instance: null,
            })
        ).toThrowError(`ui: data contains not allowed field — footer`);
    });
});
