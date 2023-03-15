const Port = require('../src/port.js');
const Ship = require('../src/ships.js')

describe('Ship', () => {
    let ship;
    let port;
    let korea;

beforeEach (() => {
    port = new Port('Malaysia');
    korea = new Port ('Korea');
    ship = new Ship(port);
});

describe ('constructor', () => {
    it('returns an object', () => {
        expect(new Ship()).toBeInstanceOf(Object);
    });

    it('has a starting port as property', () => {
        expect(ship.port).toBe('Malaysia');
    })
    
    it('should sail from the port', () => {
        ship.setSail();
        expect(ship.port).toBeFalsy();
    })

    // it('should be able to dock at a new port', () => {
    //     //remember we still have these code from beforeEach
    //     // startingPort = new Port('Malaysia');
    //     // endPort = new Port ('Korea');
    //     // ship = new Ship(startingPort);

    //     const singapore = new Port ('Singapore')
    //     ship.dock(singapore);
    //     expect(ship.).toBe('Singapore')
    // })
})
})
