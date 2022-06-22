const conexao = require("../infraestrutura/conexao")

class cadastroRolamentos {
    adiciona(rolamento, res) {

        const sql = `INSERT INTO rolamentos (number, marca, localizacao, observacoes, codigo) VALUES ($1, $2,$3, $4, $5) RETURNING *`
        // `(${rolamento.number}, ${rolamento.marca}, ${rolamento.localizacao}, ${rolamento.observacoes}, ${rolamento.codigo} )`

        conexao.query(sql, [rolamento.number, rolamento.marca, rolamento.localizacao, rolamento.observacoes, rolamento.codigo], (erro, resultados) => {
            if (erro) {
                console.log(erro)
                res.status(400).send(erro)
            } else {
                console.log(resultados)
                res.status(201).send(resultados.rows)
            }
        })
    }
    listaRolamentos(res) {
        const sql = 'SELECT * FROM rolamentos ORDER BY number'

        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.json(erro)
            } else {
                res.status(203).json(resultados.rows)
            }
        })

    }
    buscaPorNumber(number, res) {
        const sql = `SELECT * FROM rolamentos WHERE number LIKE %${number}%`

        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.json(erro)
            } else {
                res.json(resultados.rows)
            }
        })
    }
    teste(rolamento, res) {
        console.log(rolamento)
        const sql = 'INSERT INTO rolamentos SET ?'

        conexao.query(sql, rolamento, (erro, resultados) => {
            if (erro) {
                console.log(erro)
                res.status(400).json(erro)
            } else {
                console.log(resultados)
                res.status(201).json(rolamento)
            }
        })
    }
    delete(id, res) {
        const sql = `DELETE FROM rolamentos WHERE id = ${id}`
        console.log(id)

        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                console.log(erro)
                res.status(400).json({ "erro": erro })
            }
            else {
                console.log(resultados)
                res.status(200).json({ "resultados": resultados })
            }
        })
    }
}
module.exports = new cadastroRolamentos