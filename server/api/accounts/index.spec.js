const request = require('supertest');
const server = require('../../index');

describe('Accounts', () => {
    describe('POST /api/accounts', () => {
        it('should return 400 from /register when no username or password is present in body', () => {
            return request(server).post('/api/accounts/register')
                    .send({})
                    .then(res => {
                        expect(res.status).toBe(400);
                    });
        });
        it('should provide message about including username', () => {
            return request(server).post('/api/accounts/register')
                    .send({})
                    .then(res => {
                        expect(res.body.error).toMatch(/username/i);
                    });
        });
        it('should provide message about including password', () => {
            return request(server).post('/api/accounts/register')
                    .send({})
                    .then(res => {
                        expect(res.body.error).toMatch(/password/i);
                    });
        });
        it('should return 400 from /login when no username or password is present in body', () => {
            return request(server).post('/api/accounts/login')
                    .send({})
                    .then(res => {
                        expect(res.status).toBe(400);
                    });
        });
        it('should provide message about including username', () => {
            return request(server).post('/api/accounts/login')
                    .send({})
                    .then(res => {
                        expect(res.body.error).toMatch(/username/i);
                    });
        });
        it('should provide message about including password', () => {
            return request(server).post('/api/accounts/login')
                    .send({})
                    .then(res => {
                        expect(res.body.error).toMatch(/password/i);
                    });
        });
    });
});