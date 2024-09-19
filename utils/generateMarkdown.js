
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let licenseBadge = '';
  switch(license){
    case 'MIT':
      licenseBadge = '![Static Badge](https://img.shields.io/badge/license-MIT-blue)';
      break;
    case 'ISC':
      licenseBadge = '![Static Badge](https://img.shields.io/badge/license-ISC-blue)';
      break;
    case 'APACHEv2':
      licenseBadge = '![Static Badge](https://img.shields.io/badge/license-APACHEv2-blue)';
      break;
    default:
      licenseBadge = '';
  }

  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license === 'MIT') return 'https://opensource.org/license/mit';
  if(license === 'ISC') return 'https://opensource.org/license/isc-license-txt';
  if(license === 'APACHEv2') return 'https://www.apache.org/licenses/LICENSE-2.0';
  return '';
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
 const licenseSection = `## License
[${renderLicenseLink(license)}](${renderLicenseLink(license)})
`

return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}
`;
}

export default generateMarkdown;
export { renderLicenseBadge, renderLicenseLink, renderLicenseSection }; 
