'use strict'

document.addEventListener("DOMContentLoaded", () => {
    let newsBtn = document.getElementById("newsBtn");
    let q = document.getElementById("query").value;
    let desc = document.getElementById("description");
    let newsurl = document.getElementById("newsurl");

    newsBtn.addEventListener("click", event => {
        let apiUrl = "https://newsapi.org/v2/everything?q=";
        let q = document.getElementById("query").value;
        let apiUrl2 = "&language=en&from=2018-10-18&sortBy=publishedAt&";
        let apiKey = "apiKey=e5de842e9935484f8af9dd1e39123056";
        console.log(q);
        
            fetch(`${apiUrl}${q}${apiUrl2}${apiKey}`)
        
        //.json() method returns a Promise
        //of the response body parsed from JSON
        .then(res => res.json())
        .then(data => {
            //limit query text box input

            if(q === "bitcoin" || q === "blockchain"){
                //return random results of news articles
                let numArticles = Object.keys(data.articles).length;
                let n = Math.floor(Math.random() * numArticles);
                news.innerHTML = data.articles[n].title;
                desc.innerHTML = "<h4><strong>Abstract</strong>:</h4>"+data.articles[n].description;
                newsurl.innerHTML = '<strong>Source</strong>: <a href="'+data.articles[n].url + '" target="_blank">' + data.articles[n].source.name  + '</a>';
                //number of random articles to choose from
                console.log(`Articles fetched: ${numArticles}`);
            } else {
                    console.log("Invalid entry.")
                    alert("Query currently limited to bitcoin or blockchain only! More results coming soon!");
            };
        })
        .catch(err => console.log(err))
    })
    
});

