class gameObject {

    protected div : HTMLElement;
    protected posX : number;
    protected posY : number;
    protected speedX : number;
    protected speedY : number;
    protected height: number;
    protected width: number;
    protected color: number;

    constructor(gameObjects : string, speedC :number){
        this.div = document.createElement(gameObjects);
        document.body.appendChild(this.div);
      
        // // start positie
        this.posX = (Math.random() * (window.innerWidth/2)) + (window.innerWidth/4);
        this.posY = (Math.random() * (window.innerHeight/2)) + (window.innerHeight/4);
        
        // start snelheid
        this.speedX = Math.ceil(Math.random() * speedC);
        this.speedY = Math.ceil(Math.random() * speedC);

        this.height = this.div.clientHeight;
        this.width = this.div.clientWidth;

    }

    public move() : void {
        this.posX += this.speedX;
        this.posY += this.speedY;
        
        // als we buiten beeld gaan dan de snelheid omdraaien
        // gebruik window.innerWidth en window.innerHeight om te zien of we nog in beeld zijn

        if(this.posX > window.innerWidth - this.div.clientWidth || this.posX < 0) {
            this.speedX = -this.speedX;
        }

        if(this.posY > window.innerHeight - this.div.clientHeight || this.posY < 0) {
            this.speedY = -this.speedY;
        }
        
        // transform gebruiken om de positie op het scherm aan te passen
        this.div.style.transform = "translate("+this.posX+"px, "+this.posY+"px)";
    }

}