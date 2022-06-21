class Tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criarTabelaDeRolamentos()

    }
    criarTabelaDeRolamentos() {
        const sql = 'CREATE TABLE IF NOT EXISTS Rolamentos (id int NOT NULL AUTO_INCREMENT, marca varchar(50) NOT NULL, number varchar(30) NOT NULL, codigo varchar(20), observacoes text, localizacao varchar(20) NOT NULL, PRIMARY KEY(id))'

        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log(erro)
            }
            else {
                console.log("tabela criada com sucesso");
            }
        })

    }
}
module.exports = new Tabelas