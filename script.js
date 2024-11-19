const scriptURL = 'https://script.google.com/macros/s/AKfycbw_EwjkL5Ct4QUVaEIVA8SpN5cgxaARHrXxtaWp1g9MfnuStPWMszL9k478g3vPJp1Ixw/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById("msg")

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Thank You For Subscribing"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })