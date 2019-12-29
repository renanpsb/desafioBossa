const databaseConfig = {
  dialect: 'mariadb',
  host: 'localhost',
  port: '3307',
  username: 'root',
  password: 'root',
  database: 'dbBossa',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};

const urlMongo = 'mongodb://localhost:27017/dbBossa';
const mongoConfig = {
  useNewUrlParser: true,
  useFindAndModify: true,
  useUnifiedTopology: true,
};

module.exports = { databaseConfig, urlMongo, mongoConfig };
