const Pet = require('../src/pet.js');

describe('constructor', () => {
  it('should return an object', () => {
    expect(new Pet('Fido')).toBeInstanceOf(Object);
  });
});
  it('should set the name property', () => {
    const pet = new Pet('Fido');
    expect(pet.name).toEqual('Fido');
  });

  it('should have an initial age of 0', () => {
    const pet = new Pet('Fido');
    expect(pet.age).toEqual(0);
  });

  it('should have an initial hunger of 0 and fitness of 10', () => {
    const pet = new Pet('Bob');
    expect(pet.hunger).toEqual(0);
    expect(pet.fitness).toEqual(10);
});
describe('walk', () => {
  it('increases fitness by 4', () => {
    const pet = new Pet('fido');
    pet.fitness = 4;
    pet.walk();
    expect(pet.fitness).toEqual(8);
  });
});
