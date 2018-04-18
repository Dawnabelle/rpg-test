import {Character} from './../src/rpg.js';
import {Gift} from './../src/rpg.js';

let player = new Character('Dawn', 'mage',);
let wand = new Gift('wand');
let sword = new Gift('sword');
let lute = new Gift('lute');

describe('character', function(){
  it('should test if the character has a name', function(){
    expect(player.name).not.toEqual('');
  });
  it('should test for the character type', function(){
    expect(player.type).toEqual('mage');
  });
});

describe('gift', function(){
  it('should test character type and gift accordingly', function(){
    expect(wand.item).toEqual('wand');
  });
});
