const { expect } = require('chai');
const api_get_request = require('../page/api_post_request');

const postData = {
    "title": "recommendation",
    "body": "motorcycle",
    "userId": 12
}

describe('@post data', () => {
    it(`@post user data`, async () => {
        const response = await api_get_request.postDataa(postData);
        console.log(response.body)
        expect(response.status).to.equal(200);
    })
})