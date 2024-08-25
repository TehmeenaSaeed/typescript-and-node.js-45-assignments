let guestList: string[] = ["Ali","Osama","Hadi","Umar"];
console.log("Great news! I found a bigger dinner table!");

//Adding more guests
guestList.unshift("Usman");
console.log(guestList);

//splice
guestList.splice(guestList.length/2,0,"Anas");
console.log(guestList);

//push
guestList.push("Arreb");
console.log(guestList);

guestList.forEach(guest => {
    console.log(`Dear ${guest}, you all are invited to dinner.`);
})