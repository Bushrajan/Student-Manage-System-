#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";
// ----------------------------figlet -------------------------------
await figlet(`"Welcome to S M S "`, function (error, data) {
    if (error) {
        console.log(chalk.italic.red("Something's wrong, try again."));
        console.dir(error);
    }
    else {
        console.log(chalk.rgb(106, 356, 499)(data));
    }
});
//xxxxxxxxxxxxxxxxxxxxxxx Class of student xxxxxxxxxxxxxxxxxxxxxxxxxxxx
async function SMS() {
    class student {
        name;
        age;
        religion;
        cnic;
        id;
        course;
        balance;
        institute;
        //xxxxxxxxxxxxxxxxxxxxxxx Constuctor of student xxxxxxxxxxxxxxxxxxxxxxxxxxxx
        constructor(name, age, religion, cnic, id, course, balance, istitute) {
            this.name = name;
            this.age = age;
            this.religion = religion;
            this.cnic = cnic;
            this.id = id;
            this.course = course;
            this.balance = balance;
            this.institute = istitute;
        }
        get student_name() {
            return this.name;
        }
        get student_age() {
            return this.age;
        }
        get student_religion() {
            return this.religion;
        }
        get student_cnic() {
            return this.cnic;
        }
        get student_course() {
            return this.course;
        }
        get student_institute() {
            return this.institute;
        }
    }
    //xxxxxxxxxxxxxxxxxxxxxxx function of student_balance xxxxxxxxxxxxxxxxxxxxxxxxxxxx
    function student_balance() {
        let balance = Math.floor(Math.random() * 1000) + 9999;
        return `Rs:${balance} /-`;
    }
    //xxxxxxxxxxxxxxxxxxxxxxx function of student_unique_id xxxxxxxxxxxxxxxxxxxxxxxxxxxx
    function student_id() {
        let id = Math.floor(Math.random() * 10000) + 999;
        return `Gov_card ID-${id}`;
    }
    //xxxxxxxxxxxxxxxxxxxxxxx function of student_unique_id xxxxxxxxxxxxxxxxxxxxxxxxxxxx
    let student_array = [];
    let loop = true;
    while (loop) {
        let options = await inquirer.prompt([
            {
                name: "only_user",
                type: "list",
                message: chalk.bgCyan("\n\nHow may I help you ? And who are you? \n\n"),
                choices: [`Teacher`, `Student`],
            },
        ]);
        if (options.only_user === `Teacher`) {
            console.log("Hi faculty...");
        }
        else if (options.only_user === `Student`) {
            const user = await inquirer.prompt([
                {
                    name: "User_perform",
                    type: "list",
                    message: chalk.hex("#ED6D52")("\n\nHow may I help you ?\n\n"),
                    choices: [`Enrollment (fill all the details that needed)`, `Status of students`, `Exit the program`],
                },
            ]);
            if (user.User_perform === `Enrollment (fill all the details that needed)`) {
                let enroll = await inquirer.prompt([
                    {
                        name: "name",
                        type: "input",
                        message: chalk.yellow("\nEnter your name :"),
                        validate: function (resist) {
                            if (resist.trim() !== "") {
                                return true;
                            }
                            return "Plese complete the instruction and then keep going further.";
                        },
                    },
                    {
                        name: "age",
                        type: "input",
                        message: chalk.yellow("\nEnter your age :"),
                        validate: function (resist) {
                            if (resist.trim() !== "") {
                                return true;
                            }
                            return "Plese complete the instruction and then keep going further.";
                        },
                    },
                    {
                        name: "cnic",
                        type: "input",
                        message: chalk.yellow("\nEnter your CNIC :"),
                        validate: function (resist) {
                            if (resist.trim() !== "") {
                                return true;
                            }
                            return "Plese complete the instruction and then keep going further.";
                        },
                    },
                    {
                        name: "religion_name",
                        type: "input",
                        message: chalk.yellow("\nEnter your Religion Name :"),
                        validate: function (resist) {
                            if (resist.trim() !== "") {
                                return true;
                            }
                            return "Plese complete the instruction and then keep going further.";
                        },
                    },
                    {
                        name: "course",
                        type: "list",
                        message: chalk.yellow("\nCourse do you want to enroll in...?\n"),
                        choices: ["TypeScript", "Web-Devlopment", "Cyber_Security", "Ethical Hacking"],
                    },
                    {
                        name: "institute",
                        type: "list",
                        message: chalk.yellow("\nThe name of your Institute:\n"),
                        choices: ["Governor Sindh IT Initiative"],
                    },
                ]);
                let list = new student(enroll.name, enroll.age, enroll.cnic, enroll.religion_name, student_id(), enroll.course, student_balance(), enroll.institute);
                student_array.push(list);
                console.log(chalk.hex(`#7FFF00`)(`You are enrolled successfully.\n `));
            }
            else if (user.User_perform === `Status of students`) {
                if (student_array.length > 0) {
                    console.log(chalk.bold.bgGray(`\n\t\t\t\t\txxxxx  Student Detailed Information xxxxx`));
                    for (let i = 0; i < student_array.length; i++) {
                        const studentData = student_array[i];
                        console.log(chalk.bold.bgMagenta(`\t\t\t\t\t\t  Student No ${i + 1}  \n`));
                        console.log(chalk.italic(`\t\t\t\t\t  Name:       ${studentData.student_name}`));
                        console.log(chalk.italic(`\t\t\t\t\t  Age:        ${studentData.student_age}`));
                        console.log(chalk.italic(`\t\t\t\t\t  Religion:   ${studentData.student_religion}`));
                        console.log(chalk.italic(`\t\t\t\t\t  CNIC:       ${studentData.student_cnic}`));
                        console.log(chalk.italic(`\t\t\t\t\t  ID:         ${student_id()}`));
                        console.log(chalk.italic(`\t\t\t\t\t  Course:     ${studentData.student_course}`));
                        console.log(chalk.italic(`\t\t\t\t\t  Institute:  ${studentData.student_institute}`));
                        console.log(chalk.italic(`\t\t\t\t\t  Balance:    ${student_balance()}\n\n`));
                    }
                }
                else {
                    console.log(chalk.red `\nList is Empty Add First then it will show data...\n`);
                }
            }
            else if (user.User_perform === `Exit the program`) {
                loop = false;
            }
        }
    }
}
await SMS();
