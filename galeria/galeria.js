//jQuery

$('.galeria_img').click(function(e){

    var img=e.target.src;
    var modal= '<div class="modal" id="modal">   <img src="'+img+'" class="modal_img">    <div class="modal_boton" id="modalboton">X</div> </div>';
   
    $('body').append(modal);
    $('#modalboton').click(function(){
        $('#modal').remove();
    });
    
});

$(document).keyup(function(e){
    if(e.which==27){
        $('#modal').remove();
    }
});