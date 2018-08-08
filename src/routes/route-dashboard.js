const express    = require('express'),
      router     = express.Router(),
      controller = require('../controllers/controller-dashboard');

router.get('/', controller.index);
router.get('/produto', controller.todosProdutos);
router.post('/produto', controller.criarProduto);
router.delete('/produto/:id', controller.deletarProduto);
router.put('/produto/:id', controller.editarProduto);

module.exports = router;