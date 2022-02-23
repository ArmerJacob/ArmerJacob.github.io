class Vector {
    constructor(pX, pY, pZ) {
        this.setX(pX);
        this.setY(pY);
        this.setZ(pZ);
    }
    getX() {
        return this.mX;
    }
    setX(pX) {
        this.mX = pX;
    }
    getY(pY) {
        return this.mY;
    }
    setY(pY) {
        this.mY = pY;
    }
    getZ(pZ) {
        return this.mZ
    }
    setZ(pZ) {
        this.mZ = pZ;
    }
    add(nVector) {
        var nX = this.getX() + nVector.getX();
        var nY = this.getY() + nVector.getY();
        var nZ = this.getZ() + nVector.getZ();

        var aVector = new Vector(nX, nY, nZ);

        return (aVector);
    }
    subtract(nVector) {
        var nX = this.getX() - nVector.getX();
        var nY = this.getY() - nVector.getY();
        var nZ = this.getZ() - nVector.getZ();

        var aVector = new Vector(nX, nY, nZ);

        return (aVector);
    }
    multiply(pScalar) {
        var nX = this.getX() * pScalar;
        var nY = this.getY() * pScalar;
        var nZ = this.getZ() * pScalar;

        var aVector = new Vector(nX, nY, nZ);

        return (aVector);
    }
    divide(pScalar) {
        var nX = this.getX() / pScalar;
        var nY = this.getY() / pScalar;
        var nZ = this.getZ() / pScalar;

        var aVector = new Vector(nX, nY, nZ);

        return (aVector);
    }
    magnitude() {
        var nX = this.getX() * this.getX();
        var nY = this.getY() * this.getY();
        var nZ = this.getZ() * this.getZ();

        var total = nX + nY + nZ;
        var rootTotal = Math.sqrt(total);
        return rootTotal;
    }
    normalise() {
        var mag = this.magnitude();
        var nX = this.getX() / mag;
        var nY = this.getY() / mag;
        var nZ = this.getZ() / mag;

        var aVector = new Vector(nX, nY, nZ);
        return aVector;
    }
    limitTo(pLimit) {
        var mag = this.magnitude();
        if (mag > pLimit) {
            var nMag = mag / pLimit;
            var nX = this.getX() / nMag;
            var nY = this.getY() / nMag;
            var nZ = this.getZ() / nMag;

            var nVector = new Vector(nX, nY, nZ);
            return nVector;
        }
        else {
            return this;
        }
    }
    dotProduct(nVector) {
        var nX = this.getX() * nVector.getX();
        var nY = this.getY() * nVector.getY();
        var nZ = this.getZ() * nVector.getZ();

        var nDot = nX + nY + nZ;
        return nDot;
    }
    interpolate(nVector, interp) {
        var nX = (this.getX() + nVector.getX()) * interp;
        var nY = (this.getY() + nVector.getY()) * interp;
        var nZ = (this.getZ() + nVector.getZ()) * interp;

        var aVector = new Vector(nX, nY, nZ);
        return aVector;
    }
    rotate(rotation) {
        var nX = (Math.cos(rotation) * this.getX()) - (Math.sin(rotation) * this.getY());
        var nY = (Math.sin(rotation) * this.getX()) + (Math.cos(rotation) * this.getY());
        var nZ = 1;

        var nVector = new Vector(nX, nY, nZ);
        return nVector;
    }
    angleBetween(nVector) {
        var mag = this.magnitude();
        var nMag = nVector.magnitude();
        var tDot = this.dotProduct(nVector);
        var tMag = mag * nMag;
        var total = tDot / tMag;
        var angle = Math.acos(total);

        return angle;
    }
}