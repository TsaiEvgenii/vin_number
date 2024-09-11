// Todo: получить dom element который содержит значение vin number
const vinNumberEl = '';
// Todo: получить dom element который будет наполняться данными об авто
const vinDataContent = '';
const submit = document.getElementById("button");
//Todo: используй onClickSubmitFrom вместо анонимной функции
submit.addEventListener('click', function (event) {
        event.preventDefault();
    }, false
)

//Todo: Использовать эту функцию для event listener
function onClickSubmitForm(event){
    // Todo: 1. Получить значение vinNumber
    const vinNumber = '';
    // Todo: 2. Проверить данное значение
    if (validateVinNumber(vinNumber)) {
        //Todo: 2.1 Забираем данные и отрисовываем в блоке для этого предназначенном
        // Прочитать про промисы https://learn.javascript.ru/promise-basics
        getVinData(vinNumber).then((vinData) => {
        }).catch((data) => {
        })

    } else {
        // Todo: 2.2 Если номер не валидный добавить сообщение под инпутом с номером которое исчезнет через 6 сек.
        // https://learn.javascript.ru/settimeout-setinterval
    }
}
//Todo: для начала просто проверь на длинну строки
function validateVinNumber(vinNumber){
    return true;
}

//Называй функции и параметры для них что бы было максимально понятно что они делают
async function getVinData(vinNumber) {
    // Todo: используй vinNumber параметр в пути для fetch https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
    // Пример запроса - https://auto.dev/api/vin/ZPBUA1ZL9KLA00848?apikey=ZrQEPSkKaXRmb3JzeUBnbWFpbC5jb20=
    // а не то что ты используешь. Будь внимательнее
    // Прочитать https://learn.javascript.ru/async-await
  let response = await fetch('https://auto.dev/api/listings?apikey=ZrQEPSkKaWhhcjk3NTZAZ21haWwuY29t')
  return await response.json()
}