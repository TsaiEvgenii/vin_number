const inputEl = document.querySelector("form")
const submit = document.getElementById("button");
submit.addEventListener('click', function(event) {
  event.preventDefault();
}, false
)

async function getResponse(params) {
  let response = await fetch('https://auto.dev/api/listings?apikey=ZrQEPSkKaWhhcjk3NTZAZ21haWwuY29t')
  let content = await response.json()
  console.log(response)
}
 getResponse();

