const readlineSync = require('readline-sync');

function showMenu() {
    console.log('\nMenu Pilihan:');
    console.log('1. GET - Mendapatkan data dari server');
    console.log('2. POST - Menambahkan data baru ke server');
    console.log('3. PUT - Memperbarui data yang sudah ada di server');
    console.log('4. DELETE - Menghapus data dari server');
    console.log('5. Ganti Endpoint');
    console.log('0. Exit');
}

function getMenuChoice() {
    return readlineSync.question('Pilih menu (0-5): ');
}

function getEndpoint() {
    return readlineSync.question('Masukkan URL/Endpoint: ');
}

module.exports = { showMenu, getMenuChoice, getEndpoint };

