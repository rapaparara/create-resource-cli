#!/usr/bin/env node

const yargs = require('yargs')
const { hideBin } = require('yargs/helpers')
const { createResource } = require('./commands/createResource')
const { getFieldDetails } = require('./utils/promptHandler')

yargs(hideBin(process.argv))
   .command(
      'create-resource <resourceName>',
      'Buat resource baru dengan model, validasi, controller, dan route',
      (yargs) => {
         yargs.positional('resourceName', {
            describe: 'Nama resource yang ingin dibuat',
            type: 'string',
         })
      },
      async (argv) => {
         const fields = await getFieldDetails()
         createResource(argv.resourceName, fields)
      }
   )
   .help().argv
