// axios.get('https://data.messari.io/api/v1/assets/btc/metrics')
//     .then(res => {
//         console.log(res.data.data.market_data.price_usd)
//     })
//     .catch(err => {
//         console.log("error", err)
//     })

const jokes = document.querySelector('#jokes');
const button = document.querySelector('button');
const bitPrice = document.querySelector('#bit');


const fetchBitcoinPrice = async () => {
    try {
        const res = await axios.get("https://data.messari.io/api/v1/assets/btc/metrics")
        const newH2 = document.createElement("h1")
        newH2.style = "display: inline; font-size: 100%;"
        newH2.append(res.data.data.market_data.price_usd);
        bitPrice.append(newH2)


    } catch (e) {
        console.log(e)
    }
}


fetchBitcoinPrice()



const addNewJoke = async () => {
    const jokeText = await getDadJoke();
    const newLI = document.createElement("LI");
    newLI.append(jokeText);
    jokes.append(newLI);

}
const getDadJoke = async () => {
    try {
        const config = { headers: { Accept: 'application/json' } }
        const res = await axios.get('https://icanhazdadjoke.com/', config)
        return res.data.joke;
    } catch (e) {
        console.log("OH NO. Error is happend")
    }
}
button.addEventListener('click', addNewJoke)

