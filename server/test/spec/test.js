var server = require('../../app');
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();
chaiHttp = require('chai-http');
chai.use(chaiHttp);
describe('/car/api/getCompanies', () => {
	it('it should GET all the companies details', (done) => {
		chai.request(server)
			.get('/car/api/getCompanies')
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a('array');
				res.body.length.should.be.eql(2);
				done();
			});
	});
	it('it should GET all the Models from company', (done) => {
		chai.request(server)
			.get('/car/api/getModels/'+"Ford")
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a('array');
				res.body.length.should.be.eql(2);
				done();
			});
	});
	it('it should GET all Images of Model', (done) => {
		chai.request(server)
			.get('/car/api/getImages/'+"Edge")
			.end((err, res) => {
				res.should.have.status(200);
				res.body.should.be.a('array');
				res.body.length.should.be.eql(1);
				done();
			});
	});
});

