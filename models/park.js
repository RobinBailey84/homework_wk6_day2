const Park = function (name, ticketPrice, dinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = [];
};

Park.prototype.addDinosaur = function(dinosaur) {
  this.dinosaurs.push(dinosaur)
};

Park.prototype.removeDinosaur = function(dinosaur) {
  this.dinosaurs.pop(dinosaur)
};

Park.prototype.findSpecies = function(species)
const dinosaurSpecies = [];

for (const dinoSpecies of this.dinosaurs) {
  if (dinoSpecies === dinosaurs.species) {
    dinosaurSpecies.push(dinoSpecies);
  }
}
dinosaurSpecies.count()
};

module.exports = Park;
