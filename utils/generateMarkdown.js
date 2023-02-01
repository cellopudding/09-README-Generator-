// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `#**applicationTitle**
              **${data.title}**
  #GithubUsername 
  ${data.github}
  ##Description
  ${data.description} 
  ##Table of contents 
  *[description](#description)
  *[installation](#installation)
  *[usage](#usage)
  *[contributors](#contributors)
  *[tests](#tests)
  *[license](#license)
  
  ##Installation
  to install necessary dependencies run ${data.installation}
  
  
  ##Usage
  ${data.usage}


  ##Contributors
  ${data.contributors}


  ##Tests
  to run tests, run ${data.tests}


  ##License

  
  ##Questions
  If you have any questions about the repo, contact me directly at ${data.email}
  
  Check out more of my work at [${data.github}]({https://github.com/${data.github}/)



  






`;
}

module.exports = generateMarkdown;
