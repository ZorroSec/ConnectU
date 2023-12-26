import { Sequelize } from "sequelize";
import dotenv from 'dotenv/config.js'

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, '', {
    dialect: 'mysql',
    host: process.env.DATABASE_HOST
})

export default sequelize