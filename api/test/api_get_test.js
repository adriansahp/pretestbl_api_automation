const { expect } = require('chai');
const chai = require('chai')
const api_get_request = require('../page/api_get_request');

describe('@get data', () => {
    it(`@get data success`, async () => {
        const response = await api_get_request.getDataList();
        expect(response.status).to.equal(200);
        expect(response.userId).to.be.a('number');
        expect(id).to.be.a('number');
        expect(title).to.be.a('string');
        expect(body).to.be.a('string');
    });
});