const { Router } = require('express')
const Users = require('../models/users')

const router = Router()

router.get('/', async (req, res) => {
  try {
    const users = await Users.find({status: true}, {status: 0, __v: 0})
    res.json({ message: users })
  } catch (error) {
    res.json({ message: error })
  }
})

router.post('/', async (req, res) => {
  try {
    const {name, lastname, email, age} = req.body
    const userInfo = {
      name,
      lastname,
      email,
      age,
    }
  
    const newUser = await Users.create(userInfo)
  
    res.json({ 
      message: 'users post',
      newUser
    })
  } catch (error) {
    res.json({ message: error })
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const { id } = req.params

    await Users.updateOne({_id: id}, req.body )

    res.json({ message: "User updated" })
  } catch (error) {
    res.json({ message: error })
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params

    await Users.updateOne({_id: id}, {status: false}) 

    res.json({ message: "User deleted" }) 
  } catch (error) {
    res.json({ message: error })
  }
})

module.exports = router