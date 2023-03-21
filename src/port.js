class Port {
    constructor (name) {
        this.name = name;
        this.ships = [];
    }

    addShip(ship) {
        this.ships.push(ship);
    }

    removeShip(ship) {
        const indexOfShip = (this.ships.indexOf(ship));
        this.ships.splice(indexOfShip);
    }
};



module.exports = Port