# inleveropdracht

https://carinhansen.github.io/inleveropdracht/

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/uml.png


<h2>Het doel van de game:</h2>

Red de snacks van de vleesetende planten door op de vleesetende planten te klikken. Als alle vleesetende planten dood (weg) zijn heb je gewonnen!
Maar pas op dat je niet op de snacks klikt..

- <h2>Classes en instances</h2>

Er zijn verschillende classes aangemaakt. Voor een start en eindscherm, voor de game en ook voor de verschillende snacks en de badguy. Ook is er een class gemaakt voor gameObject. Dat is de parent van de snacks en de badguy. Ook is er een class aangemaakt 'win'.

Instances worden gebruikt in bijvoorbeeld de game. Daar worden verschillende instances aangemaakt voor de snacks en voor de badGuy. Er wordt daar een array aangemaakt:
        "
        this.badGuys = new Array<badGuy>();
        this.donuts = new Array<Donut>();
        this.pizzas = new Array<Pizza>();
        this.bacons = new Array<Bacon>();
        "
Bij start.ts wordt er een instance aangemaakt voor de game wanneer er op de 'spelen' button geklikt wordt: new Game().

Wanneer er op een snack geklikt wordt (pizza, bacon, donut) wordt er een instance gemaakt voor het eind scherm: new End(); de functie is aangemaakt in de parent (gameObject - onClick()).

- <h2>Encapsulation</h2>

Zoals in de uml te zien is wordt er gebruik gemaakt van encapsulation.
In de start, end en win class zijn alle variabelen en functies private omdat het alleen binnen die class gebruikt wordt.
In game is alles private behalve points. Points wordt namelijk als enige buiten de game gebruikt. Het wordt namelijk ook gebruikt in BadGuy. 
In gameObject is alles protected omdat het alleen door die class en de children gebruikt wordt. De move functie is wel public in gameObject omdat het gebruikt wordt in de 'game' class.

In badGuy is game public and onClick is protected omdat het een functie van de parent is die overschreven wordt.


- <h2>Composition</h2>

Composition is gebruikt bij start en game. Start heeft namelijk een game.Game object heeft een end.

- <h2>Inheritance</h2>

Inheritance is gebruikt bij gameObject en BadGuy, Pizza, Donut, Bacon.
gameObject is de parent van BadGuy, Pizza, Donut, Bacon.
