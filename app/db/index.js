//  (1) import package mongoose
const mongoose = require("mongoose");

// (2) kita import konfigurasi terkait MongoDB dari app/config/index.js
const { urlDB } = require("../config");

// (3) connect ke MongoDB menggunakan konfigurasi diatas
mongoose.connect(urlDB);

// (4) simpan koneksi ke variabel db
const db = mongoose.connection;

// (5) export db supaya bisa di gunakan oleh file lain yang membutuhkan
module.exports = db;
