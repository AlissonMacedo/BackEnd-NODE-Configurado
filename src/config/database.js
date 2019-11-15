module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgre',
  password: 'docker',
  database: 'gobarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
