const repositoryProduto = require('../repository/repository-produto');

module.exports = {
    index: async (req, res, next) => {
        try {
            const produtos = await repositoryProduto.find();
            res.render('dashboard/index', {title: "Área de admin", produtos});
        } catch (e) {
            res.send({status: "Erro", mensagem: e});
        }
    },
    todosProdutos: async (req, res, next) => {
        try {
            const produtos = await repositoryProduto.find();
            res.send(produtos.length > 0 ? produtos : 'Nenhum produto cadastrado');
        } catch (e) {
            res.send({status: "Erro", mensagem: e});
        }
    },
    criarProduto: async (req, res, next) => {
        try {
            const produto = new repositoryProduto(req.body);
            await produto.save();
            res.send({status: "Sucesso", mensagem: "Produto criado com sucesso."});
        } catch (e) {
            res.send({status: "Erro", mensagem: e});
        }
    },
    deletarProduto: async (req, res, next) => {
        try {
            await repositoryProduto.findByIdAndRemove(req.params.id);
            res.send({status: "Sucesso", mensagem: "Produto deletado com sucesso."});            
        } catch (e) {
            res.send({status: "Erro", mensagem: e});
        }
    },
    editarProduto: async (req, res, next) => {
        try {
            await repositoryProduto.findByIdAndUpdate(req.params.id, req.body);
            res.send({status: "Sucesso", mensagem: "Produto editado com sucesso."});
        } catch {
            res.send({status: "Erro", mensagem: e});
        }
    }
}