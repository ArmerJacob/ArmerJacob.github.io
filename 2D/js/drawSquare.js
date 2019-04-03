class DrawSquare{
	
	constructor(pColour){
		this.setColour(pColour);
	}
	
	   draw(mainContext, pMatrix) {
		
		mainContext.beginPath();
	    mainContext.fillStyle = this.getColour();
		mainContext.moveTo(-100, - 50);
        mainContext.lineTo(100 , -50);
        mainContext.lineTo(100 , 50);
        mainContext.lineTo(-100, 50);
		mainContext.closePath();
		mainContext.fill();
		mainContext.stroke();
	   }
	   setColour(pColour){
		   this.mColour = pColour;
	   }
	   getColour(){
		   return this.mColour;
	   }
}