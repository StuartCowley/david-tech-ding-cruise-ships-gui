const Ship = require('../src/ship')
const Port = require('../src/port')

describe('Ship', () => {
    let ship;
    let manchester;

describe ('constructor', () => {
    manchester = new Port('Manchester');
    ship = new Ship(manchester);

    it('instantiates an object', () => {
        expect((manchester)).toBeInstanceOf(Object);
    })

    it('should have a starting port', () => {
    manchester = new Port('Manchester');
    ship = new Ship(manchester);

    expect(ship.currentPort).toBe(manchester); 
    })
});

describe('set sail', () => {
    manchester = new Port('Manchester');
    ship = new Ship(manchester);

    it('should be able to set sail from a port', () => {
        ship.setSail();
        expect(ship.currentPort).toBeFalsy();
    });
})

describe('dock', () => {
    manchester = new Port('Manchester');
    ship = new Ship(manchester);
    london = new Port('London');

    it('should dock at anoher port', () => {
        ship.dock(london);
        expect(ship.currentPort).toBe(london);
    });
})
});