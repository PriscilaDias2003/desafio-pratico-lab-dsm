const Sequelize = require('sequelize')
const sequelize = new Sequelize("prova_lab_dsm", "root", "", {
    host: "localhost",
    dialect: "mysql"
})

sequelize.authenticate().then(() => {
    console.log("Conectado com sucesso!")
})
.catch((erro) => {
    console.error("Falha ao se conectar", erro);
})


module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}