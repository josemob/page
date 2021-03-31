$(document).ready(function(){
    
    $(".btn-respuesta").click(function(){
        $(".resp, .respuestas-box").addClass('view-none');
        $(".datos-box").addClass('view-block');  
    })
    
    $(".send-datos").click(function(){
        $(".resp, .datos-box").addClass('view-none');
        $(".ticket-box").addClass('view-flex');      
    
    })
    
})
