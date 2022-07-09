import mongoose from "mongoose"
import config from "../config.js"

mongoose.connect(config.connectionString);

let db = mongoose.connection;

export default db;