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
var GhostObjects = (function () {
    function GhostObjects(GhostObjects, speedC) {
        this.div = document.createElement(GhostObjects);
        document.body.appendChild(this.div);
        this.posX = (Math.random() * (window.innerWidth / 2)) + (window.innerWidth / 4);
        this.posY = (Math.random() * (window.innerHeight / 2)) + (window.innerHeight / 4);
        this.speedX = Math.ceil(Math.random() * speedC);
        this.speedY = Math.ceil(Math.random() * speedC);
        this.height = this.div.clientHeight;
        this.width = this.div.clientWidth;
    }
    GhostObjects.prototype.move = function () {
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
    return GhostObjects;
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
        alert('Niet op de snacks klikken!');
    };
    return Bacon;
}(GhostObjects));
var Ghost = (function (_super) {
    __extends(Ghost, _super);
    function Ghost() {
        var _this = _super.call(this, 'badGuy', 6) || this;
        _super.prototype.move.call(_this);
        _this.div.addEventListener("click", function (e) { return _this.onClick(e); });
        return _this;
    }
    Ghost.prototype.onClick = function (e) {
        this.color = Math.random() * 360;
        this.div.style.webkitFilter = "hue-rotate(" + this.color + "deg)";
        this.div.style.filter = "hue-rotate(" + this.color + "deg)";
    };
    return Ghost;
}(GhostObjects));
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
}(GhostObjects));
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
}(GhostObjects));
var Game = (function () {
    function Game() {
        var _this = this;
        this.ghosts = new Array();
        this.donuts = new Array();
        this.pizzas = new Array();
        this.bacons = new Array();
        for (var i = 0; i < 20; i++) {
            this.ghosts.push(new Ghost());
            this.donuts.push(new Donut());
            this.pizzas.push(new Pizza());
            this.bacons.push(new Bacon());
        }
        setTimeout(this.gameLost, 60000);
        requestAnimationFrame(function () { return _this.gameLoop(); });
    }
    Game.prototype.gameLoop = function () {
        var _this = this;
        for (var _i = 0, _a = this.ghosts; _i < _a.length; _i++) {
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