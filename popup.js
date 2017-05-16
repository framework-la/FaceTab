var url = 'https://api.themoviedb.org/3/movie/157336?api_key=78e5abe0311622cd1bfea829dac9843e&append_to_response=videos';


  $.ajax({
    type: 'GET',
    url: url,
    dataType: 'json',
    success: function (data) {
    console.log(data);

    $( document ).ready( function () {
     $( "body" ).append( $( "<h1>" + data + "</h1>" ) );
      
    
      console.log(data);

    } );
    


    }
  })

