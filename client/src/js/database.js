import { openDB } from 'idb';

const initdb = async () =>
  // create a database called jateDB with a version of 1
  openDB('jateDB', 1, {
    // create an object store called jateStore if it doesn't exist
    upgrade(db) {
      // if the object store already exists, exit
      if (db.objectStoreNames.contains('jateStore')) {
        console.log('Object Store "jateStore" already exists');
        return;
      }
      // create the object store
      db.createObjectStore('jateStore', { keyPath: 'id', autoIncrement: true });
      console.log('Created database "jateDB" and object store "jateStore".');
    },
  });

// function that accepts content and update it to the database
export const putDb = async (content) => {
  console.log('PUT to the database');
  const jateDb = await openDB('jateDB', 1);
  const tx = jateDb.transaction('jateStore', 'readwrite');
  const store = tx.objectStore('jateStore');
  // save the content to id: 1
  const request = store.put({ id: 1, content: content });
  const result = await request;
  console.log('🚀 - data saved to the database', result);
}

// function that gets all the content from the database
export const getDb = async () => {
  console.log('GET from the database');
  const jateDb = await openDB('jateDB', 1);
  const tx = jateDb.transaction('jateStore', 'readonly');
  const store = tx.objectStore('jateStore');
  // get the content with id: 1
  const request = store.get(1);
  const result = await request;
  console.log('🚀 - data retrieved from the database', result);
  // return the content
  return result.content;
}

initdb();
