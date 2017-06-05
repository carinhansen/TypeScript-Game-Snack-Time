/// <reference path="gameObjects.ts"/>
   

    class Donut extends GhostObjects {
    
    
    constructor() {
        super('Donuts', 5);
        super.move();
        
        this.div.addEventListener("click", (e:MouseEvent) => this.onClick(e));
    }

       public onClick(e:MouseEvent):void{

        alert('Niet op de snacks klikken!');
    }

    
}