import { Sequelize } from "sequelize";
import dotenv from 'dotenv/config.js'

const sequelize = new Sequelize('connectu', 'root', '', {
    dialect: 'mysql',
    host: 'localhost'
})

export default sequelize