const Pet = require('../src/pet.js');

describe('constructor', () => {
  it('should return an object', () => {
    expect(new Pet('Carlos')).toBeInstanceOf(Object);
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
    const pet = new Pet('Fido');
    expect(pet.hunger).toEqual(0);
    expect(pet.fitness).toEqual(10);
});

describe('walk', () => {
  it('increases fitness by 4', () => {
    const pet = new Pet('Fido');
    pet.fitness = 4;
    pet.walk();
    expect(pet.fitness).toEqual(8);
  });
});

describe('walk', () => {
  it('increases fitness by to a maximum of 10', () => {
    const pet = new Pet('Fido');
    pet.fitness = 8;
    pet.walk();
    expect(pet.fitness).toEqual(10);
  });
});

describe('feed', () => {
  it('decrease the Pet hunger level by 3 but never below 0', () => {
    const pet = new Pet('Fido');
    pet.feed = 3;
    expect(pet.hunger).toEqual(0);
  });
});

describe('checkUp', () => {
  it('lets you know how the pet is feeling', () => {
    const pet = new Pet('Fido');
    pet.fitness = 2;
    pet.hunger = 6;
    expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');
    pet.fitness = 2;
    pet.hunger = 4;
    expect(pet.checkUp()).toEqual('I need a walk')
    pet.fitness = 4;
    pet.hunger = 7;
    expect(pet.checkUp()).toEqual('I am hungry')
    pet.fitness = 10;
    pet.hunger = 0;
    expect(pet.checkUp()).toEqual('I feel great!')
  });
});

describe('isAlive', () => {
  it('really lets you know how the pet is feeling', () => {
  const pet = new Pet('Fido');
    pet.age = 31;
    expect(pet.isAlive).toEqual(false)
    pet.age = 29;
    pet.fitness = 0;
    expect(pet.isAlive).toEqual(false)
  });
});