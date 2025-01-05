const generateIdBtn = document.getElementById('generateIdBtn');
const checkIdBtn = document.getElementById('checkIdBtn');
const idInput = document.getElementById('idInput');
const output = document.getElementById('output');

// local storage-დან მონაცემების აღდგენა
let ids = JSON.parse(localStorage.getItem('ids')) || [];

// რენდომ ID-ს გენერაცია და დამატება
generateIdBtn.addEventListener('click', () => {
    const randomId = Math.floor(Math.random() * 1000000).toString(); // რენდომ ID
    ids.push(randomId); // ID-ს დამატება მასივში
    localStorage.setItem('ids', JSON.stringify(ids)); // local storage-ში შენახვა
    alert(Generated ID: ${randomId});
});

// ID-ის შემოწმება
checkIdBtn.addEventListener('click', () => {
    const idToCheck = idInput.value.trim();
    const index = ids.indexOf(idToCheck); // ID-ს ძებნა მასივში

    if (index !== -1) {
        output.textContent = ID Found: key-${idToCheck}, value-${index};
    } else {
        output.textContent = ID Not Found;
    }
});
