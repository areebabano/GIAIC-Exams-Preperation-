import inquirer from "inquirer";

// use inquirer to get input from user 

let answer = await inquirer.prompt([
    {
        name: "userName",
        type: "input",
        message: "Enter Your Name"
    }
]);

// print name 
console.log(`My name is : ${answer.userName}`);
