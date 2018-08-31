class Spaceship {
    constructor(name, crew) {
        this.name = name
        this.phasers = 5
        this.shields = 4
        this.cloaked = false
        this.warpDrive = 'disengaged'
        this.docked = true
        this.phasersCharge = 'uncharged'
        this.crew = crew 
            if(this.crew.length) {
                this.docked = false
            } else {
                this.docked = true
            }
        this.setCrew()
    }

    setCrew() {
        this.crew.forEach(crewMember => (crewMember.currentShip = this))
    }


}
