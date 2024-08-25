let person_name: string = "Ali";
console.log("lowercase:", person_name.toLowerCase());
console.log("uppercase:", person_name.toUpperCase());
console.log("titlecsse:", person_name.replace(/\bw/g,c =>c.toUpperCase()));