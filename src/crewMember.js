class CrewMember {
    constructor(position){
        this.position = position
        this.currentShip = "Looking for a Rig"
    }

    engageWarpDrive() {
        if (this.currentShip === 'Looking for a Rig') {
            return 'had no effect';
        }
    }

    setsInvisibility() {
        if (this.currentShip === 'Looking for a Rig') {
            return 'had no effect';
        }
        if (this.position === 'Defender') {
            // debugger
            this.currentShip.cloaked = true;
        }
    }

    chargePhasers() {
        if (this.currentShip === 'Looking for a Rig') {
            return 'had no effect';
        }
    }

}
