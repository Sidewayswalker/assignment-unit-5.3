console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line





//Establish variable myCollection
let myCollection = [];

//Create a function that has parameters (collection, artist, title, yearPublished).
//This function should create an object with the following parameters (artist, title, yearPublished)
//set the new object equal to the collection parameter in the function. 
function addToCollection(collection, title, artist, yearPublished) {
  let newAlbum = {
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }
  //Within the funtion push the results of newAlbum into the collection parameter.
  collection.push(newAlbum);
  //Should we be returning newAlbum or collection????????????????????? does it matter?
  return newAlbum;
}
// Use the fucntion to pass through values that will push this into 
addToCollection(myCollection, 'Rumours', 'Fleetwood Mac', '1977');
addToCollection(myCollection, 'Sgt. Pepper\'s Lonely Hearts Club Band', 'The Beatles', '1967');
addToCollection(myCollection, 'Born to Run', 'Bruce Springsteen', '1975');
addToCollection(myCollection, 'Thriller', 'Michael Jackson', '1982');
addToCollection(myCollection, 'Blood on the Tracks', 'Bob Dylan', '1975');
addToCollection(myCollection, 'Straight Outta Compton', 'N.W.A', '1988');

// Display the updated myCollection array.
console.log('This is my updated myCollection Array', myCollection);
////////////////////////////////////////////////////////////////////////////


function showCollection(collection){
  for (let album of collection){
    console.log(`${album.title} by ${album.artist}, published in ${album.yearPublished}.`)
  }
  return 'Yay! we did it!'
}
console.log('These are all of my collections')
console.log(showCollection(myCollection));

////////////////////////////////////////////////////////////////////////////
// Add a function named findByArtist. This function should:
  // Take in a collection parameter. Remember, we want to be able to search any collection!
  // Take in an artist (string) parameter.
  // Create an empty array to hold any matching results, if any.
  // Loop through the collection and add any album objects with a matching artist to the array.
  // Return the array with the matching results. (If no results are found, an empty array should be returned.)
// Test the findByArtist function. Make sure to test with an artist you know is in the collection, as well as an artist you know is not in your collection. Check that for artists with multiple matches, all are returned.

//Add a function - findByArtist
//Take in 2 parameters 
//Create an empty array - Temporarily stores objects.
//Loop through myCollection and see if the string we entered in matches the object.artist (properties of the object) 
  //if we found a match ------ console.log(array)
  //else return array
//return the array


function findByArtist(collection, artistChoice){
  let theMatchingArray = [];

  for (let i=0; i<collection.length; i++){
    if (artistChoice === collection[i].artist){              
      theMatchingArray.push(collection[i])
    }
  }
  return theMatchingArray
}
console.log(findByArtist(myCollection, 'Fleetwood Mac'));
console.log("Let's Start on STRETCH GOALS");


/////////////////////////////////////////////////////////////////
// Create a function called search that will allow for searching by artist and yearPublished. This function should:
  // Take in a collection parameter.
  // Take in a searchCriteria parameter. Create your solution based on a search object that has these properties:
  // { artist: 'Ray Charles', yearPublished: 1957 }
// The returned output from search should meet these requirements:
  // Return a new array of all items in the collection matching all of the search criteria.
  // If no results are found, return an empty array.
  // If there is no search object, an empty search object, or missing artist/yearPublished data provided as input, return all albums from the collection being searched.




function search(collection, searchCriteria){
  if(searchCriteria === undefined || searchCriteria.artist === undefined || searchCriteria.yearPublished === undefined || searchCriteria.artist === '' || searchCriteria.yearPublished === ''){
    return collection;
  }
  
  let searchResults = [];
  
  for (let i=0; i<collection.length; i++){
    if (collection[i].artist === searchCriteria.artist && collection[i].yearPublished === searchCriteria.yearPublished){
      searchResults.push(collection[i])
    }  
  }
  return searchResults;
}


//FIX IT------- 
//expect(search(primesCollection, {artist: '', yearPublished: 2023}), 'Expect entire collection with empty artist string').to.deep.equal(primesCollection);
   

//Scenario for "No Object"
console.log('This should give us everything in myCollection', search(myCollection));

//Scenario for "Empty Search Object"
console.log('This should give us everything in myCollection', search(myCollection, {}));

//Scenario for ""Missing artist or yearPublished"
console.log('This should give us everything in myCollection', search(myCollection, {artist: '', yearPublished: '1975'}));
console.log('This should give us everything in myCollection', search(myCollection, {artist:'Michael Jackson', yearPublished: ''}));

//should give us back an Empty Array. 
let dataEntry2 = {artist: 'Not Sure', yearPublished: '1600'};
console.log('This should give us an Empty Array', search(myCollection, dataEntry2));

//should give us back 1 full object. Blood on the tracks, Bob Dylan, 1975
let dataEntry1 = { artist: 'Bob Dylan', yearPublished: '1975' };
console.log('This should give us 1 object line', search(myCollection, dataEntry1));





// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.)
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
