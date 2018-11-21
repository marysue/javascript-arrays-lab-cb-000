var kittens = ["Milo", "Otis", "Garfield"];


// Add your functions and code here
 function destructivelyAppendKitten(name) {
  //appends a kitten to the end of the kittens array', function() {
  //  window.kittens = ['Milo', 'Otis', 'Garfield'];
  //  destructivelyAppendKitten('Ralph')
  // expect(window.kittens).toEqual(["Milo", "Otis", "Garfield", "Ralph"])
   kittens.push(name)
  return kittens;
}

function  destructivelyPrependKitten(name) {
    //describe('destructivelyPrependKitten(name)', function() {
    //it('prepends a kitten to the beginning of the kittens array', function() {
    //  window.kittens = ['Milo', 'Otis', 'Garfield'];
    //destructivelyPrependKitten("Bob")
    kittens.unshift(name);
    //expect(window.kittens).toEqual(["Bob", "Milo", "Otis", "Garfield"])
}

function destructivelyRemoveLastKitten() {
  //describe('destructivelyRemoveLastKitten()', function() {
    //it('removes the last kitten from the kittens array', function() {
    //  window.kittens = ['Milo', 'Otis', 'Garfield'];
    //  destructivelyRemoveLastKitten()
    kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  //  describe('destructivelyRemoveFirstKitten()', function() {
      //it('removes the First kitten from the kittens array', function() {
      //  window.kittens = ['Milo', 'Otis', 'Garfield'];
      //  destructivelyRemoveFirstKitten()

        //expect(window.kittens).toEqual(["Otis", "Garfield"])
        kittens.shift();
}

function appendKitten(name) {
//  describe('appendKitten(name)', function() {
//    it('appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged', function() {
  //    window.kittens = ['Milo', 'Otis', 'Garfield'];
  //    expect(appendKitten("Broom")).toEqual(["Milo", "Otis", "Garfield", "Broom"])

  //    expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
}

function prependKitten(name) {
  //describe('appendKitten(name)', function() {
    //it('appends a kitten to the kittens array and returns a new array, leaving the kittens array unchanged', function() {
    //  window.kittens = ['Milo', 'Otis', 'Garfield'];
    //  expect(appendKitten("Broom")).toEqual(["Milo", "Otis", "Garfield", "Broom"])

    //  expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
}

function removeLastKitten(){
  //describe('removeLastKitten()', function() {
  //  it('removes the last kitten in the kittens array and returns a new array, leaving the kittens array unchanged', function() {
  //    window.kittens = ['Milo', 'Otis', 'Garfield'];
  //    expect(removeLastKitten()).toEqual(["Milo", "Otis"])

  //    expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
}

function removeFirstKitten() {
  //removes the first kitten from the kitten
  // array, leaving the kittens array unchanged
  //describe('removeFirstKitten()', function() {
  //  it('removes the first kitten from the kittens array and returns a new array, leaving the kittens array unchanged', function() {
  //    window.kittens = ['Milo', 'Otis', 'Garfield'];
  //    expect(removeFirstKitten()).toEqual(["Otis", "Garfield"])

  //    expect(window.kittens).toEqual(["Milo", "Otis", "Garfield"])
}
