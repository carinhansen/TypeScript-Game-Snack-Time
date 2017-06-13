/// <reference path="gameObject.ts"/>

class badGuy extends gameObject {
    
    
    constructor() {
        super('badGuy', 2);

        super.move();
        this.div.addEventListener("click", (e:MouseEvent) => this.onClick(e));
    }

       public onClick(e:MouseEvent):void{
           var parent = document.getElementsByTagName("body")[0];

           // dit moet het item gaan verwijderen waar op geklikt wordt
           var child = document.getElementsByTagName("badGuy")[1];
          
          parent.removeChild(child);

        // de kleur moet random worden
        this.color = Math.random() * 360;
        this.div.style.webkitFilter = "hue-rotate("+this.color+"deg)";
        this.div.style.filter = "hue-rotate("+this.color+"deg)";
    }
    
    
}