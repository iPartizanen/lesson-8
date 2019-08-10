const { Bank } = require('./');

describe('Test Bank class:', () => {
    const bank = new Bank();

    test('test registering new customer', () => {
        expect(
            bank.register({
                name: 'James',
                balance: 7,
            })
        ).toBeGreaterThan(Date.now());
    });

    test('test duplicate customer restriction', () => {
        expect(() =>
            bank.register({
                name: 'James',
                balance: 0,
            })
        ).toThrowError(`duplicated customer for name: 'James'`);
    });

    test('test enroll with incorrect amount', () => {
        const personId = bank.register({
            name: 'Arnold',
            balance: 1000,
        });
        expect(() => bank.emit('add', personId, -100)).toThrowError(
            `amount should be greater than 0`
        );
    });

    test('test enroll with nonexisten customer', () => {
        expect(() => bank.emit('add', 0, 100)).toThrowError(
            `customer with id '0' not found`
        );
    });
});
