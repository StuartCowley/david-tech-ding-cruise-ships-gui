const MINIMUM_PASSENGERS = 0;

class Ship {
    constructor(port) {
        this.port = port;
    }

    setSail() {
        this.port = null;
    }
}

module.exports = Ship