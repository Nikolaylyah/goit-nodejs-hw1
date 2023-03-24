const contactsOperations = require('./contacts');

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list': {
      const dataContactsGetAll = await contactsOperations.listContacts();
      console.table(dataContactsGetAll);
      break;
    }
    case 'get': {
      const dataGetContactById = await contactsOperations.getContactById(id);
      if (!dataGetContactById) {
        throw new Error(`Contacts with id=${id} not found`);
      }
      console.log(dataGetContactById);
      break;
    }
    case 'add':
      try {
        const newContact = await contactsOperations.addContact(name, email, phone);

        if (!newContact) {
          throw Error(`Contact with id: "${id}" does not exist!`);
        }
        console.log('newContact', newContact);
      } catch (error) {
        console.warn(error.message);
      }
      break;

    case 'remove':
      try {
        const deleteContact = await contactsOperations.removeContact(id);
        if (!deleteContact) {
          throw Error(`Contact with id: "${id}" does not exist!`);
        }
        console.log('deleteContact', deleteContact);
      } catch (error) {
        console.warn(error.message);
      }
      break;

    default: {
      console.warn('Unknown action');
      break;
    }
  }
}
module.exports = { invokeAction };
