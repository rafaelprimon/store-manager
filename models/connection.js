const { MongoClient } = require('mongodb');

const OPTIONS = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const MONGO_DB_URL = 'mongodb://mongodb:27017/StoreManager';
//  const MONGO_DB_URL = 'mongodb://localhost:27017/StoreManager';
const DB_NAME = 'StoreManager';

let db = null;

const connection = () => (db
  ? Promise.resolve(db)
  : MongoClient.connect(MONGO_DB_URL, OPTIONS)
  .then((conn) => {
  db = conn.db(DB_NAME);
  return db;
  }));

module.exports = connection;

/* código de conexão do contéudo do course - apenas com alteração do localhost para rodar testes locais antes de fazer os pushs */
