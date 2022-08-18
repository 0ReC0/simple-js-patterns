// Dependency inversion principle

class Fetch {
  request(url) {
    // return fetch(url).then(r => r.json());
    return Promise.resolve(`data from fetch ${url}`);
  }
}

class LocalStorage {
  get(key){
    const dataFromLS = `dataFromLS ${key}`;
    return dataFromLS;
  }
}

class FetchClient {
  constructor() {
    this.fetch = new Fetch();
  }

  clientGet(url){
    return this.fetch.request(url);
  }
}

class LSClient {
  constructor() {
    this.LS = new LocalStorage();
  }

  clientGet(key){
    return this.LS.get(key);
  }
}


class Database {
  constructor(client) {
    this.client = client;
  }

  getData(query) {
    return this.client.clientGet(query);
  }
}

// const db = new Database(new FetchClient());
const db = new Database(new LSClient());

console.log(db.getData('12w'))
