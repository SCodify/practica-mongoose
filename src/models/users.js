const mongoose = require('mongoose') 

const usersCollection = 'user'

const usersSchema = mongoose.Schema({
  name: String,
  lastname: String,
  email: {
    type: String,
    unique: true,
  },
  age: Number,
  status: {
    type: Boolean,
    default: true,
  }
})

const Users = mongoose.model(usersCollection, usersSchema)

module.exports = Users