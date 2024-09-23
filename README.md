# APIAutomation-Newman

# Postman Newman Automation Project

This project automates API testing using Postman collections and environments with Newman. The results are generated as
an HTML report using the `htmlextra` reporter.

## Project Structure

- **collections/**: Contains the Postman collection files.
- **environment/**: Contains the Postman environment files.
- **runner.js**: Script to execute the Newman run using the collection and environment files.

## Prerequisites

1. **Node.js**: Ensure Node.js is installed on your system. You can download it from [here](https://nodejs.org/).
2. **Newman**: Install Newman globally by running the following command:

   ```bash
   npm install -g newman

### Install project dependencies:

In the project directory, run the following command to install required dependencies (like newman and
newman-reporter-htmlextra):

### Running the Tests

To run the Postman collection with the specified environment, execute the following command:

      ```bash
     node runner.js

This will run the collection BookingCollection.postman_collection.json against the environment
BookingEnvironment.postman_environment.json and generate an HTML report.

### Reports

The generated HTML report will be available at the root of the project directory (./htmlResults.html).