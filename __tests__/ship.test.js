const Ship = require('../src/ship')

describe('Ship', () => {
    let ship;


describe ('Ship', () => {
    ship = new Ship('Seoul');
    it('instantiates an object', () => {
        expect(new Ship('Seoul')).toBeInstanceOf(Object);
    })

    it('should have a starting port', () => {
    ship = new Ship('Seoul');
    expect(ship.port).toEqual('Seoul') 
    })
}) 
});