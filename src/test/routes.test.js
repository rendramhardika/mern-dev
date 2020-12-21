const request = require("supertest")
const app = require("../app")
describe("Test index route", () => {
    test("using done method", done => {
        request(app)
            .get('/')
            .then(response => {
                expect(response.statusCode).toBe(200)
                done()
            })
    })

    test("using async await", async() => {
        const response = await request(app).get('/')
        expect(response.statusCode).toBe(200)
    })
})