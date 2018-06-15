const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('2126949bf7be437480eaf1f2dcf0ce51');
 
// To query top headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
function topHeadLine(country) {
  newsapi.v2.topHeadlines({
    country: country
  }).then(response => {
    for (var i in response["articles"]){
      console.log("Author: ", response["articles"][i]["author"]);
      console.log("Title: ", response["articles"][i]["title"]);
      console.log("URL: ", response["articles"][i]["url"]);
      console.log("ImageToURL: ", response["articles"][i]["urlToImage"])
      console.log(" ");
      // console.log("Source: ", response["source"]);
    }
    /*
      {
        status: "ok",
        articles: [...]
      }
    */
  });
}

module.exports.topHeadLine = topHeadLine;