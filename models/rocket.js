"use strict";
var Rocket = /** @class */ (function () {
    function Rocket(codi) {
        this.propulsors = new Array();
        this.codi = codi;
    }
    Rocket.prototype.addPropulsor = function (propulsor) {
        this.propulsors.push(propulsor);
    };
    return Rocket;
}());
