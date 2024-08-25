let current_user = ["Ali", "Bilal", "Hadi", "Osama", "Asim"];
let new_user = ["Sana", "Ayesha", "Asim", "Sana", "Aeena"];
new_user.forEach(new_one_user => {
    let our_condition = current_user.some(current_one_user => current_one_user.toLocaleLowerCase() === new_one_user.toLocaleLowerCase());
    if (our_condition) {
        console.log(`Sorry ${new_one_user} is already taken!`);
    }
    else {
        console.log(`This Username ${new_one_user} is available`);
    }
});
export {};
