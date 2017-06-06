/// <reference path="gameObjects.ts"/>
   

    class Bacon extends GhostObjects {
    
    
    constructor() {
        super('bacon', 5);
        super.move();
        
        this.div.addEventListener("click", (e:MouseEvent) => this.onClick(e));
    }

       public onClick(e:MouseEvent):void{

    }
}