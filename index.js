const inquirer = require('inquirer');

const questions = [
    {
        type: "input",
        name:'tittle',
        message: 'project tittle?',
    },
    {
        type: "input",
        name:'description',
        message: 'project description?',
    },
    {
            type: "input",
            name:'installation',
            message: 'installation instructions?',
    },
    {
            type: "input",
            name:'usage',
            message: 'project usage?',
    },
    {
            type: "input",
            name:'contribution',
            message: 'contribution info?',
    },
    {
        type: "input",
        name:'email',
        message: 'for questions(email)?',
    },
    {
        type: "input",
        name:'github',
        message: 'for questions(github)?',
    },
    {
        type: "list",
        name:'license',
        message: 'license?',
        choices:['MIT', 'ISC', 'GNUPLv3'],
        filter(val){
            return val.toLowerCase();
        }
    },
    
]

//run query function
function runQuery() {
    return inquirer.prompt(questions)
    .then((answers)=>{
        console.log(answers)
        return answers
    })
    .catch((error)  => {
        console.log(error)
    })
}
runQuery()