const Ship = require('../src/ship')
const Port = require('../src/port')
const Itinerary = require('../src/itinerary')

describe('Ship', () => {
    let ship;
    let manchester;
    let itinerary;

describe ('constructor', () => {
    manchester = new Port('Manchester');
    itinerary = new Itinerary([manchester]);
    ship = new Ship(itinerary);

    it('instantiates an object', () => {
        expect(ship).toBeInstanceOf(Object);
    })

    it('should have a starting port', () => {
    manchester = new Port('Manchester');
    itinerary = new Itinerary([manchester]);
    ship = new Ship(itinerary);

    expect(ship.currentPort).toBe(manchester); 
    })
});

describe('set sail', () => {
    it('should be able to set sail from a port', () => {
        manchester = new Port('Manchester');
        london = new Port('London');
        itinerary = new Itinerary([manchester, london]);
        ship = new Ship(itinerary);

        ship.setSail();
        expect(ship.currentPort).toBeFalsy();
        expect(ship.previousPort).toBe(manchester);
    });

    it('cant sail further than whats in the itinerary', () => {
        manchester = new Port('Manchester');
        london = new Port('London');
        itinerary = new Itinerary([manchester, london]);
        ship = new Ship(itinerary);

        ship.setSail();
        ship.dock();

        expect(() => ship.setSail()).toThrowError('You have reached the end of the itinerary');
    });
})

describe('dock', () => {
    it('should dock at another port', () => {
        manchester = new Port('Manchester');
        london = new Port('London');
        itinerary = new Itinerary([manchester, london]);
        ship = new Ship(itinerary);
        
        ship.setSail();
        ship.dock();
        expect(ship.currentPort).toBe(london);
    });
})
});