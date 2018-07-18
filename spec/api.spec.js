process.env.NODE_ENV = 'test';
const app = require('../app');
const request = require('supertest')(app);
const expect = require('chai').expect;

describe('API', () => {
    describe('ROUTE /api/users', () => {
        describe('GET /api/users', () => {
            it('returns an array with the correct length', () => {
                return request.get('/api/users')
                    .expect(200)
                    .then(({ body: users }) => {
                        expect(users).to.be.an('array');
                        expect(users.length).to.equal(2);
                    })
            });
            it('returns an array containing user objects with the correct properties', () => {
                return request.get('/api/users')
                    .expect(200)
                    .then(({ body: users }) => {
                        expect(users[0]).to.be.an('object');
                        expect(Object.keys(users[0]).length).to.equal(6);
                        expect(users[0].id).to.equal(1);
                        expect(users[0].username).to.equal('cockles');
                        expect(users[0].first_name).to.equal('Alex');
                        expect(users[0].last_name).to.equal('Cox');
                        expect(users[0].email).to.equal('alexander.cox@myemail.com');
                        expect(users[0].avatar_url).to.equal('https://pbs.twimg.com/profile_images/691705411939012609/YHZlX_97_400x400.jpg');
                        expect(users[1]).to.be.an('object');
                        expect(Object.keys(users[1]).length).to.equal(6);
                        expect(users[1].id).to.equal(2);
                        expect(users[1].username).to.equal('jsefton');
                        expect(users[1].first_name).to.equal('Jamie');
                        expect(users[1].last_name).to.equal('Sefton');
                        expect(users[1].email).to.equal('jamie.sefton@myemail.com');
                        expect(users[1].avatar_url).to.equal('https://pbs.twimg.com/profile_images/1011090533886889984/YaBHtvEp_400x400.jpg');
                    });
            });
        });
        describe('GET /api/users/:username', () => {
            it('returns a user object with correct user properties', () => {
                return request.get('/api/users/jsefton')
                    .expect(200)
                    .then(({ body: user }) => {
                        expect(user).to.be.an('object');
                        expect(user.id).to.equal(2);
                        expect(user.username).to.equal('jsefton');
                        expect(user.first_name).to.equal('Jamie');
                        expect(user.last_name).to.equal('Sefton');
                        expect(user.email).to.equal('jamie.sefton@myemail.com');
                        expect(user.avatar_url).to.equal('https://pbs.twimg.com/profile_images/1011090533886889984/YaBHtvEp_400x400.jpg');
                    });
            });
        });
        describe('GET /api/users/:user_id/favourites', () => {
            it('returns an array of favourite objects with the correct length', () => {
                return request.get('/api/users/1/favourites')
                    .expect(200)
                    .then(({ body: favourites }) => {
                        expect(favourites).to.be.an('array');
                        expect(favourites.length).to.equal(1);
                    });
            });
            it('returns an array with a favourite object with the correct properties', () => {
                return request.get('/api/users/1/favourites')
                    .expect(200)
                    .then(({ body: favourite }) => {
                        expect(favourite[0]).to.be.an('object');
                        expect(favourite[0].id).to.equal(1);
                        expect(favourite[0].solution_id).to.equal(1);
                        expect(favourite[0].title).to.equal('Snorlax');
                        expect(favourite[0].image_url).to.equal('https://pokemonrevolution.net/img/feature/snorlax.png');
                        expect(favourite[0].votes).to.equal(2);
                        expect(favourite[0].tags).to.equal('#snorlax#pokemon#sleepy');
                        expect(favourite[0].brand).to.equal('Hama');
                        expect(favourite[0].width_px).to.equal(60);
                        expect(favourite[0].height_px).to.equal(60);
                        expect(favourite[0].favourited).to.equal(3);
                    });
            });
        });
        describe('POST /api/users', () => {
            const newUserObj = {
                username: 'new_user',
                first_name: 'Joe',
                last_name: 'Bloggs',
                email: 'joe.bloggs@myemail.com',
                avatar_url: 'http://3.bp.blogspot.com/_2JjkZ1873XE/TC0A9pT1yjI/AAAAAAAAAJk/Da8dBVRoIZY/s1600/12.jpg'
            }
            it('returns back the same user object witht the expected properties', () => {
                return request.post('/api/users').send(newUserObj)
                .expect(201)
                .then(({body: user}) => {
                    expect(user).to.be.an('object');
                    expect(user.id).to.equal(3);
                    expect(user.username).to.equal(newUserObj.username);
                    expect(user.first_name).to.equal(newUserObj.first_name);
                    expect(user.last_name).to.equal(newUserObj.last_name);
                    expect(user.email).to.equal(newUserObj.email);
                    expect(user.avatar_url).to.equal(newUserObj.avatar_url);
                });
            });
        });
    });
    describe('ROUTE /api/beads', () => {
        describe('GET /api/beads', () => {
            
        });
    });
});