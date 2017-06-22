class Start {

    private div:HTMLElement;
    private h: HTMLElement;
    private t: string;
    private button: HTMLElement;

    constructor(){
        this.div = document.createElement("start");
        document.body.appendChild(this.div);

        // var h = document.createElement("H1");
        // var t = document.createTextNode("Red alle snacks door op de vleesetende plant te klikken");
        // h.appendChild(t);
        // document.body.appendChild(h);

        this.button = document.createElement("BUTTON");
        var btnText = document.createTextNode("SPELEN");
        
        console.log(this.button);
        this.button.appendChild(btnText);
        document.body.appendChild(this.button);

         this.button.addEventListener("click", () => this.onClick());
    }

    private onClick(){
        this.div.remove();
        this.button.remove();

        new Game();
    }
}