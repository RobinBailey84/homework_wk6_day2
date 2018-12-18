const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur1;
  let dinosaur2;
  let dinosaur3;

  beforeEach(function () {

    dinosaur1 = new Dinosaur('t-rex', 'carnivore', 50);
    dinosaur2 = new Dinosaur('stegosaurus', 'herbivore', 40);
    dinosaur3 = new Dinosaur('triceratops','herbivore', 40);
    park = new Park('Dino Land', 20, );


  });

  it('should have a name', function(){
    const actual = park.name;
    assert.strictEqual(actual, 'Dino Land')
  });

  it('should have a ticket price', function(){
    const actual = park.ticketPrice;
    assert.strictEqual(actual, 20)
  });

  it('should have a collection of dinosaurs', function(){
    const expected = [];
    assert.deepStrictEqual(park.dinosaurs, expected)
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    const expected = [dinosaur1, dinosaur2]
    assert.deepStrictEqual(park.dinosaurs, expected)
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.removeDinosaur(dinosaur1)
    const expected = []
    assert.deepStrictEqual(park.dinosaurs, expected)
  });

  it('should be able to find the dinosaur that attracts the most visitors');

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur1)
    park.addDinosaur(dinosaur2)
    park.findSpecies(dinosaur1)
    const expected = 1
    assert.deepStrictEqual()
  });

  it('should be able to remove all dinosaurs of a particular species');

});
