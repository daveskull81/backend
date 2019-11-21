const utils = require('./index');
const jwt = require('jsonwebtoken');

describe('Utility Functions', () => {
    describe('convertBooleanToNum', () => {
        it('should return 0 when given false', () => {
            const results = utils.convertBooleanToNum(false);
            expect(results).toBe(0);
        });
        it('should return 1 when given true', () => {
            const results = utils.convertBooleanToNum(true);
            expect(results).toBe(1);
        });
    });
    describe('convertNumToBoolean', () => {
        it('should return false when given 0', () => {
            const results = utils.convertNumToBoolean(0);
            expect(results).toBe(false);
        });
        it('should return true when given 1', () => {
            const results = utils.convertNumToBoolean(1);
            expect(results).toBe(true);
        });
    });
    describe('JWT generation', () => {
        it('should use the user id given in the token', () => {
            const token = utils.generateJWT(1);
            
            jwt.verify(token, 'secret', (err, decodedToken) => {
                expect(decodedToken.userId).toBe(1);
            });
        });
    });
});