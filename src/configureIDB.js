const PROJECT_STORE_NAME = 'projects';
const DB_NAME = 'RoyalDB';
const seedProjects = [{ name: 'Project  1', id: 1234 }, { name: 'Project  2', id: 2345 }, { name: 'Project  3', id: 3456 }];

const configureDB = () => {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open(DB_NAME, 3);

    request.onupgradeneeded = ({ target }) => {

      const objectStore = target.result.createObjectStore(PROJECT_STORE_NAME, { keyPath: 'id' });
      objectStore.createIndex('name', 'name', { unique: false });

      objectStore.transaction.oncomplete = () => {

        // Store values in the newly created objectStore.
        const projectObjectStore = target.result
          .transaction(PROJECT_STORE_NAME, 'readwrite')
          .objectStore(PROJECT_STORE_NAME);

        // seed DB with some dummy data
        seedProjects.forEach(project => {
          projectObjectStore.add(project);
        });
      };

      objectStore.transaction.onerror = ({ target }) => reject(target);
    };

    request.onsuccess = ({ target }) => {
      const transaction = target.result.transaction([PROJECT_STORE_NAME]);
      const objectStore = transaction.objectStore(PROJECT_STORE_NAME);
      const allProjects = objectStore.getAll();
      
      allProjects.onsuccess = ({ target }) => {
        resolve(target.result);
      };

      allProjects.onerror = ({ target }) => reject(target);
    };

    request.onerror = ({ target }) => reject(target);
  });
};

export default configureDB;