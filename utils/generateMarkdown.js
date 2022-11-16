//Array for liscenses for the badge icon
const licensesLIst = [  
  { name: 'Apache License 2.0', abbr: 'Apache', url: 'https://opensource.org/licenses/Apache-2.0'},
  { name: 'BSD 3-Clause \'New\' or \'Revised\' license', abbr: 'BSD', url: 'https://opensource.org/licenses/BSD-3-Clause'},
  { name: 'BSD 2-Clause \'Simplified\' or \'FreeBSD\' license', abbr: 'BSD', url: 'https://opensource.org/licenses/BSD-2-Clause'},
  { name: 'GNU General Public License (GPL)', abbr: 'GNU', url: 'https://opensource.org/licenses/gpl-license'},
  { name: 'GNU Library or \'Lesser\' General Public License (LGPL)', abbr: 'GNU', url: 'https://opensource.org/licenses/lgpl-license'},
  { name: 'MIT license', abbr: 'MIT', url: 'https://opensource.org/licenses/MIT'},
  { name: 'Mozilla Public License 2.0', abbr: 'Mozilla', url: 'https://opensource.org/licenses/MPL-2.0'},
  { name: 'Common Development and Distribution License', abbr: 'CDDL', url: 'https://opensource.org/licenses/CDDL-1.0'},
  { name: 'Eclipse Public License version 2.0', abbr: 'Eclipse', url: 'https://opensource.org/licenses/EPL-2.0'},
];

//compare licenses and selects the one they picked!
const fLiscense = (license) => {
  for (userLiscense of licensesLIst) {
    if (userLiscense.name === license)
    return userLiscense;
  }
}
// a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function createLiscense(license) {
  let userLiscense = fLiscense(license);
  return userLiscense ? `![license](https://img.shields.io/static/v1?label=license&message=${userLiscense.abbr}&color=brightgreen)` : '';
}

// a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let userLiscense = fLiscense(license);
  return userLiscense ? userLiscense.url : '';
}

// a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let userLiscense = fLiscense(license);
  return userLiscense ? `Licensed under ${userLiscense.name}` : '';
}

// generateMarkdown function for README creation.
function generateMarkdown(data) {
  const licenseBadge = createLiscense(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}
  ${licenseBadge}
  ## Description
  ${data.description}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution)
  * [Tests](#test)
  * [License](#license)
  * [Questions](#questions)
  * [Contacts](#contacts)
  
  ## Installation
  ${data.install}
  ## Usage
  ${data.usage}
  ## Contribution
  ${data.contribution}
  ## Tests
  ${data.test}
  ## License
  ${licenseSection}
  ${licenseLink}
  ## Questions
  ${data.questions}
  ## Contacts
  * GitHub: [${data.Github}](https://github.com/${data.Github})
  * Email: [${data.email}](mailto:${data.email})
`;
}

module.exports.generateMarkdown = generateMarkdown;