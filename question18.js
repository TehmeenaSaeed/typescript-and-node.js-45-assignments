let placeTovisit = ["paris", "italy", "london", "china", "australia"];
console.log("orginal order:", placeTovisit);
//alphabetical order
console.log("Alphabetical order:", placeTovisit.slice().sort());
// array is still in original order
console.log("orginal order after sorting:", placeTovisit);
//Reverse alphabetical order
console.log("Reverse alphabetical order:", placeTovisit.slice().sort().reverse());
//orginal order
console.log("orginal order after reverse sorting:", placeTovisit);
//Reverse order
placeTovisit.reverse();
console.log("Reverse order:", placeTovisit);
//Reverse the order of list again
placeTovisit.reverse();
console.log("Back to orginal order:", placeTovisit);
console.log("sorted in alphabetical order:", placeTovisit.slice().sort());
console.log("Sorted in reverse alphabetical order:", placeTovisit.slice().sort().reverse());
export {};
