class Electrodevices {
    constructor(name,power){
      this.type = 'electrical',
      this.name = name,
      this.power = power,
      this.isPlugged = false
    }
    
    plugIn() {
      console.log(this.name + " is plugged")
      this.isPlugged = true
    }
    
    getUsePower() {
      if (this.isPlugged){
        return this.power
        } else return 0
    }
  }
    
    
    const kettle = new Electrodevices ('kettle',1000);
    kettle.ownColor = 'red';
    
    const stove = new Electrodevices ('stove',1500);
    stove.ownForm = 'circle';
    
    const radio = new Electrodevices ('radio',50);
    radio.ownLanguage = 'russia';
    
    console.log(kettle.getUsePower()+ stove.getUsePower()+ radio.getUsePower());
    
    kettle.plugIn();
    console.log (kettle.getUsePower()+radio.getUsePower());
    
    radio.plugIn();
    console.log (kettle.getUsePower()+radio.getUsePower());