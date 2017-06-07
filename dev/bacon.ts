/// <reference path="gameObjects.ts"/>
   

    class Bacon extends gameObjects {
    
    
    constructor() {
        super('bacon', 5);
        super.move();
        
        this.div.addEventListener("click", (e:MouseEvent) => this.onClick(e));
    }

       public onClick(e:MouseEvent):void{

    }
}