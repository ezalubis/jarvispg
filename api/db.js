import pkg from "pg";

const { Client } = pkg;

export const client = new Client({
    host: "db.tkivjkqdzjrmvijpqlot.supabase.co",
    user: "postgres",
    password: "Eza31102015",
    database: "integer",
    port: 5432,
});
await client.connect();
console.log("cysss");
// const results = await client.query("SELECT * FROM mahasiswa");
// console.log(results.rows);
