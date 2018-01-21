var movies =require('./moviedata');
var dbservice=require('../services/dbservice');
exports.getAllMovies=function(req,res,next)
{
  console.log("dbservice",dbservice);
  var db=dbservice.database;
  var moviescollection=db.collection("movies");
  moviescollection.find().toArray().then(function(result)
  {
    console.log("result",result);
    var outputJSON={"isSuccess":true,"data":result};
    return  res.json(outputJSON);

  });
};
exports.addNewMovie=function(req,res,next)
{
  var db=dbservice.database;
   movies=req.body;
   moviescollection=db.collection("movies");

  moviescollection.insert(movies).then(function(save_data)
{
  return res.json({
    "is success":true
  });
});
}
