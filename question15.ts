let guestlist : string[] = ["Ali","Usman","Osama","Umar"];
let unableAttened: string = guestlist.splice(0,1)[0];
console.log(`${unableAttened} not invited for dinner`);

guestlist.push("Hadi");
console.log(guestlist);

guestlist.forEach(guest => (
    console.log(`Dear ${guest},you are invited to dinner.`)

))




