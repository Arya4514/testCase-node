var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:8001");

// UNIT test begin

describe("SAMPLE unit test", function () {

    it("should list stats", function (done) {

        server
            .get("/api/stats/list?fromDate=2022-08-12&toDate=2022-08-15")
            .expect("Content-type", /json/)
            .expect(200) // THis is HTTP response
            .end(function (err, res) {
                // HTTP status should be 200
                res.status.should.equal(200);
                // Error key should be false.
                res.body.error.should.equal(false);
                done();
            });
    });

    it("should reset stats", function (done) {

        server
            .delete("/api/stats/reset")
            .expect("Content-type", /json/)
            .expect(200) // THis is HTTP response
            .end(function (err, res) {
                // HTTP status should be 200
                res.status.should.equal(200);
                // Error key should be false.
                res.body.error.should.equal(false);
                res.body.message.should.equal('Ok');
                done();
            });
    });
});