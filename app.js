//Test vin number is ZPBUA1ZL9KLA00848
const vinNumberEl = document.getElementById("vin_number");
let vinNumberWarningMessageEl = document.getElementById("vin_number_warning_message");
let vinNumberData = document.getElementById("vin_number_data");
const submit = document.getElementById("button");


submit.addEventListener('click', onClickFrom);

function onClickFrom(event){
    event.preventDefault();
    vinNumberData.replaceChildren();
    const vinNumber = vinNumberEl.value;
    if (validateVinNumber(vinNumber)) {
        getVinDataFromServer(vinNumber).then((vinData) => {
            renderVinData(vinData);
        })
    } else {
        vinNumberWarningMessageEl.textContent = "Что-то не так с vin number."
        setInterval(() => {
            vinNumberWarningMessageEl.textContent = '';
        }, 5000);
    }
}
//Todo: Delete after test
async function getVinData(vinNumber) {
    const API_KEY = 'ZrQEPSkKaXRmb3JzeUBnbWFpbC5jb20=';
    let response = await fetch(`https://auto.dev/api/vin/${vinNumber}?apikey=${API_KEY}`)
    return  await response.json()
}
async function getVinDataFromServer(vinNumber) {
    let requestData = {
        "vin_number": vinNumber
    };
    requestData['vin_number'] = vinNumber;
    let response = await fetch(
        'get-vin-number.php',
        {
            "method": "POST",
            "headers": {"Content-Type": "application/json; charset=utf-8"},
            "body": JSON.stringify(requestData)
        },
    );

    return await response.json();
}
function validateVinNumber(vin) {
    vin = vin.toLowerCase();
    if (!/^[a-hj-npr-z0-9]{8}[0-9xX][a-hj-npr-z0-9]{8}$/.test(vin)) {
        return false;
    }

    let transliterationTable = {
        '0': 0,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        'a': 1,
        'b': 2,
        'c': 3,
        'd': 4,
        'e': 5,
        'f': 6,
        'g': 7,
        'h': 8,
        'j': 1,
        'k': 2,
        'l': 3,
        'm': 4,
        'n': 5,
        'p': 7,
        'r': 9,
        's': 2,
        't': 3,
        'u': 4,
        'v': 5,
        'w': 6,
        'x': 7,
        'y': 8,
        'z': 9
    };

    let weightsTable = [8, 7, 6, 5, 4, 3, 2, 10, 0, 9, 8, 7, 6, 5, 4, 3, 2];
    let sum = 0;

    for (let i = 0; i < vin.length; ++i) {
        sum += transliterationTable[vin.charAt(i)] * weightsTable[i];
    }

    let mod = sum % 11;
    return mod === 10 ? vin.charAt(8) === 'x' : vin.charAt(8) == mod;
}
function renderVinData(data){
    vinNumberData.appendChild(window.renderjson(data));
}


