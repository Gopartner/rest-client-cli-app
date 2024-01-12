const apiRequests = require('./apiRequests');
const menu = require('./menu');
const utils = require('./utils');

let endpoint = '';
let changeEndpoint = false;

async function main() {
    while (true) {
        menu.showMenu();

        const choice = menu.getMenuChoice();

        if (choice === '0') {
            process.exit();
        } else if (choice === '5') {
            endpoint = menu.getEndpoint();
            changeEndpoint = true;
        }

        if (!changeEndpoint && !endpoint) {
            endpoint = menu.getEndpoint();
        }

        try {
            await handleMenuChoice(choice);
        } catch (error) {
            console.error(error.message);
        }
    }
}

async function handleMenuChoice(choice) {
    switch (choice) {
        case '1':
            const getDataEndpoint = endpoint || utils.getInput('Masukkan URL/Endpoint: ');
            const data = await apiRequests.get(getDataEndpoint);
            console.log(data);
            break;
        case '2':
            const postDataEndpoint = endpoint || utils.getInput('Masukkan URL/Endpoint: ');
            const newTitle = utils.getInput('Masukkan judul baru: ');
            const newAuthor = utils.getInput('Masukkan penulis baru: ');
            const postData = await apiRequests.post(postDataEndpoint, { title: newTitle, author: newAuthor });
            console.log(postData);
            console.log('Data berhasil ditambahkan.');
            break;
        case '3':
            const putDataEndpoint = endpoint || utils.getInput('Masukkan URL/Endpoint: ');
            const idToUpdate = utils.getInput('Masukkan ID yang ingin diperbarui: ');
            const updatedTitle = utils.getInput('Masukkan judul baru: ');
            const updatedAuthor = utils.getInput('Masukkan penulis baru: ');
            const putData = await apiRequests.put(putDataEndpoint, idToUpdate, { id: idToUpdate, title: updatedTitle, author: updatedAuthor });
            console.log(putData);
            console.log('Data berhasil diperbarui.');
            break;
        case '4':
            const deleteDataEndpoint = endpoint || utils.getInput('Masukkan URL/Endpoint: ');
            const idToDelete = utils.getInput('Masukkan ID yang ingin dihapus: ');
            const deleteData = await apiRequests.remove(deleteDataEndpoint, idToDelete);
            console.log(deleteData);
            console.log('Data berhasil dihapus.');
            break;
    }
}

main();

