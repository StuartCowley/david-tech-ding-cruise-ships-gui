class Controller {
  constructor(ship) {
    this.ship = ship
    this.initialiseSea()

    const sailBtn = document.querySelector("#sailbutton")

    sailBtn.addEventListener("click", () => {
      this.setSail()
    })
  }

  initialiseSea() {
    const backgrounds = ["./images/water0.png", "./images/water1.png"]
    let backgroundIndex = 0
    setInterval(() => {
      document.querySelector("#viewport").style.backgroundImage = `url('${
        backgrounds[backgroundIndex % backgrounds.length]
      }')`
      backgroundIndex += 1
    }, 1000)
  }

  renderPorts(ports) {
    const portsElement = document.querySelector("#ports")
    portsElement.style.width = "0px"
    ports.forEach((port, index) => {
      const newPortElement = document.createElement("div")
      newPortElement.classList.add("port")

      portsElement.appendChild(newPortElement)
      newPortElement.dataset.portName = port.name
      newPortElement.dataset.portIndex = index

      const portsElementWidth = parseInt(portsElement.style.width, 10)
      portsElement.style.width = `${portsElementWidth + 256}px`
    })
  }

  renderShip() {
    const ship = this.ship
    const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort)
    const portElement = document.querySelector(
      `[data-port-index = '${shipPortIndex}']`
    )
    const shipElement = document.querySelector("#ship")
    shipElement.style.top = `${portElement.offsetTop + 32}px`
    shipElement.style.left = `${portElement.offsetLeft - 32}px`
  }

  setSail() {
    const ship = this.ship
    const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort)
    const nextPortIndex = currentPortIndex + 1
    const nextPortElement = document.querySelector(
      `[data-port-index = '${nextPortIndex}']`
    )

    if (!nextPortElement) {
      return alert("End of the line!")
    }

    this.renderMessage(`Now departing from ${ship.currentPort.name}`)

    const shipElement = document.querySelector("#ship")
    const sailInterval = setInterval(() => {
      const shipLeft = parseInt(shipElement.style.left, 10)
      if (shipLeft === nextPortElement.offsetLeft - 32) {
        ship.setSail()
        ship.dock()
        this.renderMessage(`Now arrived at ${ship.currentPort.name}`)
        clearInterval(sailInterval)
      }

      shipElement.style.left = `${shipLeft + 1}px`
    }, 20)
  }

  renderMessage(message) {
    const messageElement = document.createElement("div")
    messageElement.id = "message"
    messageElement.innerHTML = message
    document.querySelector("#viewport").appendChild(messageElement)
    setTimeout(() => {
      document.querySelector("#viewport").removeChild(messageElement)
    }, 2000)
  }
}