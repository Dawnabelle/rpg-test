export class Character {
  constructor (name, type){
    this.name = name;
    this.type = type;
    this.health = 80;
    this.str = 10;
    this.isma = 10;
    this.int = 10;
    this.damage = 5;
  }

  checkType(){
    if(this.type === 'mage'){
      this.health += 2;
      this.int += 6;
      this.isma -= 4;
    } else if (this.type === 'warrior'){
      this.health += 5;
      this.int -= 4;
      this.str ++;
    } else if (this.type === 'bard'){
      this.isma += 8;
      this.str -= 4;
      this.health -=3;
    }
  }
}
