var supertest = require("supertest");
var should = require("should");

// This agent refers to PORT where program is runninng.

var server = supertest.agent("http://localhost:8001");

// UNIT test begin

describe("SAMPLE unit test", function () {

    it("should create stats", function (done) {

        server
            .post("/api/stats/create")
            .send({
                "date": "2022-08-14",
                "views": 789456,
                "clicks": 45612,
                "cost": 156548
            })
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
});