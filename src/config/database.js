module.exports = {
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
