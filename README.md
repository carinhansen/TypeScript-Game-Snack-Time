# inleveropdracht

https://carinhansen.github.io/inleveropdracht/

- Classes en instances
Er zijn verschillende classes aangemaakt. Voor een start en eindscherm, voor de game en ook voor de verschillende snacks en de badguy. Ook is er een class gemaakt voor gameObject. Dat is de parent van de snacks en de badguy. 

Instances worden gebruikt in bijvoorbeeld de game. Daar worden verschillende instances aangemaakt voor de snacks en voor de badGuy. Er wordt daar een array aangemaakt:
        "
        this.badGuys = new Array<badGuy>();
        this.donuts = new Array<Donut>();
        this.pizzas = new Array<Pizza>();
        this.bacons = new Array<Bacon>();
        "
Bij start.ts wordt er een instance aangemaakt voor de game wanneer er op de 'spelen' button geklikt wordt: new Game().

Wanneer er op een snack geklikt wordt (pizza, bacon, donut) wordt er een instance gemaakt voor het eind scherm: new End();

- Encapsulation
In game.ts zijn alle 
- Composition
- Inheritance