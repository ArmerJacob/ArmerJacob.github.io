5//the window load event handler
function onLoad() {
    var mainCanvas, mainContext, housePosition, houses,backgroundSceneGraph, i, j, matrix, origin, originMatrix, rootNode, translationNode, houseXVelocity, mGravity;


    //this function will initialise our variables
    function initialiseCanvasContext() {
        //find the canvas element using its attribute.
        mainCanvas = document.getElementById('mainCanvas');
        // if it couldn't be found
        if (!mainCanvas)
        {
            //make a message box pop up with the error.
            alert('Error: I cannot find the canvas element!');
            return;
        }
        //Get the 2D canvas Context.
        mainContext = mainCanvas.getContext('2d');
        if (!mainContext)
        {
            alert('Error: failed to get context');
            return;
        }
		mGravity = 0.5;
		var lastTime = Date.now();

        houses = [];
		backgroundSceneGraph = [];

        housePosition = new Vector(-200,-150);
        houseRotation = 0;
        houseScale = new Vector(1, 1, 1);
		houseXVelocity = 1;
		houseScaleRate = 0;
		houseYVelocity = 0;
		houseRotationRate = 0.2;
		houseAcceleration = 0.5;

        houses.push(new House(housePosition, houseRotation, houseScale, houseXVelocity, houseYVelocity, houseRotationRate, houseScaleRate, mainCanvas, houseAcceleration, mGravity));
		
		housePosition = new Vector(200,-150);
        houseRotation = 0;
        houseScale = new Vector(1, 1, 1);
		houseXVelocity = -1;
		houseScaleRate = 0;
		houseYVelocity = 0;
		houseRotationRate = -0.2;
		houseAcceleration = -0.5;

        houses.push(new House(housePosition, houseRotation, houseScale, houseXVelocity, houseYVelocity, houseRotationRate, houseScaleRate, mainCanvas, houseAcceleration, mGravity));
		
		SquarePosition = new Vector(-100,-100);
        SquareRotation = 0;
        SquareScale = new Vector(1, 1, 1);
		SquareXVelocity = 0;
		SquareScaleRate = 0.01;
		SquareYVelocity = 0;
		SquareRotationRate = 0.01;
		SquareAcceleration = 0;
		
		backgroundSceneGraph.push(new BackgroundSquare(SquarePosition, SquareRotation,SquareScale,SquareXVelocity,SquareYVelocity,SquareRotationRate,SquareScaleRate,mainCanvas,SquareAcceleration,0, "#fa9b01"));
		
	    SquarePosition = new Vector(100,100);
        SquareRotation = 0;
        SquareScale = new Vector(1, 1, 1);
		SquareXVelocity = 0;
		SquareScaleRate = 0.01;
		SquareYVelocity = 0;
		SquareRotationRate = 0.01;
		SquareAcceleration = 0;
		
		backgroundSceneGraph.push(new BackgroundSquare(SquarePosition, SquareRotation,SquareScale,SquareXVelocity,SquareYVelocity,SquareRotationRate,SquareScaleRate,mainCanvas,SquareAcceleration,0,"#b19b01"));
		
	    SquarePosition = new Vector(-100,100);
        SquareRotation = 0;
        SquareScale = new Vector(1, 1, 1);
		SquareXVelocity = 0;
		SquareScaleRate = -0.01;
		SquareYVelocity = 0;
		SquareRotationRate = -0.01;
		SquareAcceleration = 0;
		
		backgroundSceneGraph.push(new BackgroundSquare(SquarePosition, SquareRotation,SquareScale,SquareXVelocity,SquareYVelocity,SquareRotationRate,SquareScaleRate,mainCanvas,SquareAcceleration,0,"#dedb01"));
		
	    SquarePosition = new Vector(100,-100);
        SquareRotation = 0;
        SquareScale = new Vector(1, 1, 1);
		SquareXVelocity = 0;
		SquareScaleRate = -0.01;
		SquareYVelocity = 0;
		SquareRotationRate = -0.01;
		SquareAcceleration = 0;
		
		backgroundSceneGraph.push(new BackgroundSquare(SquarePosition, SquareRotation,SquareScale,SquareXVelocity,SquareYVelocity,SquareRotationRate,SquareScaleRate,mainCanvas,SquareAcceleration,0,"#fa9dad"));
		
	    SquarePosition = new Vector(0,0);
        SquareRotation = 0;
        SquareScale = new Vector(1, 1, 1);
		SquareXVelocity = 0;
		SquareScaleRate = -0.015;
		SquareYVelocity = 0;
		SquareRotationRate = -0.015;
		SquareAcceleration = 0;
		
		backgroundSceneGraph.push(new BackgroundSquare(SquarePosition, SquareRotation,SquareScale,SquareXVelocity,SquareYVelocity,SquareRotationRate,SquareScaleRate,mainCanvas,SquareAcceleration,0,"#00b010"));
		
	    SquarePosition = new Vector(-300,-200);
        SquareRotation = 0;
        SquareScale = new Vector(1, 1, 1);
		SquareXVelocity = 0;
		SquareScaleRate = 0.01;
		SquareYVelocity = 0;
		SquareRotationRate = 0.01;
		SquareAcceleration = 0;
		
		backgroundSceneGraph.push(new BackgroundSquare(SquarePosition, SquareRotation,SquareScale,SquareXVelocity,SquareYVelocity,SquareRotationRate,SquareScaleRate,mainCanvas,SquareAcceleration,0,"#1eded0"));
		
	    SquarePosition = new Vector(300,-200);
        SquareRotation = 0;
        SquareScale = new Vector(1, 1, 1);
		SquareXVelocity = 0;
		SquareScaleRate = -0.01;
		SquareYVelocity = 0;
		SquareRotationRate = -0.01;
		SquareAcceleration = 0;
		
		backgroundSceneGraph.push(new BackgroundSquare(SquarePosition, SquareRotation,SquareScale,SquareXVelocity,SquareYVelocity,SquareRotationRate,SquareScaleRate,mainCanvas,SquareAcceleration,0,"#b0151c"));
		
	    SquarePosition = new Vector(-300,200);
        SquareRotation = 0;
        SquareScale = new Vector(1, 1, 1);
		SquareXVelocity = 0;
		SquareScaleRate = -0.01;
		SquareYVelocity = 0;
		SquareRotationRate = -0.01;
		SquareAcceleration = 0;
		
		backgroundSceneGraph.push(new BackgroundSquare(SquarePosition, SquareRotation,SquareScale,SquareXVelocity,SquareYVelocity,SquareRotationRate,SquareScaleRate,mainCanvas,SquareAcceleration,0,"#b01fe9"));
		
		SquarePosition = new Vector(300,200);
        SquareRotation = 0;
        SquareScale = new Vector(1, 1, 1);
		SquareXVelocity = 0;
		SquareScaleRate = 0.01;
		SquareYVelocity = 0;
		SquareRotationRate = 0.01;
		SquareAcceleration = 0;
		
		backgroundSceneGraph.push(new BackgroundSquare(SquarePosition, SquareRotation,SquareScale,SquareXVelocity,SquareYVelocity,SquareRotationRate,SquareScaleRate,mainCanvas,SquareAcceleration,0,"#50cd1c"));

    }
	
	function initialiseSceneGraph() {
		origin = new Vector(mainCanvas.width * 0.25, mainCanvas.height * 0.25);
        originMatrix = Matrix.createTranslation(origin);
		
		rootNode = new Node(Matrix.createIdentity());
		translationNode = new Node(originMatrix);
		
		rootNode.addChild(translationNode);
		
	    translationNode.addChild(backgroundSceneGraph[0]);
		translationNode.addChild(backgroundSceneGraph[1]);
		translationNode.addChild(backgroundSceneGraph[2]);
		translationNode.addChild(backgroundSceneGraph[3]);
		translationNode.addChild(backgroundSceneGraph[4]);
		translationNode.addChild(backgroundSceneGraph[5]);
		translationNode.addChild(backgroundSceneGraph[6]);
		translationNode.addChild(backgroundSceneGraph[7]);
		translationNode.addChild(backgroundSceneGraph[8]);
		translationNode.addChild(houses[0]);
		translationNode.addChild(houses[1]);


		

		
	}

    //this function will actually draw on the canvas
    function draw() {
        var i;


    

        //set the draw fill style colour to black
        mainContext.fillStyle = "#000b01";
        //fill the canvas wit black

        mainContext.fillRect(-mainCanvas.width,-mainCanvas.height, mainCanvas.width * 2, mainCanvas.height * 2);
        mainContext.lineWidth = 4;
        mainContext.strokeStyle = "#000000";

      //  for (i = 0; i < houses.length; i += 1){
            //houses[0].draw(mainContext, originMatrix);
       // }
        
    }
	
	function drawSceneGraph() {
		rootNode.draw(mainContext, originMatrix);
	}
    lastTime = Date.now();
	function animationLoop() {
		var thisTime = Date.now();
		var deltaTime = (thisTime - lastTime) / 7;
			
		houses[0].update(deltaTime,houses[1]);
		houses[1].update(deltaTime,houses[0]);
		backgroundSceneGraph[0].update(deltaTime);
		backgroundSceneGraph[1].update(deltaTime);
		backgroundSceneGraph[2].update(deltaTime);
		backgroundSceneGraph[3].update(deltaTime);
		backgroundSceneGraph[4].update(deltaTime);
		backgroundSceneGraph[5].update(deltaTime);
		backgroundSceneGraph[6].update(deltaTime);
		backgroundSceneGraph[7].update(deltaTime);
		backgroundSceneGraph[8].update(deltaTime);
		draw();
		drawSceneGraph();
		lastTime = thisTime;
		requestAnimationFrame(animationLoop);
		
	}	


    initialiseCanvasContext();
	initialiseSceneGraph();
	animationLoop();

}   
window.addEventListener('load', onLoad, false);