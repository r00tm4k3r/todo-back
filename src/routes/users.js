const router = require('express-promise-router')()

const {users} =require('../controllers')

router.route('/:id').get(users.get)
router.route('/:id').put(users.update)
router.route('/:id').delete(users.delete)
router.route('/').get(users.getAll)
router.route('/').post(users.create)

module.exports = router