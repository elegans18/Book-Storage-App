$(document).ready(function(){
    $( "#tikla" ).click(function() {
        $( this ).toggleClass( $(".menu").toggle() );
        console.log($("#titlein").val());
        console.log($("#genrein").val());
        console.log($("#authorin").val());


        $.getJSON("http://localhost:8000/api/Books",function(data){
            $.each(data, function (key,item){
                console.log(item.title+" "+item.genre+" "+item.author);
                $("#titleid").text(item.title);      
            });          
          });
      });
})