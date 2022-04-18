import { Pool } from 'pg';
export const pool = new Pool({
    user:'postgres',
    host:'localhost',
    password:'sunnatullox',
    database:'typescriptdatabase',
    port:5432
})