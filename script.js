function drawGrid(height,width) {
	//var singleDiv = document.createElement('div');

	for (i=0; i < height; i++) {
		$('<div>').appendTo('.container');
	};
}


$(document).ready(function(){
	var height = 16;
	var width = 16;

	drawGrid(height,width);


   /*$(".divTable").click(function(){
        $(".divTable").hide();
   });*/
});
