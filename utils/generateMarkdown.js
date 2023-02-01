// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'None'){
    return `![github license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
    return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'None'){
    return `\n* [License](#license)\n`
  }
    return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'None'){
    return `## License
${license} 
    `
  }
  return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
# ${data.title} 
${renderLicenseBadge(data.license)}
  
## Description
${data.description} 
## Table of Contents 
* [Description](#description)\n
* [Installation](#installation)\n
* [Usage](#usage)\n
* [Contributors](#contributors)\n
* [Tests](#tests)\n
${renderLicenseLink(data.license)}
  
  
## Installation
${data.installation}
  
  
## Usage
${data.usage}


## Contributors
${data.contributors}


## Tests
${data.tests}


${renderLicenseSection(data.license)}


  
## Questions
-If you have any questions, contact me directly at ${data.email}
  
-Check out more of my work at [${data.github}]({https://github.com/${data.github}/)
`;
}

module.exports = generateMarkdown;
