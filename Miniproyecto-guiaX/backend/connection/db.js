const { Pool } = require('pg');

const pool = new Pool({
    user: 'neondb_owner',
    host: 'ep-curly-sound-ahcrxe5b-pooler.c-3.us-east-1.aws.neon.tech',
    database: 'neondb',
    password: 'npg_WUmQdXwNZ2f6',
    ssl: { rejectUnauthorized: false },
    //Opera en el puerto 5432 en configuracion por defecto
});

module.exports = { pool }