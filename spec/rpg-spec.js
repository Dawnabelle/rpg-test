import {Character} from './../src/rpg.js';
let player = new Character('Dawn', 'mage');

describe('character', function(){
  it('should test if the character has a name', function(){
    expect(player.name).not.toEqual('');
  });
  it('should test for the character type', function(){
    expect(player.type).toEqual('mage');
  });
});
