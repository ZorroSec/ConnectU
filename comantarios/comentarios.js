import { Sequelize } from "sequelize";
import sequelize from "../db/db.js";

const Comentarios = sequelize.define("comentarios", {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    idpost: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    comentario: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

export default Comentarios