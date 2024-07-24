The project is using Playwright with Typescript.
* Can contain different setup per environment (in the example is QA env.)
* Can accept different parameters per environment
* Can accepts CSV test data
* No auth in the project but it can be done as $ENV or a separate file
* GitHub Actions compatible
**Dependencies**
1. Install Node.JS
2. Install VS Code
3. Via VS Code install playwright
* Open the terminal in the project and type: npm init playwright@latest --yes -- --quiet --browser=chromium --browser=firefox --browser=webkit --gha
4. Install 'dotenv'
* In the terminal type: npm install dotenv --save-dev
5. Install 'cross-env':
* In the terminal type: npm install --save-dev cross-env

**How to run the project**
In project's terminal type: npm run test:api
--
This will trigger configuration in package.json > scripts
and
should run api tests via Webkit

To run it via Playwright UI:
$env:ENV="qa"
npx playwright test --ui

--
Example of Test Cases/Scenarios that can be added for comprehensive coverage:

People Endpoint:
* Retrieve Luke Skywalker’s Information:
* Send a GET request to the people endpoint: https://swapi.dev/api/people/1/.
* Verify that the response contains the expected data (name, height, mass, etc.).
Verify Films and Vehicles:
* Check if Luke Skywalker appears in the specified films and vehicles.
* Validate the film URLs and vehicle URLs.

Planets Endpoint:
* Retrieve Yavin IV’s Information:
* Send a GET request to the planets endpoint: https://swapi.dev/api/planets/3/.
Verify that the response contains the expected data (name, rotation period, climate, etc.).
* Check Films and Residents:
* Confirm that Yavin IV appears in the specified film.
Validate the film URL and the absence of residents.

Starships Endpoint:
* Retrieve Death Star’s Information:
* Send a GET request to the starships endpoint: https://swapi.dev/api/starships/9/.
* Verify that the response contains the expected data (name, model, crew, etc.).
Validate Hyperdrive Rating:
* Ensure that the hyperdrive rating is within the expected range (e.g., between 0 and 5).