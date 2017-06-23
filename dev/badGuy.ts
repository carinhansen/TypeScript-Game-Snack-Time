/// <reference path="gameObject.ts"/>

class BadGuy extends gameObject {

    public g:Game;
    
    constructor(game:Game) {
        super('badGuy', 2);
        this.g = game;
        super.move();
        this.div.addEventListener("click", () => this.onClick());
    }

       protected onClick() : void{
        this.div.remove();
        this.g.points++;
        if(this.g.points == 10){
            new Win();
        }   
    }
}