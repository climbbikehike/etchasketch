
function drawGrid (height, width){

		for (i=0; i < height; i++){
   			$('<div>').addClass('gridRows').appendTo(".container");
   		};
    
    	var squareWidth = 600/width;
	var squareHeight = 600/height;
    	for (j=0; j < width; j++){
    		$('<div>').addClass('squares').css("width",squareWidth).css("height",squareHeight).appendTo(".gridRows");	
		};

}


$(document).ready(function(){
	var height = 16;
	var width = 16;

	drawGrid(height,width);

	$('.container').on('mouseenter', '.squares', function() {
		$(this).css('background-color','blue');
});
  
});

function resetButton() {
	$('.gridRows').remove();
	$('.squares').remove();
	var squareCount = prompt("How many squares would you like?");
	var height = squareCount;
	var width = squareCount; 

	drawGrid(height, width);
};
/*function resetButton(){
	location.reload(true);	
};*/
