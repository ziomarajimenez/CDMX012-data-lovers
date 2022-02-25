import {filmPosters, cutDescription, createBtnLink, sortMovies, average} from '../src/data.js';
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
// describe('createPoster', () => {
//   it('Should be a function', () => {
//     expect(typeof createPoster).toBe('function');
//   });
//   it('Should be a function', () => {
//     expect(createPoster([["https://static.wikia.nocookie.net/studio-ghibli/images/c/c1/Castle_in_the_Sky.jpg", "Castle in the Sky", "The orphan Sheeta", "1986","95", "2baf70d1-42bb-4437-b551-e5fed5a87abe" ]])).toBe('function');
//   });
  
// });

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



//test for createPoster function 
describe('sortMovies', () => {
  let arrayTest = [
    ["www.castleinthesky.com", "Castle in the Sky", "The orphan Sheeta inherited a mysterious", "1986","95", "2baf70"],
    ["www.avatar.com", "Avatar returs", "Blue monos fighting and having fun", "2012", "98", "4a7894"],
    ["www.myneighboortotoro.com", "my neighbor totoro", "Two sisters move to the country with their father in order", "2000", "100","3asedst"]
  ];

  it('Should be a function', () => {
    expect(typeof sortMovies).toBe('function');
  });
  
  it('Should return an ordered array', () => {
 
  let sortResult = sortMovies("year", arrayTest)
    expect(sortResult).toEqual([["www.avatar.com", "Avatar returs", "Blue monos fighting and having fun", "2012", "98", "4a7894"],
    ["www.myneighboortotoro.com", "my neighbor totoro", "Two sisters move to the country with their father in order", "2000", "100","3asedst"],
    ["www.castleinthesky.com", "Castle in the Sky", "The orphan Sheeta inherited a mysterious", "1986","95", "2baf70"]
  ])
  })
  
  let sortResult1 = sortMovies("AZ", arrayTest)
    expect(sortResult1).toEqual([["www.avatar.com", "Avatar returs", "Blue monos fighting and having fun", "2012", "98", "4a7894"],
    ["www.castleinthesky.com", "Castle in the Sky", "The orphan Sheeta inherited a mysterious", "1986","95", "2baf70"],
    ["www.myneighboortotoro.com", "my neighbor totoro", "Two sisters move to the country with their father in order", "2000", "100","3asedst"]
    ])

  let sortResult2 = sortMovies("ZA", arrayTest)
    expect(sortResult2).toEqual([
    ["www.myneighboortotoro.com", "my neighbor totoro", "Two sisters move to the country with their father in order", "2000", "100","3asedst"],
    ["www.castleinthesky.com", "Castle in the Sky", "The orphan Sheeta inherited a mysterious", "1986","95", "2baf70"],  
    ["www.avatar.com", "Avatar returs", "Blue monos fighting and having fun", "2012", "98", "4a7894"]
     
  ])

})

//test for average function
describe('average', () => {
  it('Should be a function', () => {
    expect(typeof average).toBe('function');
  });

  it('returns a rating in a 5 point scale', () => {
    expect(average("100") ).toBe(5);
  });

  it('returns a rating in a 5 point scale', () => {
    expect(average("70") ).toBe(3.5);
  });

})