module.exports = {
  HOST: "localhost\\MSSQLSERVER01",
  PORT: "1433",
  USER: "sa",
  PASSWORD: "test",
  DB: "JobListApps",
  dialect: "mssql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
