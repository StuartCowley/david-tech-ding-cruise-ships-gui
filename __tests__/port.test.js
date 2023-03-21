const Port = require('../src/port')
describe ('Port', () => {
    let manchester;
    let ship;
    let david;
    let alpha;

beforeEach(() => {
    manchester = new Port ('Manchester');
    ship = jest.fn();
    david = jest.fn();
    alpha = jest.fn();
})
describe('constructor', () => {
    it('instantiates an object', () => {
        expect(new Port('Manchester')).toBeInstanceOf(Object);
    })
    
    it('sets a name property', () => {
        expect(manchester.name).toEqual('Manchester');
    })

    it('adds ships to a port', () => {
        manchester.addShip(ship);
        expect(manchester.ships).toContain(ship);
    })

    it('removes ships from a port', () => {  
        manchester.addShip(david);
        manchester.addShip(alpha);
        manchester.removeShip(alpha);
        expect(manchester.ships).toEqual([david]);
    })
})
})