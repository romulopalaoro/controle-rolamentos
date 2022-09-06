const customExpress = require("./config/customExpress")
const conexao = require('./infraestrutura/conexao');
const Tabelas = require("./infraestrutura/tabelas");
const app = customExpress()
const dotenv = require('dotenv');

dotenv.config();

conexao.connect((erro) => {
    if (erro) {
        console.log(erro);
    } else {
        console.log("conectado ao Banco de Dados")

        Tabelas.init(conexao)
        let port = process.env.PORT

        app.get("/", (req, res) =>
            res.send("acesse: localhost:3333/rolamentos")

        )
        app.listen(port, () => {
            console.log("ouvindo a porta " + port);
        })
    }
})