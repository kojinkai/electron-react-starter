import { generateID } from './generateID';
const DASHBOARD_STORE_NAME = 'dashboard';
const DB_NAME = 'MyStarterIDB';
const seedProjects = [1, 2, 3].map((entry, idx) => {
  return { name: `item  ${idx + 1}`, id: generateID() }
});

let dbConnection;

export const configureIDB = () => {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open(DB_NAME, 3);

    request.onupgradeneeded = ({ target }) => {
      dbConnection = target.result;

      const objectStore = target.result.createObjectStore(DASHBOARD_STORE_NAME, { keyPath: 'id' });
      objectStore.createIndex('name', 'name', { unique: false });

      objectStore.transaction.oncomplete = () => {

        // Store values in the newly created objectStore.
        const projectObjectStore = target.result
          .transaction(DASHBOARD_STORE_NAME, 'readwrite')
          .objectStore(DASHBOARD_STORE_NAME);

        // seed DB with some dummy data
        seedProjects.forEach(project => {
          projectObjectStore.add(project);
        });
      };

      objectStore.transaction.onerror = ({ target }) => reject(target);
    };

    request.onsuccess = ({ target }) => {
      dbConnection = target.result;
      const transaction = target.result.transaction([DASHBOARD_STORE_NAME]);
      const objectStore = transaction.objectStore(DASHBOARD_STORE_NAME);
      const allProjects = objectStore.getAll();

      allProjects.onsuccess = ({ target }) => resolve(target.result.sort((a, b) => a.name > b.name));
      allProjects.onerror = ({ target }) => reject(target);
    };

    request.onerror = ({ target }) => reject(target);
  });
};

export const saveToDB = ({
    name = 'item x',
    id = generateID()
  } = {}) => {
  return new Promise((resolve, reject) => {
    const transaction = dbConnection.transaction(DASHBOARD_STORE_NAME, 'readwrite');
    const objectStore = transaction.objectStore(DASHBOARD_STORE_NAME);
    const saveRequest = objectStore.add({ name, id });

    saveRequest.onsuccess = event => resolve(event);
    saveRequest.onerror = event => reject(event);
  });
};
