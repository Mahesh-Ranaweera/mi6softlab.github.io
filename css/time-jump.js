$(document).ready(function() {
	
	if ($('.dot2015').click){
		
		
	
    $('.dot2015').click(function(){
        $('#draggable').animate({
           'margin-left' : "=0px"
        });
    });
               
    $('.dot2014').click(function(){
        $('#draggable').animate({
            'margin-left' : "+=100px",
        });
    });
});