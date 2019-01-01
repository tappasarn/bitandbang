'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
}

// Text + chalk definitions
const data = {
  name: chalk.white('                    Tappasarn Aramboonpong'),
  handle: chalk.white('Time'),
  work: chalk.white('Software Engineer at Agoda.com'),
  location: chalk.white('Bangkok, Thailand'),
  phone: chalk.gray('+66 ') + chalk.cyan('89 484 9658'),
  npm: chalk.gray('https://npmjs.com/') + chalk.red('~time723'),
  github: chalk.gray('https://github.com/') + chalk.green('tappasarn'),
  linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('tappasarn-aramboonpong-05aa82111'),
  web: chalk.cyan('https://taramboonpong.azurewebsites.net'),
  npx: chalk.red('npx') + ' ' + chalk.white('taramboonpong'),
  labelWork: chalk.white.bold('       Work:'),
  labelLocation: chalk.white.bold('   Location:'),
  labelPhone: chalk.white.bold('      Phone:'),
  labelnpm: chalk.white.bold('        npm:'),
  labelGitHub: chalk.white.bold('     GitHub:'),
  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
  labelWeb: chalk.white.bold('        Web:'),
  labelCard: chalk.white.bold('       Card:')
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const location = `${data.labelLocation}  ${data.location}`
const phone = `${data.labelPhone}  ${data.phone}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output = heading + // data.name + data.handle
               newline + newline + // Add one whole blank line
               working + newline + // data.labelWork + data.work
               location + newline + // data.labelOpenSource + data.opensource
               phone + newline + newline + // data.labelTwitter + data.twitter
               npming + newline + // data.labelnpm + data.npm
               githubing + newline + // data.labelGitHub + data.github
               linkedining + newline + // data.labelLinkedIn + data.linkedin
               webing + newline + newline + // data.labelWeb + data.web
               carding // data.labelCard + data.npx

fs.writeFileSync(path.join(__dirname, 'bin/output'), chalk.green(boxen(output, options)))
