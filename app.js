fetch("https://economia.awesomeapi.com.br/json/last/usd")
.then((response) =>response.json())
.then((data) => console.log(data.USDBRL.high))
.then((error) => console.log(error));

