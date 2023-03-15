const Port = require('../src/port.js')


describe('Port', () => {
    it('instantiates a port object', () => {
        expect(new Port()).toBeInstanceOf(Object);
    })

    it('sets the name property', () => {
        const port = new Port('Korea');
        expect(port.name).toEqual('Korea');
    })
});