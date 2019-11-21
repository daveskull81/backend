const request = require('supertest');
const server = require('../index');

describe('Server', () => {
    describe('GET /api', () => {
        it('should return 200 OK', () => {
            return request(server).get('/api')
                    .then(res => {
                        expect(res.status).toBe(200);
                    });
        });
        it('should return It\'s Alive! as status on response body', () => {
            return request(server).get('/api')
                    .then(res => {
                        expect(res.body.status).toBe('It\'s Alive!');
                    });
        });
    });
});