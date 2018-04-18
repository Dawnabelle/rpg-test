import {Character} from './../src/character.js';
import {Gift} from './../src/gift.js';
import {Enemy} from './../src/enemy.js';


let player = new Character('Dawn', 'mage',);
let baddie = new Enemy('bad guy', 'Garudo');
let wand = new Gift('wand');
let sword = new Gift('sword');
let lute = new Gift('lute');

describe('character', function(){
  var resusableCharacter;

  beforeEach(function(){
    resusableCharacter = new Character('Dawn', 'mage')
  });

  it('should reset character to beforeEach', function(){
    console.log(resusableCharacter);
  });

  it('should test if the character has a name', function(){
    expect(resusableCharacter.name).not.toEqual('');
  });
  it('should test for the character type', function(){
    expect(resusableCharacter.type).toEqual('mage');
    player.checkType();
    expect(resusableCharacter.int).toEqual(10);
  });
    it('should test character type and gift accordingly', function(){
      expect(wand.item).toEqual('wand');
  });

    it('should take points away from health per damage dealt', function() {
      resusableCharacter.health -= baddie.damage;
      expect(baddie.damage).toEqual(5);
  });
});
