'use strict'

document.addEventListener("DOMContentLoaded", () => {
    //get elements for dynamic pricing conversion
    let btcprice = document.getElementById("btcprice");
    let cs1price = document.getElementById("CS1price");
    let cs2price = document.getElementById("CS2price");
    let cs3price = document.getElementById("CS3price");
    let cs1sats = document.getElementById("cs1sats").innerText;
    let cs2sats = document.getElementById("cs2sats").innerText;
    let cs3sats = document.getElementById("cs3sats").innerText;
    let apiUrl = "https://api.coinmarketcap.com/v2/ticker/"

    //no payment functionality for now...
    let nopay = document.getElementById("nopay");
    let nopay2 = document.getElementById("nopay2");
    let nopay3 = document.getElementById("nopay3");

    nopay.addEventListener("click", event => {
        alert("Payment functionality disabled. Feel free to donate below. Check back soon! (^_^)");
    });

    nopay2.addEventListener("click", event => {
        alert("Payment functionality disabled. Feel free to donate below. Check back soon! (^_^)");
    });

    nopay3.addEventListener("click", event => {
        alert("Payment functionality disabled. Feel free to donate below. Check back soon! (^_^)");
    });
        fetch(`${apiUrl}`)
            //.json() method returns a Promise
            //of the response body parsed from JSON
        .then(res => res.json())
        .then(response => {
        //return current btc price
        
        let display = response.data[1].quotes.USD.price;
        //1 bitcoin = 100,000,000 satoshis
        let satoshi = display.toFixed(2)/100000000;
        btcprice.innerHTML = `<strong>BTCUSD $${display.toFixed(2)}`;
        //convert satoshi price to USD
        cs1price.innerHTML = "<strong>$" + (satoshi*cs1sats).toFixed(4);
        cs2price.innerHTML = "<strong>$" + (satoshi*cs2sats).toFixed(4);
        cs3price.innerHTML = "<strong>$" + (satoshi*cs3sats).toFixed(4);
        console.log(display);
        })
        
        .catch(err => console.log(err))
        
});
