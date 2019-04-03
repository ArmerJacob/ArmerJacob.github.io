class BackgroundSquare{
     constructor(pPosition, pAngle, pScale, xVelociity, yVelocity, pRotationRate, pScaleRate, pCanvas, pAcceleration, pGravity, pColour) {
        this.setPosition(pPosition);
        this.setAngle(pAngle);
        this.setScale(pScale);
	    this.setXVelocity(xVelociity);
		this.setYVelocity(yVelocity);
		this.setRotationRate(pRotationRate);
		this.setScaleRate(pScaleRate);
		this.setCanvas(pCanvas);
		this.setAcceleration(pAcceleration);
		this.setGravity(pGravity);
		this.setObject(pColour);
		this.initialiseSceneGraph();
    }
	getObject(){
		return this.mObject;
	}
	setObject(pColour){
		 this.mObject = new DrawSquare(pColour);
	}
	getGravity(){
		return this.mGravity;
	}
	setGravity(pGravity){
		this.mGravity = pGravity;
	}
	getAcceleration(){
		return this.mAcceleration;
	}
	setAcceleration(pAcceleration){
		this.mAcceleration = pAcceleration;
	}
	getCanvas() {
		return this.mCanvas;
	}
	setCanvas(pCanvas) {
		this.mCanvas = pCanvas;
	}
	getRotationRate(){
		return this.mRotationRate;
	}
	setRotationRate(pRotationRate){
		this.mRotationRate = pRotationRate;
	}
	getScaleRate(){
		return this.mScaleRate;
	}
	setScaleRate(pScaleRate){
		this.mScaleRate = pScaleRate;
	}
    getPosition() {

        return this.mPosition;
    }
    setPosition(pPosition) {
        this.mPosition = pPosition;
    }
    getAngle() {

        return this.mAngle;
    }
    setAngle(pAngle) {
        this.mAngle = pAngle;
    }
    getScale() {

        return this.mScale;
    }
    setScale(pScale) {
        this.mScale = pScale;
    }
	getSceneGraph() {
		return this.mScenegraph;
	}
	setSceneGraph(pNode){
		this.mScenegraph = pNode;
	}
	getXVelocity(){
		return this.mXVelocity;
	}
	setXVelocity(pVelocity){
		this.mXVelocity = pVelocity;
	}
	getYVelocity(){
		return this.mYVelocity;
	}
	setYVelocity(pYVelocity){
		this.mYVelocity = pYVelocity;
	}
	initialiseSceneGraph(){
		var translationMatrix = Matrix.createTranslation(this.getPosition());
		var rotationMatrix = Matrix.createRotation(this.getAngle());
		var scaleMatrix = Matrix.createScale(this.getScale());
		var translateSquareMatrix = Matrix.createTranslation(new Vector(0,0, 0));

		
		
		var translationNode = new Node(translationMatrix);
		var rotationNode = new Node(rotationMatrix);
		var scaleNode = new Node(scaleMatrix);
		var translateSquareNode = new Node(translateSquareMatrix);

		

		translationNode.addChild(rotationNode);
		rotationNode.addChild(scaleNode);
		scaleNode.addChild(translateSquareNode);
		translateSquareNode.addChild(this.getObject());
	    this.setSceneGraph(translationNode);
	}

	draw(pContext, pMatrix) {
		this.getSceneGraph().draw(pContext, pMatrix);
	}
	
	update(pTime) {		
      
	   if(this.getScale().getX() > 2)
	   {
		   if(this.getScaleRate() > 0)
		   {
		   this.setScaleRate(this.getScaleRate() * -1);
		   }
	   }
	   if(this.getScale().getX() < 0){
		   if(this.getScaleRate() < 0)
		   {
			this.setScaleRate(this.getScaleRate() * -1);
		   }
	   }
       var newSquarePos = new Vector(this.getPosition().getX() + (this.getXVelocity() * pTime), this.getPosition().getY() + (this.getYVelocity() * Math.pow(pTime, 2)));	
       this.setPosition(newSquarePos);	
       var newSquareRot = this.getAngle() + (pTime * this.getRotationRate());
	   this.setAngle(newSquareRot);
	   var newSquareScale = new Vector(this.getScale().getX() + (pTime * this.getScaleRate()), this.getScale().getY() + (pTime * this.getScaleRate()), this.getScale().getZ());
	   this.setScale(newSquareScale);
	   var newPosMatrix = Matrix.createTranslation(newSquarePos);
	   var newRotMatrix = Matrix.createRotation(newSquareRot);
	   var newSizeMatrix = Matrix.createScale(newSquareScale);
	   var rotatedMatrix = newPosMatrix.multiply(newRotMatrix);
	   var transformMatrix = rotatedMatrix.multiply(newSizeMatrix);
	   this.getSceneGraph().setMatrix(transformMatrix);
	}
}