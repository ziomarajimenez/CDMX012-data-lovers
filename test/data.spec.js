import {filmPosters, cutDescription, createBtnLink, backToTop, hideBtn, createPoster} from '../src/data.js';
import data from '../src/data/ghibli/ghibli.js';

//test for filmPosters function
describe('filmPosters', () => {
  it('Should be a function', () => {
    expect(typeof filmPosters).toBe('function');
  });

  it('returns an array with different elements of movies', () => {
    expect(typeof data.films[0] ).toBe('object');
  });

  it('returns year of a selected movie', () => {
    expect( (filmPosters(data.films[0]))[3]).toBe('1986');
  });

});

//test for cutDescription function
describe('cutDescription', () => {
  it('Should be a function', () => {
    expect(typeof cutDescription).toBe('function');
  });

  it('Returns a cut string with a length of 400', () => {
    expect(cutDescription("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu p")).toBe("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a...");
  });

  it('Returns the same string <400 characters', () => {
    expect(cutDescription("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.")).toBe("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.");
  });
  
});

//test for createPoster function 
describe('createPoster', () => {
  it('Should be a function', () => {
    expect(typeof createPoster).toBe('function');
  });
  it('Should be a function', () => {
    expect(createPoster([["https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg", "Castle in the Sky", "The orphan Sheeta", "1986","95", "2baf70d1-42bb-4437-b551-e5fed5a87abe" ]])).toBe('function');
  });
  
});


//test for scrollTop
describe('backToTop', () => {
  it('Should be a function', () => {
    expect(typeof backToTop).toBe('function');
  });
});

describe('hideBtn', () => {
  it('Should be a function', () => {
    expect(typeof hideBtn).toBe('function');
  });
});

// test fot create link for second page
describe('createBtnLink', () => {
  it('Should be a function', () => {
    expect(typeof createBtnLink).toBe('function');
  });
});



//test for search function 
describe('cutDescription', () => {
  it('Should be a function', () => {
    expect(typeof cutDescription).toBe('function');
  });

  it('Returns a cut string with a length of 400', () => {
    expect(cutDescription("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu p")).toBe("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a...");
  });

  it('Returns the same string <400 characters', () => {
    expect(cutDescription("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.")).toBe("Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.");
  });
  
});

