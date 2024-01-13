import apiRequests from './apiRequests';
import menu from './menu';
import utils from './utils';
import consoleTable from 'console.table';
//import chalk from 'chalk/source';
import chalk from 'chalk';

let endpoint = '';
let changeEndpoint = false;

// Fungsi untuk memberikan warna pada ID dan Author
function colorizeData(data) {
  return data.map(item => ({
    id: chalk.cyanBright(item.id),
    title: item.title,
    author: chalk.greenBright(item.author)
  }));
}

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
      displayData(data);
      break;
    case '2':
      // ... (code for other menu choices)
      break;
    // ... (code for other menu choices)
  }
}

function displayData(data) {
  console.log('\nData yang diterima dari server:');
  const coloredData = colorizeData(data);
  console.table(coloredData);
}

main();

