const request = require('supertest');
const server = require('../../index');

describe('Users', () => {
    describe('All /users routes require authentication', () => {
        it('should return 401 with invalid credentials to get a user\'s trips with user id', () => {
            return request(server).get('/api/users/1/trips')
                    .set('Authorization', '123')
                    .then(res => {
                        expect(res.status).toBe(401);
                    });
        });
        it('should return 401 with invalid credentials to get a user profile with id', () => {
            return request(server).get('/api/users/1/profile')
                    .set('Authorization', '123')
                    .then(res => {
                        expect(res.status).toBe(401);
                    });
        });
        it('should return 401 with invalid credentials to update a user\'s profile with user id', () => {
            return request(server).put('/api/users/1/profile')
                    .set('Authorization', '123')
                    .then(res => {
                        expect(res.status).toBe(401);
                    });
        });
        it('should return 400 with no credentials to get a user\'s trips with user id', () => {
            return request(server).get('/api/users/1/trips')
                    .then(res => {
                        expect(res.status).toBe(400);
                    });
        });
        it('should return 400 with no credentials to get a user profile with id', () => {
            return request(server).get('/api/users/1/profile')
                    .then(res => {
                        expect(res.status).toBe(400);
                    });
        });
        it('should return 400 with no credentials to update a user\'s profile with user id', () => {
            return request(server).put('/api/users/1/profile')
                    .then(res => {
                        expect(res.status).toBe(400);
                    });
        });
    });
});