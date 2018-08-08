const express    = require('express'),
      router     = express.Router(),
      controller = require('../controllers/controller-site');

router.get('/', controller.index);
router.get('/contato', controller.contato);

module.exports = router;