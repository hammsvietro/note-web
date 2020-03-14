const {User} = require('../../src/app/models');
const request = require('supertest');
const truncate = require('../utils/truncate');


const app = require('../../src/app');


describe('Authentication',()=>{
    beforeEach(async () =>{
        await truncate();
    })

    it('should authenticate with valid credentials', async() => {
        const user = await User.create({
            name: 'pedro',
            email: 'pedro@clebervidros.com',
            password: '123123'
        });
        const response = await request(app)
        .post('/sessions')
        .send({
            email: user.email,
            passowrd: '123123'
        })

        expect(response.status).toBe(200)
    });
});

