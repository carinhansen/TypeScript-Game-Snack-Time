/// <reference path="gameObject.ts"/>
   

    class Pizza extends gameObject {
    
    
    constructor() {
        super('pizza', 4);
        super.move();
        this.div.addEventListener("click", () => this.onClick());
    }

       private onClick():void{
        new End();
    }
}