import { Sequelize } from "sequelize";
import sequelize from "../db/db.js";

const Posts = sequelize.define('posts', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    post: {
        type: Sequelize.STRING,
        allowNull: false
    },
    data: {
        type: Sequelize.DATE,
        allowNull: false
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

export default Posts