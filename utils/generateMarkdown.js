// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license!== 'None') {
    return `![Github License](https://img.shields.io/badge/license-${license}-green.svg)`
  }
  return ''
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license!== 'None') {
    return `(https://opensource.org/licenses/${license})`
  }
  return ''
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license!== 'None') {
    return (
      `## This project is licensed under the ${license} license.`)
  }
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Licensing: 
  ${renderLicenseSection(data.license)}

## Description
${data.description}
## Table of Contents
+ [Installation](#installation)
+ [Usage](#usage)
+ [Contributing](#contributing)
+ [Testing](#testing)

## Installation
  ${data.installation}

## Usage
  ${data.usage}

## Contributing
  ${data.contributing}

## Testing
  ${data.testing}
  
## Questions:
If you have any questions on the program, please contact me at Github, my name is ${data.github}, or via email at ${data.email}.
`;
}

module.exports = generateMarkdown;
