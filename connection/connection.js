import { createConnection } from "mysql2";

const connection = createConnection({
    host: 'localhost',
    user: 'root',
    database: 'connectu'
})

export default connection