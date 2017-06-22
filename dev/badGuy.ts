/// <reference path="gameObject.ts"/>

class badGuy extends gameObject {
    
    
    constructor() {
        super('badGuy', 2);

        super.move();
        this.div.addEventListener("click", () => this.onClick());
    }

       public onClick():void{
          this.div.remove();
    
    }
    
    
}