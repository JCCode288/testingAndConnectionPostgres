// const { Client } = require("pg");
// const dotenv = require("dotenv");
import pkg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Client } = pkg;
const connectDb = async () => {
  try {
    const theClient = new Client({
      user: process.env.PGUSER,
      host: process.env.PGHOST,
      database: process.env.PGDATABASE,
      password: process.env.PGPASSWORD,
      port: "5432",
    });
    await theClient.connect();
    const res = await theClient.query("SELECT * FROM testing");
    console.log(res.rows);
    await theClient.end();
  } catch (error) {
    console.log(error);
  }
};

connectDb();
