// 1. initialise a new npm project in the directory by using terminal command npm init -y.
// add "type": "module" to the package.json file do not change lock.json file this is needed for the app to run and if lost can be re installed by running npm install again. run app.js in the terminal with command node app.js

import chalk from "chalk";

console.log(chalk.blue("Hello world!"));

const log = console.log;

// Combine styled and normal strings
log(chalk.blue("Hello") + " World" + chalk.red("!"));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold("Hello world!"));

// Pass in multiple arguments
log(chalk.blue("Hello", "World!", "Foo", "bar", "biz", "baz"));

// Nest styles
log(chalk.red("Hello", chalk.underline.bgBlue("world") + "!"));

// Nest styles of the same type even (color, underline, background)
log(
  chalk.green(
    "I am a green line " +
      chalk.blue.underline.bold("with a blue substring") +
      " that becomes green again!"
  )
);

import { countDownDateAndTime } from "countdown-date-time";
const conduct_date = "2024-07-17 00:00:00";
const countDown = countDownDateAndTime(conduct_date);
console.log("Time Difference:", countDown);
