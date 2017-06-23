var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var gameObject = (function () {
    function gameObject(gameObjects, speedC) {
        this.div = document.createElement(gameObjects);
        document.body.appendChild(this.div);
        this.posX = (Math.random() * (window.innerWidth / 2)) + (window.innerWidth / 4);
        this.posY = (Math.random() * (window.innerHeight / 2)) + (window.innerHeight / 4);
        this.speedX = Math.ceil(Math.random() * speedC);
        this.speedY = Math.ceil(Math.random() * speedC);
        this.height = this.div.clientHeight;
        this.width = this.div.clientWidth;
    }
    gameObject.prototype.move = function () {
        this.posX += this.speedX;
        this.posY += this.speedY;
        if (this.posX > window.innerWidth - this.div.clientWidth || this.posX < 0) {
            this.speedX = -this.speedX;
        }
        if (this.posY > window.innerHeight - this.div.clientHeight || this.posY < 0) {
            this.speedY = -this.speedY;
        }
        this.div.style.transform = "translate(" + this.posX + "px, " + this.posY + "px)";
    };
    gameObject.prototype.onClick = function () {
        new End();
    };
    return gameObject;
}());
var Bacon = (function (_super) {
    __extends(Bacon, _super);
    function Bacon() {
        var _this = _super.call(this, 'bacon', 5) || this;
        _super.prototype.move.call(_this);
        _this.div.addEventListener("click", function () { return _this.onClick(); });
        return _this;
    }
    return Bacon;
}(gameObject));
var BadGuy = (function (_super) {
    __extends(BadGuy, _super);
    function BadGuy(game) {
        var _this = _super.call(this, 'badGuy', 2) || this;
        _this.g = game;
        _super.prototype.move.call(_this);
        _this.div.addEventListener("click", function () { return _this.onClick(); });
        return _this;
    }
    BadGuy.prototype.onClick = function () {
        this.div.remove();
        this.g.points++;
        if (this.g.points == 10) {
            new Win();
        }
    };
    return BadGuy;
}(gameObject));
var Donut = (function (_super) {
    __extends(Donut, _super);
    function Donut() {
        var _this = _super.call(this, 'Donuts', 5) || this;
        _super.prototype.move.call(_this);
        _this.div.addEventListener("click", function () { return _this.onClick(); });
        return _this;
    }
    return Donut;
}(gameObject));
var End = (function () {
    function End() {
        this.div = document.createElement("end");
        document.body.appendChild(this.div);
        var h = document.createElement("H1");
        var t = document.createTextNode("Game over!");
        h.appendChild(t);
        document.body.appendChild(h);
    }
    return End;
}());
var Game = (function () {
    function Game() {
        var _this = this;
        this.points = 0;
        this.badGuys = new Array();
        this.donuts = new Array();
        this.pizzas = new Array();
        this.bacons = new Array();
        for (var i = 0; i < 10; i++) {
            this.badGuys.push(new BadGuy(this));
            this.donuts.push(new Donut());
            this.pizzas.push(new Pizza());
            this.bacons.push(new Bacon());
        }
        this.audio = new Audio('audio/Protofunk.mp3');
        this.audio.play();
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        for (var _i = 0, _a = this.badGuys; _i < _a.length; _i++) {
            var g = _a[_i];
            g.move();
        }
        for (var _b = 0, _c = this.donuts; _b < _c.length; _b++) {
            var h = _c[_b];
            h.move();
        }
        for (var _d = 0, _e = this.pizzas; _d < _e.length; _d++) {
            var p = _e[_d];
            p.move();
        }
        for (var _f = 0, _g = this.bacons; _f < _g.length; _f++) {
            var b = _g[_f];
            b.move();
        }
        requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Start();
});
var Pizza = (function (_super) {
    __extends(Pizza, _super);
    function Pizza() {
        var _this = _super.call(this, 'pizza', 4) || this;
        _super.prototype.move.call(_this);
        _this.div.addEventListener("click", function () { return _this.onClick(); });
        return _this;
    }
    return Pizza;
}(gameObject));
var Start = (function () {
    function Start() {
        var _this = this;
        this.div = document.createElement("start");
        document.body.appendChild(this.div);
        this.button = document.createElement("BUTTON");
        var btnText = document.createTextNode("SPELEN");
        console.log(this.button);
        this.button.appendChild(btnText);
        document.body.appendChild(this.button);
        this.button.addEventListener("click", function () { return _this.startGame(); });
    }
    Start.prototype.startGame = function () {
        this.div.remove();
        this.button.remove();
        new Game();
    };
    return Start;
}());
var Win = (function () {
    function Win() {
        this.div = document.createElement("win");
        document.body.appendChild(this.div);
        var h = document.createElement("H1");
        var t = document.createTextNode("Gewonnen!!!");
        h.appendChild(t);
        document.body.appendChild(h);
    }
    return Win;
}());
//# sourceMappingURL=main.js.map