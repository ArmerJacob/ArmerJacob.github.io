class DrawCircle {
   draw(mainContext, pMatrix) {   
	   	   	   
	   var numSegments = 100;
	   var anglePerSegment = 0;
	   var centerX = 0;
	   var centerY = 0;
	   var radius = 60;
	   	
	mainContext.fillStyle = "#dff70c";
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
	   
	   
	   
        //mainContext.beginPath();
        //mainContext.fillStyle = "#00ee00";
        //mainContext.moveTo(-20, -35);
        //mainContext.lineTo(20, -35);
        //mainContext.lineTo(20,35);
        //mainContext.lineTo(-20, 35);
        //mainContext.closePath();

        //mainContext.fill();
        //mainContext.stroke();
   }
}