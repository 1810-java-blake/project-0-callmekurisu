'use strict'

//dynamic date optimization
//after a while a hard coded date in the API call will error
//use results within the past week

//seconds since Unix epoch
let seconds = Math.floor(Date.now() / 1000);
//milliseconds in a week
let week = 604800 * 1000;
let useDate = (Date.now()-week);
//get last week's date
let date = new Date(useDate);
let y = date.getFullYear();
//month indexed from 0 to 11 
let mth = date.getMonth()+1;
let d = date.getDate();
//API requires two digit month
let month = () => mth < 10 ? `0${mth}`: `${mth}`;
let m = month();
let apiDate = `${y}-${m}-${d}`;
console.log(`Query date set to: ${apiDate}`);

//console.log(`Getting results since: ${apiDate}`);

document.addEventListener("DOMContentLoaded", () => {
    let form = document.getElementById("myform");
    let desc = document.getElementById("description");
    let newsurl = document.getElementById("newsurl");
    //API definition
    let apiUrl = "https://newsapi.org/v2/everything?q=";
    let apiUrl2 = `&language=en&from=${apiDate}&sortBy=publishedAt&`;
    let apiKey = "apiKey=e5de842e9935484f8af9dd1e39123056";
    form.addEventListener("submit", event => {
        //handle form default so app don't crash
        event.preventDefault();
        let form = document.getElementById("myform");
        let q = form.elements[0].value;
        console.log(q)
        //check user entry
        if(q === "bitcoin" || q === "blockchain"){
            console.log(`Fetching ${q}...`);
            //latency display
            news.innerHTML = "<h4>Fetching News...</h4>"
            desc.innerHTML = "";
            newsurl.innerHTML = "";
            
            //go fetch
            fetch(`${apiUrl}${q}${apiUrl2}${apiKey}`)
            //.json() method returns a Promise
            //of the response body parsed from JSON
            .then(res => res.json())
            .then(data => {
            
            //return random results of news articles
            let numArticles = Object.keys(data.articles).length;
            console.log(`Grabbed ${numArticles} articles.`)
            console.log("Randomizing...")
            let n = Math.floor(Math.random() * numArticles);
            
            //display response from API
            window.setTimeout(()=> {
                console.log("Here you go!")
                news.innerHTML = data.articles[n].title;
                desc.innerHTML = "<h4><strong>Abstract</strong>:</h4>"+data.articles[n].description;
                newsurl.innerHTML = '<strong>Source</strong>: <a href="'+data.articles[n].url + '" target="_blank">' + data.articles[n].source.name  + '</a>';    
                },3000);
                
            
            
        })
        .catch(err => console.log(err))
        } else {
            console.log("Invalid entry.")
            alert("Query currently limited to bitcoin or blockchain only! More results coming soon!");    
        };
    })
    
});

