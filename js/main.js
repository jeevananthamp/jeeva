console.log("js added");
$.ajax({
  type:"GET",url:"https://localhost:3000/movies/all",
  success:function(response)
  {
    //console.log("Data from success",response);
    var data=formobject(response);
    constructDOM(data);
  },
 error:function(err)
  {
    console.log("Error from get",err);
  }
});
function formobject(response)
{
  var flags=[],categoryobject=[];
  var rlength=response.length;
  for(var i=0;i<rlength;i++)
  {
   var movie=response[i];
  //  console.log("movie",response);
  //  console.log("language",movie.language);
//  if(flags.indexOf(movie.language)==-1)
  //  flags.push(movie.language);
  //  console.log(flags);
    var index=flags.indexOf(movie.language);
    if(index>=0)
    {
      categoryobject[index].movies.push(movie);
      continue;
    }
    else
      {
        flags.push(movie.language);
      }


  var objectschema={
    "category":movie.language,
    "movies":[]
  }
  objectschema.movies.push(movie);
//console.log("objectschema",objectschema.movies);
categoryobject.push(objectschema);
}
console.log(categoryobject);
return categoryobject;
}
function constructDOM(data)
{var categorycontent=[];
  for(i=0;i<data.length;i++)
  {
    var objectschema=data[i];
    console.log("constructDOM data",objectschema);
    var catogoryTitle =$('<h3 class="categoryName">'+objectschema.category +'</h3>');
    categorycontent.push(catogoryTitle);
    for(j=0;j<objectschema.movies.length;j++)
    {
    console.log(objectschema.movies[j].name);
    var categoryMovieName=$('<div class="movie fleft"><img class="poster" src="'+objectschema.movies[j].thumbnailUrl+' ">'+objectschema.movies[j].name+'</div>');
    categorycontent.push(categoryMovieName);
  }

  }
  $('.content').html(categorycontent);
}
