const Ship = require('../src/ship')

describe('Ship', () => {
    let ship;


describe ('constructor', () => {
    ship = new Ship('Seoul');
    it('instantiates an object', () => {
        expect(new Ship('Seoul')).toBeInstanceOf(Object);
    })

    it('should have a starting port', () => {
    ship = new Ship('Seoul');
    expect(ship.port).toEqual('Seoul') 
    })
});

describe('set sail', () => {
    ship = new Ship ('Seoul');
    it('should be able to set sail from a port', () => {
        ship.setSail()
        expect(ship.port).toBeFalsy();
    });
})
});