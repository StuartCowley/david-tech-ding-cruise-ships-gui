const Ship = require('../src/ship')
const Port = require('../src/port')
const Itinerary = require('../src/itinerary')


describe('Ship', () => {
    let ship;
    let manchester;
    let itinerary;

beforeEach(() => {
    manchester = {
        addShip: jest.fn(),
        removeShip: jest.fn(),
        name: 'Manchester',
        ships: []
    };

    london = {
        addShip: jest.fn(),
        removeShip: jest.fn(),
        name: 'London',
        ships: []
    };

    itinerary = {
        ports: [manchester, london]
    };

    ship = new Ship(itinerary);     
});

describe ('constructor', () => {
    it('instantiates an object', () => {
        expect(ship).toBeInstanceOf(Object);
    })

    it('should have a starting port', () => {
        expect(ship.currentPort).toBe(manchester); 
    })

    it('gets added to port on instantiation', () => {
        expect(manchester.addShip).toHaveBeenCalledWith(ship);
    });
});

describe('set sail', () => {
    it('should be able to set sail from a port', () => {
        ship.setSail();
        expect(ship.currentPort).toBeFalsy();
        expect(manchester.removeShip).toHaveBeenCalledWith(ship);
    });

    it('cant sail further than whats in the itinerary', () => {
        ship.setSail();
        ship.dock();

        expect(() => ship.setSail()).toThrowError('You have reached the end of the itinerary');
    });
})

describe('dock', () => {
    it('should dock at another port', () => {
        ship.setSail();
        ship.dock();
        expect(ship.currentPort).toBe(london);
    });

    it('can dock at a different port', () => {
        ship.setSail();
        ship.dock();

        expect(ship.currentPort).toBe(london);
        expect(london.addShip).toHaveBeenCalledWith(ship);
    });
})
});