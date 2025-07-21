#!/usr/bin/env node

import { Command } from 'commander';
import {parseISO, isValid} from 'date-fns';

const program = new Command();

program
  .option('--date <string>', 'date to begin calculation')
  .option('--courtDays <boolean>', 'whether to use court days, default is calendar days')
  .option('-d, --days <numbers...>', 'number of days before or after the provided court date')


program.parse(process.argv);
const options = program.opts();

const startingDate = parseISO(options.date) ?? new Date();
const courtDays = options.courtDays ?? false;
const daysArr = options.days;

console.log(`date: ${startingDate}`);
console.log(`courtDays: ${courtDays}`);
console.log(`daysArr: ${daysArr}`);