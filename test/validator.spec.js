// importamos el objeto `validator`, que contiene las funciones `isValid` y `maskify`
import validator from '../src/validator';

describe('validator', () => {
  it('debería ser un objeto', () => {
    expect(typeof validator).toBe('object');
  });

  describe('validator.isValid', () => {
    it('debería ser una función', () => {
      expect(typeof validator.isValid).toBe('function');
    });

    it('debería retornar true para "4083952015263"', () => {
      expect(validator.isValid("4083952015263")).toBe(true);
    });

    it('debería retornar true para "79927398713"', () => {
      expect(validator.isValid("79927398713")).toBe(true);
    });

    it('debería retornar false para "1234567890"', () => {
      expect(validator.isValid("1234567890")).toBe(false);
    });
  });

  describe('validator.maskify', () => {
    it('debería ser una función', () => {
      expect(typeof validator.maskify).toBe('function');
    });

    it('Debería retornar "############5616" para "4556364607935616"', () => {
      expect(validator.maskify("4556364607935616")).toBe("############5616");
    });

    it('Debería retornar "1" para "1"', () => {
      expect(validator.maskify("1")).toBe("1");
    });

    it('Debería retornar "######orld" para "helloworld"', () => {
      expect(validator.maskify("helloworld")).toBe("######orld");
    });
  });

  describe('validator.getIssuer', () => {
    it('debería ser una función', () => {
      expect(typeof validator.getIssuer).toBe('function');
    });

    it('Deberia retornar "visa" para una coincidencia con el primer digito "4000123456789017"', () => {
      expect(validator.getIssuer("4000123456789017")).toBe("visa");
    });

    it('Deberia retornar "American Express" para una coincidencia con el primer digito "3000123456789018"', () => { expect(validator.getIssuer("3000123456789018")).toBe("American Express"); });

    it('Deberia retornar "Mastercard" para una coincidencia con el primer digito "5000123456789016"', () => { expect(validator.getIssuer("5000123456789016")).toBe("Mastercard"); });

    it('Deberia retornar "Discover" para una coincidencia con el primer digito "6011123456778015"', () => { expect(validator.getIssuer("6011123456778015")).toBe("Discover"); });

    it('Deberia retornar "China Union Pay" para una coincidencia con el primer digito "6211123456776015"', () => { expect(validator.getIssuer("6211123456776015")).toBe("China Union Pay"); });

    it('Deberia retornar "Maestro" para una coincidencia con el primer digito "5769123456778015"', () => { expect(validator.getIssuer("5769123456778015")).toBe("Maestro"); });
  })
});
