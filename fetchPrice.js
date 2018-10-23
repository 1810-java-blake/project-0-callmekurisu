'use strict'

document.addEventListener("DOMContentLoaded", () => {

    let btcprice = document.getElementById("btcprice");
    let cs1price = document.getElementById("CS1price");
    let cs2price = document.getElementById("CS2price");
    let cs3price = document.getElementById("CS3price");

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
        let satoshi = display.toFixed(2)/100000000;
        btcprice.innerHTML = `<strong>BTCUSD $${display.toFixed(2)}`;
        cs1price.innerHTML = "<strong>$" + (satoshi*100).toFixed(4);
        cs2price.innerHTML = "<strong>$" + (satoshi*200).toFixed(4);
        cs3price.innerHTML = "<strong>$" + (satoshi*300).toFixed(4);
        console.log(display);
        })
        
        .catch(err => console.log(err))
        
});
