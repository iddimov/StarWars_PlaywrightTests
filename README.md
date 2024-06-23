The project is using Playwright with Typescript and can initial work to pass parameters is done.
* Can contain different setup per environment (in the example is QA env.)
* Can accept different parameters per environment
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