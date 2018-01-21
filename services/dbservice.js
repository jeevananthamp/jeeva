var MongoClient=require('mongodb').MongoClient;
exports.cerateConnection=function()
{
  MongoClient.connect("mongodb://jeeva:jeevanantham@ds111138.mlab.com:11138/projector1665").then(function(client)
{
  console.log("connected to mongodb");
  exports.database=client.db("projector1665");
});
}
