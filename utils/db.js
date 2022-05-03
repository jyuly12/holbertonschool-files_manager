const { MongoClient } = require('mongodb');

const host = process.env.DB_HOST || 'localhost';
const port = process.env.DB_PORT || 27017;
const database = process.env.DB_DATABASE || 'files_manager';

class DBClient {
  constructor() {
    const url = `mongodb://${host}:${port}/`;
    this.client = null;

    MongoClient.connect(url, (err, newdb) => {
      if (!err) {
        this.client = newdb.db(database);
      } else this.client = false;
    });
  }

  isAlive() {
    if (this.client) return true;
    return false;
  }

  async nbUsers() {
    return this.client.collection('users').countDocuments();
  }

  async nbFiles() {
    return this.client.collection('files').countDocuments();
  }
}

const dbClient = new DBClient();
export default dbClient;
