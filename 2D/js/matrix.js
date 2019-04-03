class Matrix{
constructor(x1, y1, z1, x2, y2, z2, x3, y3, z3){
    this.setVector1(x1,y1,z1);
    this.setVector2(x2,y2,z2);
    this.setVector3(x3,y3,z3);
        
    }
    setVector1(x1,y1,z1){
    this.vector1 = new Vector(x1,y1,z1);
    }
    setVector2(x2,y2,z2){
    this.vector2 = new Vector(x2,y2,z2);
    }
    setVector3(x3,y3,z3){
    this.vector3 = new Vector(x3,y3,z3);
    }
    getVector1(){
    return this.vector1;
    }
    getVector2(){
    return this.vector2;
    }
    getVector3(){
    return this.vector3;
    }
    getElement(pCol, pRow){
       var vector1 = this.getVector1();
       var vector2 = this.getVector2();
       var vector3 = this.getVector3();
       
       if(pCol == 0){
          if(pRow == 0){
         return vector1.getX();
         }
         if(pRow == 1){
         return vector1.getY();
         }
         if(pRow == 2){
         return vector1.getZ();
         }         
       }
      if(pCol == 1){
         if(pRow == 0){
         return vector2.getX();
         }
         if(pRow == 1){
         return vector2.getY();
         }
         if(pRow == 2){
         return vector2.getZ();
         }         
       }
       if(pCol == 2){
         if(pRow == 0){
         return vector3.getX();
         }
         if(pRow == 1){
         return vector3.getY();
         }
         if(pRow == 2){
         return vector3.getZ();
         }         
       }
    }
	static createIdentity()     
    {
       var ident = new Matrix(1,0,0,0,1,0,0,0,1);
       return ident;
    }
    static createTranslation(pVector){
      var transMatrix = new Matrix(1,0,pVector.getX(),0,1,pVector.getY(),0,0,1);
      return transMatrix;
    
    }
	static createScale(pVector){
     var scaleMatrix = new Matrix(1 * pVector.getX(),0,0,0,1* pVector.getY(),0,0,0,1*pVector.getZ());
     return scaleMatrix;
	}
	    static createRotation(pScalar){  
  var x1 = Math.cos(pScalar);
  var y1 = -Math.sin(pScalar);
  var z1 = 0
  
  var x2 = Math.sin(pScalar);
  var y2 = Math.cos(pScalar);
  var z2 = 0
  
  var x3 = 0
  var y3 = 0
  var z3 = 1
  
  var nMatrix = new Matrix(x1,y1,z1,x2,y2,z2,x3,y3,z3);
  return nMatrix;

}
 multiplyVector(pVector){
 var vector1 = this.getVector1();
 var vector2 = this.getVector2();
 var vector3 = this.getVector3();
 
 var nX = (vector1.getX() * pVector.getX()) + (vector1.getY() * pVector.getY()) + (vector1.getZ() * pVector.getZ());
 var nY = (vector2.getX() * pVector.getX()) + (vector2.getY() * pVector.getY()) + (vector2.getZ() * pVector.getZ());
 var nZ = (vector3.getX() * pVector.getX()) + (vector3.getY() * pVector.getY()) + (vector3.getZ() * pVector.getZ());
 
 var nVector = new Vector(nX, nY, nZ);
 return nVector;
}
multiply(pMatrix){
 var vector1 = this.getVector1();
 var vector2 = this.getVector2();
 var vector3 = this.getVector3();
 var pVector1 = pMatrix.getVector1();
 var pVector2 = pMatrix.getVector2();
 var pVector3 = pMatrix.getVector3();
 
 var nX1 = (vector1.getX() * pVector1.getX()) + (vector1.getY() * pVector2.getX()) + (vector1.getZ() * pVector3.getX());
 var nY1 = (vector1.getX() * pVector1.getY()) + (vector1.getY() * pVector2.getY()) + (vector1.getZ() * pVector3.getY());
 var nZ1 = (vector1.getX() * pVector1.getZ()) + (vector1.getY() * pVector2.getZ()) + (vector1.getZ() * pVector3.getZ());
 
 var nX2 = (vector2.getX() * pVector1.getX()) + (vector2.getY() * pVector2.getX()) + (vector2.getZ() * pVector3.getX());
 var nY2 = (vector2.getX() * pVector1.getY()) + (vector2.getY() * pVector2.getY()) + (vector2.getZ() * pVector3.getY());
 var nZ2 = (vector2.getX() * pVector1.getZ()) + (vector2.getY() * pVector2.getZ()) + (vector2.getZ() * pVector3.getZ());
 
  var nX3 = (vector3.getX() * pVector1.getX()) + (vector3.getY() * pVector2.getX()) + (vector3.getZ() * pVector3.getX());
 var nY3 = (vector3.getX() * pVector1.getY()) + (vector3.getY() * pVector2.getY()) + (vector3.getZ() * pVector3.getY());
 var nZ3 = (vector3.getX() * pVector1.getZ()) + (vector3.getY() * pVector2.getZ()) + (vector3.getZ() * pVector3.getZ());
 
 var nMatrix = new Matrix(nX1, nY1, nZ1, nX2, nY2, nZ2, nX3, nY3, nZ3);
 return nMatrix;
 }
setTransform(pContext) {
    pContext.setTransform(this.getElement(0, 0), this.getElement(1, 0), this.getElement(0,1),this.getElement(1, 1), this.getElement(0, 2), this.getElement(1, 2));
}
    Transform(pContext) {
        pContext.Transform(this.getElement(0, 0), this.getElement(1, 0), this.getElement(0, 1), this.getElement(1, 1), this.getElement(0, 2), this.getElement(1, 2));
    }
}