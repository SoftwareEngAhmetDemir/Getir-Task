// config.js
const dotenv = require('dotenv').config();

module.exports = {
    DB_USER: process.env.DB_USER,
    DB_PASS: process.env.DB_PASS,
    Cluster_Name: process.env.Cluster_Name,
    Document_Name: process.env.Document_Name,
    Host_Port: 3000
};