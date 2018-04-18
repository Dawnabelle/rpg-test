export class Character {
  constructor (name, type){
    this.name = name;
    this.type = type;
    this.health = 10;
    this.str = 10;
    this.isma = 10;
    this.int = 10;
    this.damage = 5;
  }

  checkType(){
    if(this.type === 'mage'){
      this.health ++;
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

export class Gift {
  constructor (item){
    this.item = item;
  // }
  // if (player.type === mage){
  //   let gift = wand;
  // } else if {
  //   (player.type === warrior) {
  //     let gift = sword;
  //   }
  //   else if {
  //     (player.type === bard) {
  //       let gift = lute;
  //     }
  //   }
  }
}
export function enemy(name) {
  this.name = name;
  this.health = 20;
  this.damage = 5;
}

enemy.prototype.enemyAttack = function(){
  let damage = 5;
  return damage;
};
