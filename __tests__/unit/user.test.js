const bcrypt = require('bcryptjs');

const {User} = require('../../src/app/models');
const truncate = require('../utils/truncate');

describe('User',()=>{
 
    beforeEach(async () => await truncate());
 
    it('should encrypt user password', async () => {
        const user = await User.create({
            name: 'Pedro',
            email:'cleber@gmail.com',
            prePassword: "12345678"
        })
 
        const hash = await bcrypt.hash('12345678',8);

        expect(await bcrypt.compare('12345678', user.password)).toBe(true)
    
    });
});