// Write your solution here!
const cats  =["Milo", "Otis", "Garfield"];
//Add new cat to the end of an array
function destructivelyAppendCat(name){
    cats.push(name);
}
//Add new cat to the start of array
function destructivelyPrependCat(name){
    cats.unshift(name);
}
//Remove last cat from the cats array
function destructivelyRemoveLastCat(){
    cats.pop();
}
//Remove first cat from cats array
function destructivelyRemoveFirstCat(){
    cats.shift();
}
//appends a cat to the cats array and returns a new array, leaving the cats array unchanged
function appendCat(name){
    const cpCats = [...cats];
    cpCats.push(name);
    return cpCats;
}
//prepends a cat to the cats array and returns a new array, leaving the cats array unchanged
function prependCat(name){
    const newCats = [...cats];
    newCats.unshift(name);
    return newCats;
}
//removes the last cat in the cats array and returns a new array, leaving the cats array unchanged
function removeLastCat(){
    const delCats = [...cats];
    delCats.pop();
    return delCats;
}
//removes the first cat from the cats array and returns a new array, leaving the cats array unchanged:
function removeFirstCat(){
    const removedCats = [...cats];
    removedCats.shift();
    return removedCats;
}