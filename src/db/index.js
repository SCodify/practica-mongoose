const { db } = require('../config/index.config')
const mongoose = require('mongoose')

const mongoUri = `mongodb+srv://${db.dbUsers}:${db.dbPass}@${db.dbHost}/${db.dbName}?retryWrites=true&w=majority`

const mongoConnect = async () => {
  try {
    await mongoose.connect(mongoUri)
    console.log('DB is connect')
  } catch (error) {
    console.log(error);
  }
}

module.exports = mongoConnect