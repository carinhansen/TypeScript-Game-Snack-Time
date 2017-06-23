/// <reference path="gameObject.ts"/>
   

    class Donut extends gameObject {
    
    
    constructor() {
        super('Donuts', 5);
        super.move();
        
        this.div.addEventListener("click", () => this.onClick());
    }

    
}