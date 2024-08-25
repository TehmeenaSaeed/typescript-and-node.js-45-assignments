let Guestlist: string[] = ["sadaf","meena","umaiza","sara","areeba"]
console.log("Unfortuntaly! the new dinner table won't arrive so we can invite only two guest,")

while(Guestlist.length > 2) {
    let removeGuest : string | undefined = Guestlist.pop();
    if (removeGuest !== undefined){
        console.log(`sorry ${Guestlist}, we can't invit you.`);
    }
}


Guestlist.forEach(guest => {
    console.log(`Dear ${guest}, you are still invited for the dinner.`);

})

Guestlist.splice(0,Guestlist.length)
console.log("updated list of guest:", Guestlist);