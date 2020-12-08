// ASSESSMENT 5: JavaScript Coding Practical Questions

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

var secretCodeWord1 = "lackadaisical"
// Expected output: "l4ck4d41s1c4l"
var secretCodeWord2 = "gobbledygook"
// Expected output: "g0bbl3dyg00k"

// must create a funcion that will map through the stiring and affect the different values throughout the string

const codedMessage = (string) => {
  // have to split the string into an array of strings using split

let wordSplitter =  string.split("")
// the map will  have an if stament conatiang the differnt values and what they should return
let wordMapper = wordSplitter.map((value, index) => {
    if(value == "a"){
      return 4
    } else if(value == "e"){
      return 3
    } else if(value == "i"){
      return 1
    } else if(value == "o"){
      return 0
    } else {
      return value
    }
  })
  // must join array back into string
  return wordMapper.join("")
}

console.log(codedMessage(secretCodeWord1));
console.log(codedMessage(secretCodeWord2));


// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

var arrayOfWords = ["Apple", "Banana", "Plum", "Cherry", "Kiwi", "Peach"]
// Expected output: "Apple" "Banana" "Peach"


const aFilter = (array) => {
  // have to filter through the array to make a subset of class
  let wordFilter = array.filter(value => {
    //is there a way to make this more dynamic?
    //instead of typing out both lower and upper case would it be possible to filter by lower casing the array before hand or lowercasing the value being inspecteced
    return value.includes("a") || value.includes("A")
  })
  return wordFilter
}

console.log(aFilter(arrayOfWords));




// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false
var hand4 = [3, 5, 3, 5, 3]
// Expected output: true


//the fucnction is going to take in an array of 5 numbers equal to a full full house which is a pair and three of a kind
//Im thinking that there will be some type of conditonal statment saying that if there are so many instances of a value then perform this action
//most likely going to be a map
//if 3 values are the same in different indexes and 2 other values match the other indexs


//an array counter method can work to check how many times an instance occurs!!!
//
//
// const fullHouse = (array) =>{
//   for(let i = 0; i < array.length; i++) {
//     if(array[i] === array[i] && array[i] === array[i] === array[i]){
//       return true
//   }else{
//     return false
// }
// }
// }


//other idea would be to sort them by order and compare first three with last three since it would only work if they were all the same

const fullHouse = (array) =>{
  //sorting the values willmake sure that like values stay next to each other.
let sortedArray = array.sort((a, b) => a - b)
//compare three equal values at the start of array and two equal values in the back
  if(sortedArray[0] === sortedArray[1] && sortedArray[1] === sortedArray[2] && sortedArray[3] === sortedArray[4]){
    return true
    //do the same thing but the matching three and two filpped
  } else if(sortedArray[2] === sortedArray[3] && sortedArray[3] === sortedArray[4] && sortedArray[0] === sortedArray[1]) {
    return true
  } else {
    return false
  }
}
//although this one works there must be a way to see if the stretch examples work


//
// const fullHouse = (array) => {
// let every = array.every((value, i)=>{
//   //if
// return (value[i] == value[i] == value[i] && value[i] == value[i])//{
//   //   return true
//   // } else {
//   //   return false
//   // }
// })
// return every
// }
//


// const fullHouse = (array) => {
//   let fullMap = array.map((value, i) => {
//     if(value[i] == value[i] == value[i] && value[i] == value[i]){
//       return true
//     } else {
//       return false
//     }
//   })
//   return fullMap
// }

console.log(fullHouse(hand1));
console.log(fullHouse(hand2));
console.log(fullHouse(hand3));
console.log(fullHouse(hand4));
// console.log(fullHouse(hand5));
// console.log(fullHouse(hand6));







// STRETCH:
var hand5 = ["K", 5, "K", 5, "K"]
// Expected output: true
var hand6 = ["A", "Q", "A", 5, 3]
// Expected output: false
