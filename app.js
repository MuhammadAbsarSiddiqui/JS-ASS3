
// ******JS ASS 3*****
// ******QUESTION1******

let prompt1 = prompt('Enter temperature in celcius:')
if(prompt1>30){
    alert("TRUE \n It's a hot day.")
}
else{
    alert("FALSE \n The weather is moderate")
}

// ******QUESTION2******

let obt_marks =prompt("ENTER YOUR OBTAIN MARKS:");
let obt = Number(obt_marks)
let total_marks =prompt("ENTER YOUR TOTAL MARKS:");
let total = Number(total_marks)

const percentage=(obt_marks/total_marks)*100;


if(percentage>=80){
    console.log("Your grade is A-ONE")
}
else if(percentage>=70){
    console.log("Your grade is A")
}
else if(percentage>=60){
    console.log("Your grade is B")
}
else if(percentage>=50){
    console.log("Your grade is C")
}
else{
    console.log("You are FAIL");
}

