class DrawCircle2 {
   draw(mainContext, pMatrix) {
	   	   
	   var numSegments = 100;
	   var anglePerSegment = 0;
	   var centerX = 0;
	   var centerY = 0;
	   var radius = 60;
	   	
	mainContext.fillStyle = "#f70c95";
    mainContext.beginPath();
		var anglePerSegment = Math.PI * 2 / numSegments;
	for (var i = 0; i <= numSegments; i = i + 1) {
		var angle = anglePerSegment * i;
		var x = centerX + radius * Math.cos(angle);
		var y = centerY + radius * Math.sin(angle);
		if (i == 0) {
			mainContext.moveTo(x,y);
		}
		else {
			mainContext.lineTo(x,y);
		}
	}
	    mainContext.closePath();
        mainContext.fill();
        mainContext.stroke();
	   
	   
	   
	    /*mainContext.beginPath();
        mainContext.fillStyle = "#ff0000";
        mainContext.moveTo(-100, 50);
        mainContext.lineTo(0, -50);
        mainContext.lineTo(100, 50);
        mainContext.closePath();

        mainContext.fill();
        mainContext.stroke();
		*/
   }
}