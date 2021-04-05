// generateReadme function populating the README.md
function generateReadme(answers) {
    return `
<h1 align="center">${answers.projectTitle}</h1>
  
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)<br />
## Description
${answers.description}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [License](#license)
- [Contributing](#contributing)
- [Questions](#questions)
## Installation
${answers.installation}
## License
![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
<br />
This application is covered by the ${answers.license} license. 
## Contributing
${answers.contributing}
## Questions
${answers.questions}<br />
<br />
Find me on GitHub: [${answers.username}](https://github.com/${answers.username})<br />
<br />
Email: ${answers.email}<br /><br />`;
  }
  
  module.exports = generateReadme;