/// <reference path="gameObjects.ts"/>

class badGuy extends gameObjects {
    
    
    constructor() {
        super('badGuy', 5);

        super.move();
        this.div.addEventListener("click", (e:MouseEvent) => this.onClick(e));
    }

       public onClick(e:MouseEvent):void{

        // de kleur moet random worden
        this.color = Math.random() * 360;
        this.div.style.webkitFilter = "hue-rotate("+this.color+"deg)";
        this.div.style.filter = "hue-rotate("+this.color+"deg)";
    }
    
    
}