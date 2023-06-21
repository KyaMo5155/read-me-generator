class MarkDown {
    static generateReadme(data){
        return `
        # ${answer.ttile}
        
        ## Table of Content
        - [project description](#description)
        - [Usage](#Usage)
        - [Contributing](#Contributing)
        - [Installation](#Installation)
        - [Questions](#Questions)
        - [License](#License) 

        ## Description
       ${answers.description}

        ## Usage
       ${answers.usage}

        ## Contribution
       ${answers.contribution}

        ## Installation
       ${answers.installation}

        ## Questions
       ${answers.email}
       ${answers.github}
        
        `
    }
}