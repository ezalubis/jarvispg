import pkg from "pg";

const { Client } = pkg;

export const client = new Client({
    host: "db.ttbyxcvuwkkvwiybzwoz.supabase.co",
    user: "postgres",
    password: "Iwanhanafiah",
    database: "postgres",
    port: 5432,
});
await client.connect();
console.log("cysss");
// const results = await client.query("SELECT * FROM mahasiswa");
// console.log(results.rows);
