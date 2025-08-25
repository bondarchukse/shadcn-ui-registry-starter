const fs = require('fs');

fs.cp('registry.json', 'public/r/registry.json', (error) => {
    if (error) {
        console.error(error);
    } else {
        console.log('Registry started successfully.');
    }
});

