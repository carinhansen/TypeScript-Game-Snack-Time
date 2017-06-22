/// <reference path="gameObject.ts"/>

class badGuy extends gameObject {

    public g:Game;
    
    constructor(game:Game) {
        super('badGuy', 2);
        this.g = game;
        super.move();
        this.div.addEventListener("click", () => this.onClick());
    }

       public onClick(){
        this.g.points++;
        if(this.g.points == 19){
            new Win();
        }
        this.div.remove();
   
          
    }
    
    
}