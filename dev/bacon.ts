/// <reference path="gameObject.ts"/>
   

    class Bacon extends gameObject {
    
    
    constructor() {
        super('bacon', 5);
        super.move();
        
         this.div.addEventListener("click", () => this.onClick());
    }

}