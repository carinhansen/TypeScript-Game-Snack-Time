/// <reference path="gameObject.ts"/>

class badGuy extends gameObject {

    public game:Game;
    
    constructor() {
        super('badGuy', 2);

        super.move();
        this.div.addEventListener("click", () => this.onClick());
    }

       public onClick(){
        this.game.points++;
         if(this.game.points == 2){
            console.log('yeey');
        }
        this.div.remove();
   
          
    }
    
    
}