# npn-demo

Starting a new NPM project
Something you'll end up doing a lot when you're doing JavaScript development is using NPM, installing packages, upgrading packages and running scripts.

⛳️ Open up your terminal, and create a new directory for a new project.

mkdir npm-project-setup
cd npm-project-setup

⛳️ Initialise a new NPM project in the directory.

npm init -y

👀 You'll see the contents of a new package.json file printed to the screen. You can open that file in your code editor. code .

💭 The package.json file is a manifest of our project, with information about third party libraries that are used, the type of project it is, and scripts that can be run to run and test our code. When looking at a Node.js project, you can often learn a lot about it (beyond a README file) by looking at the package.json file.

Installing a package
NPM provides millions(!) of packages, all of them can be installed with a single command.

npm install <package-name>

⛳️ We're going to write some coloured log messages to the terminal, and to do it we're going to use a popular JS package called chalk.

npm install chalk

👀 You'll see a new directory called node_modules has been created, and inside it is a directory called chalk. This is the open source code that NPM installed for us. "node_modules" is a managed folder, where NPM projects store any third party code you use.

👀 You'll also see a package-lock.json file. That's keeping track of the files. It's useful for predictable builds, but it can easily be recreated at any time by running npm install, so don't worry too much if it causes git conflicts!

Using a package
Now we've installed chalk we should be able to use it in our code.

⛳️ Create a new file called index.js and add the following code:

const chalk = require("chalk");

console.log(chalk.blue("Hello world!"));

⛳️ Run the file with node index.js.

👀 You will see an error because the above is the old way of doing it (some modules do it this way, Chalk recently updated)

JS Modules
The above syntax is CommonJS Node.js import syntax. We can switch to using modern ES6 import syntax by adding a value to our package.json.

⛳️ Add a new key to the package.json file, under the title, called "type", and set it to "module".

"type": "module",

⛳️ Change the import syntax in the index.js file to use ES6 syntax.

import chalk from "chalk";

console.log(chalk.blue("Hello world!"));

⛳️ Run the file with node index.js.

👀 You should see the message "Hello world!" printed in blue again!

Modern projects will often use the latter approach, but there is plenty of code out there that still uses the former.

Adding a script to package.json
The package.json file has a "scripts" object. We can add commands that we commonly run here. A common convention for Node.js project is to add a "dev" script, to run the script in development mode.

⛳️ Add a new script to the package.json file, called "dev", and set it to run the index.js file.

"scripts": {
"dev": "node index.js"
},

⛳️ Run the script with npm run dev.

👀 You should see the message "Hello world!" printed in blue again!

💭 It doesn't matter which you use, but we'll tend to give examples using modern ES6 syntax going forward. That means we need to make sure we've got "type": "module" in our package.json!

Adding a .gitignore file
By default git tries to manage every file in the directory.

If we want it to ignore certain files to avoid committing them to git, we can add them to a .gitignore file. This is a plain text file that lets you list filenames that you'd like git to ignore.

⛳️ Create a new file called .gitignore and add the following contents:

node_modules

This will make sure we don't commit the third party code we're using to git.

🎯 Write some pretty log messages to the terminal using chalk. Read the Chalk documentation on NPM, or Github, or in the README.md. Have fun with it.
