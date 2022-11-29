const router = require('express-promise-router')()

const {tasks} =require('../controllers')

router.route('/:id').get(tasks.get)
router.route('/:id').put(tasks.update)
router.route('/:id').delete(tasks.delete)
router.route('/').get(tasks.getAll)
router.route('/').post(tasks.create)

module.exports = router