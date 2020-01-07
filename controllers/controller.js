"use strict";
function showRockets() {
    var rocket1 = new Rocket('32WESSDS');
    rocket1.addPropulsor(new Propulsor(10));
    rocket1.addPropulsor(new Propulsor(30));
    rocket1.addPropulsor(new Propulsor(80));
    var rocket2 = new Rocket('LDSFJA32');
    rocket2.addPropulsor(new Propulsor(30));
    rocket2.addPropulsor(new Propulsor(40));
    rocket2.addPropulsor(new Propulsor(50));
    rocket2.addPropulsor(new Propulsor(50));
    rocket2.addPropulsor(new Propulsor(30));
    rocket2.addPropulsor(new Propulsor(10));
    var showRocket = document.getElementById('showRocket');
    var elementRocket1 = document.createElement('div');
    var rockets = [rocket1, rocket2];
    for (var _i = 0, rockets_1 = rockets; _i < rockets_1.length; _i++) {
        var i = rockets_1[_i];
        console.log(i);
        elementRocket1.innerHTML += '<br> COHETE ' + i.codi + ' -' + ' POTENCIA PROPULSORES:  ';
        showRocket.appendChild(elementRocket1);
        i.propulsors.forEach(function (Propulsor) {
            elementRocket1.innerHTML += Propulsor.potencia + '  ';
            showRocket.appendChild(elementRocket1);
        });
    }
    var button = document.getElementById("crear-cohets");
    button.classList.add('hide');
}
