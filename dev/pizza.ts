/// <reference path="gameObjects.ts"/>
   

    class Pizza extends GhostObjects {
    
    
    constructor() {
        super('pizza', 4);
        super.move();
        this.div.addEventListener("click", (e:MouseEvent) => this.onClick(e));
    }

       public onClick(e:MouseEvent):void{

        alert('Niet op de snacks klikken!');
    }
}