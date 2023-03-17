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
})
})