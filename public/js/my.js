$(document).ready(function(){
    $( "#tikla" ).click(function yenikayit() {
        $(this).toggleClass( $("#menu").toggle() );
        //console.log($("#titlein").val());
        //console.log($("#genrein").val());
        //console.log($("#authorin").val());


         //var title= $('#titlein').val();
         //var genre= $('#genrein').val();
         //var author= $('#authorin').val();
        //console.log(title);

        var form_data = { title: ""+$('#titlein').val()+"", genre: ""+$('#genrein').val()+"" ,author:""+$('#authorin').val()+""};
    
         $.ajax({
            url: "http://localhost:8000/api/books/",
            type: 'POST',
            dataType: "json",
            data: JSON.stringify(form_data),
            contentType: "application/json",
            success: function(msg){
              console.log(form_data);
              console.log("Başarılı");
            }
        });
    });

      
      $.getJSON("http://localhost:8000/api/Books",function(data){
        $.each(data, function (key,item){
            //console.log(item.title+" "+item.genre+" "+item.author);
            $("#tablo").append("<div class="+"row"+" id="+item._id+"><div class="+"cell"+" data-title="+"Title"+">"+item.title+"</div><div class="+"cell"+" data-title="+"Genre"+">"+item.genre+"</div><div class="+"cell"+" data-title="+"Author"+">"+item.author+"</div>")      
        });          
      });

            

      $('#tablo').on('click', '.row', function(event) {
        console.log(this.id);
        var url_1="http://localhost:8000/api/books/"+this.id;

        $('#delete').click(function sil(){
            $.ajax({
                url: url_1,
                type: 'DELETE',
                success: function(result) {
                    console.log("Silindi");
                }
            });
        });        
      });
})