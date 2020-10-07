// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ## Description
  
  ${data.description}

  ## Technologies used
  
  ${data.technologies}

  ## Table of Contents

  ${data.contents}

  ## Installation

  ${data.installation} 
  
  ## Usage
  
  Link to the deployed application: [Github Pages](${data.pagesURL})
  
  ## Credits

  ${data.credits}

  ## License

  ${data.License}

  ## Badges

  ${data.badge}

  ## Contributing
  
  - **[Anjali Pant](https://github.com/Anjali9293)** - *Weather Dashboard application Development*
  
  ## Tests

  ${data.tests}
`;
}

module.exports = generateMarkdown;
