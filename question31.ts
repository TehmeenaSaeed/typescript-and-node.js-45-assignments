
let UserNames = ["Ali", "Ayesha", "Admin", "Hadi", "Asim"];

UserNames =[]

if(UserNames.length === 0){
    console.log("We neeed to some users!");  
}else{
    UserNames.forEach(oneUser => {
        if(oneUser === "Admin"){
            console.log(`Hello ${oneUser},would you like to see a status report?`);
        }else{
            console.log(`Hello ${oneUser},thank you for logging in again.`);
             };
    });
}
