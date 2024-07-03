import inquirer from "inquirer";
let answer = await inquirer.prompt([
    {
        name: "userName",
        type: "input",
        message: "Enter Your Name"
    }
]);
console.log(`My name is : ${answer.userName}`);
