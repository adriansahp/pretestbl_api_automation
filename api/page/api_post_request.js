const supertest = require('supertest');
const env = require('dotenv').config();

const api = supertest(process.env.BASE_URL_API);

function postDataa(bodyPostData) {
    return api.post(path)
    .set('Accept', 'application/json')
    .set('Content-Type', 'application/json')
    .send(bodyPostData);
}

module.exports = {
    postDataa,
}