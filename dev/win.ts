class Win {

    private div:HTMLElement;

    constructor(){
        this.div = document.createElement("win");
        document.body.appendChild(this.div);

        var h = document.createElement("H1");
        var t = document.createTextNode("Gewonnen!!!");
        h.appendChild(t);
        document.body.appendChild(h);

    }
}