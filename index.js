const scriptURL = 'https://script.google.com/macros/s/AKfycbyQ8kTtHQgcRgpKHFzSK26CtZzBY0f3aqppnV9YdUqo9JWwjRlbZDkUdoq5Dl9VR51M/exec'
const form = document.forms['submit-to-google-sheet'];
const msg = document.querySelector("#msg");
form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Thanks for Subscribing"
        setTimeout(function(){
        msg.innerHTML = "Thanks for Subscribing"
        },5000)
        form.reset()
    })
    .catch(error => console.error('Error!', error.message))});

