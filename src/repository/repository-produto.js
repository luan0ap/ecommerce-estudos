const mongoose = require('../../config/db');

module.exports = mongoose.model('Produto',
    { 
        nome: {
            type: String,
            required: true
        },
        nomepesquisa: {
            type: String,
            required: true
        },
        descricao: {
            type: String,
            required: true
        },
        preco: {
            type: Number,
            required: true
        },
        tags: [{
            type: String
        }],
        criadoEm: {
            type: Date,
            default: Date.now
        }
    }
);
