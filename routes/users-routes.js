const express = require('express')
const router = express.Router()

const UsersController = require('../controllers/users-controller')

router.get('/', UsersController.get)
router.get('/getall', UsersController.getAll)
router.get('/nickname', UsersController.find)
router.post('/', UsersController.create)
router.patch('/', UsersController.update)
router.patch('/nickname', UsersController.updateNickname)
router.delete('/', UsersController.delete)

module.exports = router