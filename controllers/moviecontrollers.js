var movies =require('./moviedata');

exports.getAllMovies=function(req,res)
{
  return  res.json(movies);
}
