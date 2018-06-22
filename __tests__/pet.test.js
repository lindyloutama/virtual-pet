const Pet = require('../src/pet.js');

describe('constructor', () => {
  it('should return an object', () => {
    expect(new Pet('Carlos')).toBeInstanceOf(Object);
  });
});
  it('should set the name property', () => {
    const pet = new Pet('Carlos');
    expect(pet.name).toEqual('Carlos');
  });

  it('should have an initial age of 0', () => {
    const pet = new Pet('Carlos');
    expect(pet.age).toEqual(0);
  });

  it('should have an initial hunger of 0 and fitness of 10', () => {
    const pet = new Pet('Carlos');
    expect(pet.hunger).toEqual(0);
    expect(pet.fitness).toEqual(10);
});
describe('walk', () => {
  it('increases fitness by 4', () => {
    const pet = new Pet('Carlos');
    pet.fitness = 4;
    pet.walk();
    expect(pet.fitness).toEqual(8);
  });
});
describe('walk', () => {
  it('increases fitness by to a maximum of 10', () => {
    const pet = new Pet('Carlos');
    pet.fitness = 8;
    pet.walk();
    expect(pet.fitness).toEqual(10);
  });
});
describe('feed', () => {
  it('decrease the Pet hunger level by 3', () => {
    const pet = new Pet('Carlos');
    pet.feed();
    expect(pet.hunger).toEqual(0);
  });
});
