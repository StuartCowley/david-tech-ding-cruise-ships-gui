const Port = require('../src/port')
describe ('Port', () => {
    let manchester;

describe('constructor', () => {
    it('instantiates an object', () => {
        manchester = new Port ('Manchester');
        expect(new Port('Manchester')).toBeInstanceOf(Object);
    })
    
    it('sets a name property', () => {
        manchester = new Port('Manchester');
        expect(manchester.name).toEqual('Manchester');
    })

    it('adds ships to a port', () => {
        manchester = new Port ('Manchester');
        const ship = {};
        manchester.addShip(ship);
        expect(manchester.ships).toContain(ship);
    })

    it('removes ships from a port', () => {
        manchester = new Port ('Manchester');
        const david = {};
        const alpha = {};
        
        manchester.addShip(david);
        manchester.addShip(alpha);
        manchester.removeShip(alpha);
        expect(manchester.ships).toEqual([david]);
    })
})
})