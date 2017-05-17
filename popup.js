//document is ready
$(function(){
//define variable for movies
var $movies = $('#movies');
var url = 'https://api.themoviedb.org/3/movie/popular?api_key=a876e09a990890085ce0f2ea47a30a1d&language=en-US&page=1';
  $.ajax({
    type: 'GET',
    url: url,
    dataType: 'json',
    success: function (movies) {
      console.log (movies);
      $.each(movies.results, function(i,movie) {
        $movies.append('<li>' + movie.title + '</li>');
        console.log(movie.poster_path);
        $movies.append('<p>' + movie.overview  + '</p>');
        $movies.append('<p>' + "<img src = http://image.tmdb.org/t/p/w92/" + movie.poster_path  + '>' + '</p>');
       



      });
    }
  });
});



