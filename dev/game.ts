/// <reference path="badGuy.ts"/>
/// <reference path="donut.ts"/>
/// <reference path="pizza.ts"/>
/// <reference path="bacon.ts"/>

class Game {

    private badGuys : Array<badGuy>;
    private donuts : Array<Donut>;
    private pizzas : Array<Pizza>;
    private bacons : Array<Bacon>;
    private audio;

    constructor() {

        this.badGuys = new Array<badGuy>();
        this.donuts = new Array<Donut>();
        this.pizzas = new Array<Pizza>();
        this.bacons = new Array<Bacon>();

        for (var i = 0; i < 20; i++) {
            this.badGuys.push(new badGuy());
            this.donuts.push(new Donut());
            this.pizzas.push(new Pizza());
            this.bacons.push(new Bacon());
        }

        setTimeout(this.gameLost, 60000);

        this.audio = new Audio('audio/Protofunk.mp3');
        this.audio.play();
           
        // start de game loop        
        requestAnimationFrame( () => this.gameLoop());
    }
    
    private gameLoop(){
    
        for (let g of this.badGuys) {
            g.move();
        }

        for (let h of this.donuts) {
            h.move();
        }

        for (let p of this.pizzas) {
            p.move();
        }

        for (let b of this.bacons) {
            b.move();
        }
        // hiermee wordt de gameloop opnieuw aangeroepen
        requestAnimationFrame( () => this.gameLoop());
    }

    private gameLost() {
        alert("Helaas! Het is je niet gelukt alle vlees etende planten binnen 1 minuut te pakken..");
    }

} 