const db = require('../../db');
const mongoClient = require('mongodb').MongoClient;
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('2126949bf7be437480eaf1f2dcf0ce51');

 
// To query top headlines
// All options passed to topHeadlines are optional, but you need to include at least one of them
function getAllSources() {
  var newsAPISources = [];
  newsapi.v2.sources({
    
  }).then(response => {

    for (var i in response["sources"]){
      var feedObj = {
        title: response["sources"][i]["name"],
        link: response["sources"][i]["url"],
        category: response["sources"][i]["category"],

      };
      newsAPISources.push(feedObj);
    }
    connectToNewsDB(newsAPISources);
  });

}

function connectToNewsFeedDB(newsSourcesJSON) {
  var url = db.mongoNews;

  mongoClient.connect(url, (err, dbase) => {
    if (err) {
      console.log("Sorry error", err);
    } else {
      var dbo = dbase.db("news");
      var feedsCollection = dbo.collection("sources");
      console.log("Connection Succesful", url);
      for(var i in newsSourcesJSON) {
        insertFeedDoc(feed[i], feedsCollection); 
      }
      dbase.close();
    }
  });
}

function insertFeedDoc(feedObject, collection){
  var record = 0;
  collection.insert(feedObject, (err, feedInsert) => {
    if(err) {
      console.log("Bad");
    } else {
      console.log("All Feeds Inserted");
    }
 });
}


module.exports.getAllSources = getAllSources;