
function drawGrid (height, width){

		for (i=0; i < height; i++){
   			$('<div>').addClass('gridRows').appendTo(".container");
   		};
    
    	var squareWidth = 790/width;
    	for (j=0; j < width; j++){
    		$('<div>').addClass('squares').css("width",squareWidth).css("height",squareWidth).appendTo(".gridRows");	
		};

}


$(document).ready(function(){
	var height = 16;
	var width = 16;

	drawGrid(height,width);

	$('.squares').click(function() {
		$(this).css('background-color','blue');
});
   /*$(".divTable").click(function(){
        $(".divTable").hide();
   });*/
});

function resetButton(){
	location.reload(true);	
};
