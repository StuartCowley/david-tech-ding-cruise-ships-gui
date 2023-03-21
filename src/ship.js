class Ship {
    constructor(itinerary) {
        this.itinerary = itinerary;
        this.currentPort = itinerary.ports[0];
        this.previousPort = null;
        this.currentPort.addShip(this);
    }

    setSail() {
       const itinerary = this.itinerary;
       const currentPortIndex = itinerary.ports.indexOf(this.currentPort);
    
       if(currentPortIndex === (itinerary.ports.length - 1)) {
        throw new Error('You have reached the end of the itinerary');
       }

       this.previousPort = this.currentPort;
       this.currentPort = null;
       this.previousPort.removeShip(this);
    }

    dock() {
        const itinerary = this.itinerary;
        const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
        this.currentPort = itinerary.ports[previousPortIndex + 1];
        this.currentPort.addShip(this);
    }
}
    

module.exports = Ship;