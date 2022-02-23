class House {
    constructor(pPosition, pAngle, pScale, xVelociity, yVelocity, pRotationRate, pScaleRate, pCanvas, pAcceleration, pGravity) {
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
		this.initialiseSceneGraph();
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
	getYDistance(){
		return this.mYDistance;
	}
	setYDistance(pDistance){
		this.mYDistance = pDistance;
	}
	getXDistance(){
		return this.mXDistance;
	}
	setXDistance(pDistance){
		this.mXDistance = pDistance;
	}
	getPyDistance(){
		return this.mPyDistance;
	}
	setPyDistance(pDistance){
		this.mPyDistance = pDistance;
	}
	initialiseSceneGraph(){
		var translationMatrix = Matrix.createTranslation(this.getPosition());
		var rotationMatrix = Matrix.createRotation(this.getAngle());
		var scaleMatrix = Matrix.createScale(this.getScale());
		var translateBallMatrix = Matrix.createTranslation(new Vector(0, 0, 0));
		var translateCircle2Matrix = Matrix.createTranslation(new Vector(-37, -14, 0));
		var translateCircleMatrix = Matrix.createTranslation(new Vector(37, 14, 0));
		
		
		var translationNode = new Node(translationMatrix);
		var rotationNode = new Node(rotationMatrix);
		var scaleNode = new Node(scaleMatrix);
		var translateBallNode = new Node(translateBallMatrix);
		var translateCircle2Node = new Node(translateCircle2Matrix);
		var translateCircleNode = new Node(translateCircleMatrix);
		

		translationNode.addChild(rotationNode);
		rotationNode.addChild(scaleNode);
		scaleNode.addChild(translateBallNode);
		scaleNode.addChild(translateCircle2Node);
		scaleNode.addChild(translateCircleNode);
		translateBallNode.addChild(new DrawBall());
		translateCircleNode.addChild(new DrawCircle());
		translateCircle2Node.addChild(new DrawCircle2());
	    this.setSceneGraph(translationNode);
		
	}	
	draw(pContext, pMatrix) {
		this.getSceneGraph().draw(pContext, pMatrix);
	}
     update(pTime, pObject) {
        
		this.setYVelocity(this.getYVelocity() + this.getGravity());
		
		this.setXVelocity(this.getXVelocity() + this.getAcceleration());
		
       if(this.getPosition().getX() + (100 * this.getScale().getX()) >= this.getCanvas().width / 2){
		   if(this.getXVelocity() > 0)
		   {
         this.setXVelocity((this.getXVelocity() * -1) * 2);
		 this.setAcceleration(this.getAcceleration() * -1);
		 this.setRotationRate(this.getRotationRate() * -1);
		   }
		   this.setXVelocity(this.getXVelocity() * 0.4);
	   }
	   if(this.getPosition().getX()  -(100 * this.getScale().getX()) <= -this.getCanvas().width / 2) 
	   {
		   if(this.getXVelocity() < 0)
		   {
		   this.setXVelocity((this.getXVelocity() * -1) * 2);
		   this.setAcceleration(this.getAcceleration() * -1);
		   this.setRotationRate(this.getRotationRate() * -1);
		   }
		   this.setXVelocity(this.getXVelocity() * 0.4);
	   }
       if(this.getPosition().getY() + (100 * this.getScale().getY()) >= this.getCanvas().height / 2)
	   {
		   if(this.getYVelocity() > 0)
		   {
              this.setYVelocity((this.getYVelocity() * -1) *2);
		   }
		   this.setYVelocity(this.getYVelocity() * 0.4);
		   this.setXVelocity(this.getXVelocity() * 0.4);
	   }
	   if(this.getPosition().getY() -(100 * this.getScale().getY())  <= -this.getCanvas().height / 2) 
	   {
		   if(this.getYVelocity() < 0)
		   {
		      this.setYVelocity((this.getYVelocity() * -1) * 2);
		   }
		   this.setYVelocity(this.getYVelocity() * 0.4);
		   this.setXVelocity(this.getXVelocity() * 0.4);
	   }
	   if(this.getYVelocity() > -this.getGravity() && this.getYVelocity() < this.getGravity())
	   {
		  this.setYVelocity(0);
	  }
	   	   if(this.getXVelocity() > -this.getAcceleration() * 2 && this.getXVelocity() < this.getAcceleration() * 2)
	   {
		   this.setXVelocity(0);
	   }	   
	   if(this.getYVelocity() == 0)
	   {
		   this.setXVelocity(this.getXVelocity() * 0.7);
	   }
	   if(this.getScale().getX() > 1.5 || this.getScale().getX() < 1)
	   {
		   this.setScaleRate(this.getScaleRate() * -1);
	   }
	   if(this.getYVelocity() == 0 && this.getXVelocity() == 0)
	   {
		   this.setRotationRate(0);
	   }
	   if(this.getXVelocity() == 0)
	   {
		   this.setYVelocity(0);
	   }
	   
	   this.setXDistance(this.getPosition().getX() - pObject.getPosition().getX());
	   this.setYDistance(this.getPosition().getY() - pObject.getPosition().getY());
	   this.setPyDistance(Math.pow(this.getXDistance(),2) + Math.pow(this.getYDistance(),2));
	   this.setPyDistance(Math.sqrt(this.getPyDistance()));
	   if(this.getPyDistance() <= 200)
	   {
		 this.setXVelocity(this.getXVelocity() * -1);
		 this.setAcceleration(this.getAcceleration() * -1);
		 this.setRotationRate(this.getRotationRate() * -1);
	   }
       var newBallPos = new Vector(this.getPosition().getX() + (this.getXVelocity() * pTime), this.getPosition().getY() + (this.getYVelocity() * Math.pow(pTime, 2)));	
       this.setPosition(newBallPos);	
       var newBallRot = this.getAngle() + (pTime * this.getRotationRate());
	   this.setAngle(newBallRot);
	   var newBallScale = new Vector(this.getScale().getX() + (pTime * this.getScaleRate()), this.getScale().getY() + (pTime * this.getScaleRate()), this.getScale().getZ());
	   this.setScale(newBallScale);
	   var newPosMatrix = Matrix.createTranslation(newBallPos);
	   var newRotMatrix = Matrix.createRotation(newBallRot);
	   var newSizeMatrix = Matrix.createScale(newBallScale);
	   var rotatedMatrix = newPosMatrix.multiply(newRotMatrix);
	   var transformMatrix = rotatedMatrix.multiply(newSizeMatrix);
	   this.getSceneGraph().setMatrix(transformMatrix);
	}
}