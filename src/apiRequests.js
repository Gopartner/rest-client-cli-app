const axios = require('axios');

async function get(endpoint) {
    try {
        const response = await axios.get(endpoint);
        return response.data;
    } catch (error) {
        throw new Error('Gagal mendapatkan data. Periksa koneksi atau coba lagi.');
    }
}

async function post(endpoint, data) {
    try {
        const response = await axios.post(endpoint, data);
        return response.data;
    } catch (error) {
        throw new Error('Gagal menambahkan data. Periksa koneksi atau coba lagi.');
    }
}

async function put(endpoint, id, data) {
    try {
        const response = await axios.put(`${endpoint}/${id}`, data);
        return response.data;
    } catch (error) {
        throw new Error('Gagal memperbarui data. Periksa koneksi atau coba lagi.');
    }
}

async function remove(endpoint, id) {
    try {
        const response = await axios.delete(`${endpoint}/${id}`);
        return response.data;
    } catch (error) {
        throw new Error('Gagal menghapus data. Periksa koneksi atau coba lagi.');
    }
}

module.exports = { get, post, put, remove };

