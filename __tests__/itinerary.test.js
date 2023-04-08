const Itinerary = require('../src/itinerary')
const Port = require('../src/port')

describe('constructor', () => {
    it('instantiates an object', () => {
        expect(new Itinerary()).toBeInstanceOf(Object);
    })

    it('sets a ports property', () => {
        const manchester = new Port ('Manchester');
        const london = new Port ('London');
        const itinerary = new Itinerary ([manchester, london]);
        expect(itinerary.ports).toEqual([manchester, london]);
    })
})