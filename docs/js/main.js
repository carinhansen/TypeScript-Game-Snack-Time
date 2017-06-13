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
    return gameObject;
}());
var Bacon = (function (_super) {
    __extends(Bacon, _super);
    function Bacon() {
        var _this = _super.call(this, 'bacon', 5) || this;
        _super.prototype.move.call(_this);
        _this.div.addEventListener("click", function (e) { return _this.onClick(e); });
        return _this;
    }
    Bacon.prototype.onClick = function (e) {
    };
    return Bacon;
}(gameObject));
var badGuy = (function (_super) {
    __extends(badGuy, _super);
    function badGuy() {
        var _this = _super.call(this, 'badGuy', 2) || this;
        _super.prototype.move.call(_this);
        _this.div.addEventListener("click", function (e) { return _this.onClick(e); });
        return _this;
    }
    badGuy.prototype.onClick = function (e) {
        var parent = document.getElementsByTagName("body")[0];
        var child = document.getElementsByTagName("badGuy")[1];
        parent.removeChild(child);
        this.color = Math.random() * 360;
        this.div.style.webkitFilter = "hue-rotate(" + this.color + "deg)";
        this.div.style.filter = "hue-rotate(" + this.color + "deg)";
    };
    return badGuy;
}(gameObject));
var Donut = (function (_super) {
    __extends(Donut, _super);
    function Donut() {
        var _this = _super.call(this, 'Donuts', 5) || this;
        _super.prototype.move.call(_this);
        _this.div.addEventListener("click", function (e) { return _this.onClick(e); });
        return _this;
    }
    Donut.prototype.onClick = function (e) {
        alert('Niet op de snacks klikken!');
    };
    return Donut;
}(gameObject));
var Pizza = (function (_super) {
    __extends(Pizza, _super);
    function Pizza() {
        var _this = _super.call(this, 'pizza', 4) || this;
        _super.prototype.move.call(_this);
        _this.div.addEventListener("click", function (e) { return _this.onClick(e); });
        return _this;
    }
    Pizza.prototype.onClick = function (e) {
        alert('Niet op de snacks klikken!');
    };
    return Pizza;
}(gameObject));
var Game = (function () {
    function Game() {
        var _this = this;
        this.badGuys = new Array();
        this.donuts = new Array();
        this.pizzas = new Array();
        this.bacons = new Array();
        for (var i = 0; i < 20; i++) {
            this.badGuys.push(new badGuy());
            this.donuts.push(new Donut());
            this.pizzas.push(new Pizza());
            this.bacons.push(new Bacon());
        }
        setTimeout(this.gameLost, 60000);
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
    Game.prototype.gameLost = function () {
        alert("Helaas! Het is je niet gelukt alle vlees etende planten binnen 1 minuut te pakken..");
    };
    return Game;
}());
window.addEventListener("load", function () {
    new Game();
});
//# sourceMappingURL=main.js.map