class End {

    private div:HTMLElement;
    private h: HTMLElement;
    private t: string;

    constructor(){
        this.div = document.createElement("end");
        document.body.appendChild(this.div);
        
        var h = document.createElement("H1");
        var t = document.createTextNode("Game over!");
        h.appendChild(t);
        document.body.appendChild(h);
    }
}