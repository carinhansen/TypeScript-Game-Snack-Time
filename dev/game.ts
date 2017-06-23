class Game {

    private badGuys : Array<BadGuy>;
    private donuts : Array<Donut>;
    private pizzas : Array<Pizza>;
    private bacons : Array<Bacon>;
    private audio : HTMLAudioElement;
    public points : number = 0;

    constructor() {

        this.badGuys = new Array<BadGuy>();
        this.donuts = new Array<Donut>();
        this.pizzas = new Array<Pizza>();
        this.bacons = new Array<Bacon>();

        for (var i = 0; i < 10; i++) {
            this.badGuys.push(new BadGuy(this));
            this.donuts.push(new Donut());
            this.pizzas.push(new Pizza());
            this.bacons.push(new Bacon());
        }

        this.audio = new Audio('audio/Protofunk.mp3');
        this.audio.play();
             
        requestAnimationFrame( () => this.gameLoop());
    }
    
    private gameLoop():void{

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
} 