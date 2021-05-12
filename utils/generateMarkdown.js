// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = (license) => {
  if (license === "MIT") {
    return "[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)"
  }

  else if (license === "APACHE 2.0") {
    return "[![License](https://img.shields.io/badge/License-APACHE%202.0-green.svg)](https://opensource.org/licenses/Apache-2.0)"
  }

  else if (license === "GPL 3.0") {
    return "[![License](https://img.shields.io/badge/License-GPL%203.0-purple.svg)](https://opensource.org/licenses/GPL-3.0)"
  }

  else if (license === "BSD 3") {
    return "[![License](https://img.shields.io/badge/License-BSD%203-black.svg)](https://opensource.org/licenses/BSD-3-Clause)"
  }

  else return "[![License](https://img.shields.io/badge/License-None-Red.svg)](http://shields.io/)"

};



// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return ` # ${data.title}
  
  ## Description

  ${data.description}
  
  ## Table of Contents
  
    - [Description](#description)
    - [Table of Contents](#table-of-contents)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  
  ${renderLicenseBadge(data.licenses)} 
  
  ## Contributing
  ${data.contribute}
  
  ## Tests
  ${data.tests}
  
  ## Questions
  
  - View my [GitHub](https://github.com/${data.userName})
  - Email me at ${data.email}
  

`;
};

module.exports = generateMarkdown;
