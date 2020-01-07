
function showRockets(){
    let rocket1 = new Rocket('32WESSDS');
    rocket1.addPropulsor(new Propulsor(10)); 
    rocket1.addPropulsor(new Propulsor(30)); 
    rocket1.addPropulsor(new Propulsor(80)); 

    let rocket2 = new Rocket('LDSFJA32');
    rocket2.addPropulsor(new Propulsor(30)); 
    rocket2.addPropulsor(new Propulsor(40)); 
    rocket2.addPropulsor(new Propulsor(50)); 
    rocket2.addPropulsor(new Propulsor(50)); 
    rocket2.addPropulsor(new Propulsor(30)); 
    rocket2.addPropulsor(new Propulsor(10)); 

    const showRocket = <HTMLElement>document.getElementById('showRocket');
    const elementRocket1: HTMLElement = document.createElement('div');

    let rockets = [rocket1, rocket2];
    for (let i of rockets) {
        console.log(i);
        elementRocket1.innerHTML += '<br> COHETE ' + i.codi +' -' +' POTENCIA PROPULSORES:  ';
        showRocket.appendChild(elementRocket1);
        i.propulsors.forEach(Propulsor => {
            elementRocket1.innerHTML += Propulsor.potencia + '  ';
            showRocket.appendChild(elementRocket1);
        });
    
     }

    var button = <HTMLElement>document.getElementById("crear-cohets");
    button.classList.add('hide');

}