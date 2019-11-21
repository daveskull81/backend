const request = require('supertest');
const server = require('../../index');

describe('Trips', () => {
    describe('All /trips routes require authentication', () => {
        it('should return 401 with invalid credentials to get a trip with id', () => {
            return request(server).get('/api/trips/1')
                    .set('Authorization', '123')
                    .then(res => {
                        expect(res.status).toBe(401);
                    });
        });
        it('should return 401 with invalid credentials to update a trip with id', () => {
            return request(server).put('/api/trips/1')
                    .set('Authorization', '123')
                    .then(res => {
                        expect(res.status).toBe(401);
                    });
        });
        it('should return 401 with invalid credentials to delete a trip with id', () => {
            return request(server).del('/api/trips/1')
                    .set('Authorization', '123')
                    .then(res => {
                        expect(res.status).toBe(401);
                    });
        });
        it('should return 401 with invalid credentials to add a new trip', () => {
            return request(server).post('/api/trips')
                    .set('Authorization', '123')
                    .then(res => {
                        expect(res.status).toBe(401);
                    });
        });
        it('should return 400 with no credentials to get a trip with id', () => {
            return request(server).get('/api/trips/1')
                    .then(res => {
                        expect(res.status).toBe(400);
                    });
        });
        it('should return 400 with no credentials to update a trip with id', () => {
            return request(server).put('/api/trips/1')
                    .then(res => {
                        expect(res.status).toBe(400);
                    });
        });
        it('should return 400 with no credentials to delete a trip with id', () => {
            return request(server).del('/api/trips/1')
                    .then(res => {
                        expect(res.status).toBe(400);
                    });
        });
        it('should return 400 with no credentials to add a new trip', () => {
            return request(server).post('/api/trips')
                    .then(res => {
                        expect(res.status).toBe(400);
                    });
        });
    });
});