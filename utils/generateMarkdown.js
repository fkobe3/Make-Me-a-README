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
  return `
  # ${data.title}
  ## Licensing: 
[![license](https://img.shields.io/badge/License-${data.license}-green.svg)](https://opensource.org/licenses/${data.license})

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
## Questions:
If you have any questions on the program, please contact me at Github, my name is ${data.github}, or via email at ${data.email}.
`;
}

module.exports = generateMarkdown;
