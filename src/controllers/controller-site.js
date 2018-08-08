const repositoryProduto = require('../repository/repository-produto');

module.exports = {
    index: async (req, res, next) => {
        try {
            const produtos = await repositoryProduto.find();
            res.render('site/index', {title: "Área de admin", produtos});
        } catch (e) {
            res.send({status: "Erro", mensagem: e});
        }
    },
    contato: (req, res, next) => {
        res.render('site/contatos', {title: "Contato"});
    },
}