class Rocket{
    codi:string;
    propulsors:Propulsor[]=new Array();

    constructor(codi:string){
        this.codi=codi;
    }
    addPropulsor(propulsor:Propulsor):void{
        this.propulsors.push(propulsor);
    }

}