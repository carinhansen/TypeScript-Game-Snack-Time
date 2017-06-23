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
        
        if(this.posX > window.innerWidth - this.div.clientWidth || this.posX < 0) {
            this.speedX = -this.speedX;
        }

        if(this.posY > window.innerHeight - this.div.clientHeight || this.posY < 0) {
            this.speedY = -this.speedY;
        }
        
        this.div.style.transform = "translate("+this.posX+"px, "+this.posY+"px)";
    }

    protected onClick():void{
        new End();
    }

}