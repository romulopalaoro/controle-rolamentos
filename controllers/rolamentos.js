const cadastroRolamentos = require("../models/cadastroRolamentos")
const cors = require("cors")

module.exports = app => {

    app.use(cors())
    app.get('/rolamentos', cors(), (req, res) => {
        cadastroRolamentos.listaRolamentos(res)
    })

    app.post('/cadastro', cors(), async (req, res) => {
        const rolamento = req.body
        await cadastroRolamentos.adiciona(rolamento, res).then(() => console.log("ok")).cath(() => console.log("error"))
    })

    app.get(`/rolamentos/:number`, cors(), (req, res) => {

        const numberRolamento = toString(req.params.number)

        cadastroRolamentos.buscaPorNumber(numberRolamento, res)
    })

    app.delete('/rolamentos/:id', cors(), (req, res) => {
        const id = req.params.id
        console.log(id)
        cadastroRolamentos.delete(id, res)
    })

}