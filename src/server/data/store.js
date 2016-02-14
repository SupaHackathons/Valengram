/* Datastore implementations */

/* Helper method for raising errors on stores that do not conform
 * to the interface
 */
function NotImplementedError (storeName, method) {
  return {
    'name': 'NotImplementedError',
    'message': `${method}() not implemented on ${storeName}`
  };
}

/* Interface which defines all the methods that should be available
 * on our stores
 */
export class StoreInterface {
  constructor () { this.name = 'StoreInterface'; };

  createGram (id, entry) {
    throw NotImplementedError(this.name, 'createGram');
  };
  getGram (id) {
    throw NotImplementedError(this.name, 'getGram');
  };
}

/* In-memory datastore */
export class MemoryStore extends StoreInterface {
  constructor () {
    super();
    this.name = 'MemoryStore';
    this.data = {'grams': {}};
  };

  createGram (id, newGram) {
    let gram = this.getGram(id);
    if (!gram) {
      this.data['grams'][id] = newGram;
      return newGram;
    };
  }

  getGram (id) {
    return this.data['grams'][id];
  };
};
