const Pet = require('../src/pet.js');

describe('constructor', () => {
    it('returns an object', () => {
      const pet = new Pet('Fido')
      pet.growUp();
      expect(pet.age).toEqual(1);
    });
  });
