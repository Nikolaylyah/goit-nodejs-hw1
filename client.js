const { invokeAction } = require('.');
const { program } = require('commander');

program
  .option('-a, --action <type>', 'contact operation')
  .option('-i, --id <type>', 'contact id')
  .option('-n, --name <type>', 'contact name')
  .option('-p, --phone <type>', 'contact phone')
  .option('-e, --email <type>', 'contact email');

program.parse(process.argv);

const argv = program.opts();

invokeAction(argv);
