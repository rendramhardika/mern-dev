const db = require('../database')
describe('Sample Test', () => {
    beforeAll(() => {
        db.connect();
    });

    it('should test that true === true', () => {
        expect(true).toBe(true)
    })
    afterAll((done) => {
        db.disconnect(done);
    });
})
