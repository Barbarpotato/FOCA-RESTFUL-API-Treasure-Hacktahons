async function test() {
    await fetch('https://treasure-hacktahons-backend-api.vercel.app//sellers')
        .then((response) => response.json())
        .then((data) => console.log(data[0].transaction_history[0]));
}

const data = test()
return data