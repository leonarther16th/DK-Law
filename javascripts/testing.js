/**
 * Created by MoeKatib on 15-11-06.
 */

"use strict";

var triggers = document.getElementsByClassName('file-link');
var placeHolders = document.getElementsByClassName('version-place-holder');


var Trigger = function (elem) {
    this.version = elem.firstElementChild.textContent;
    this.element = elem;
};

Trigger.prototype.addClickEvent = function () {
    var _this = this;
    this.element.addEventListener('click', function () {

        /* Activating the place holder */
        for (var i = 0; i < placeHolders.length; i++) {
            var p1 = new PlaceHolder(placeHolders[i]);
            p1.addClickEvent('shake-little shake-constant', _this);
        }


    });
};


var PlaceHolder = function (elem) {
    this.text = elem.textContent;
    this.element = elem;
};

PlaceHolder.prototype.addClickEvent = function (className, parent) {
    var _this = this;

    /* listening on click */
    this.element.addEventListener('click', function () {
        //console.log(_this);
        _this.element.textContent = parent.version;
    });

    /* adding classes to indicate clickable */
    $(this.element).addClass(className);

};


for (var i = 0; i < triggers.length; i++) {
    var t1 = new Trigger(triggers[i]);
    t1.addClickEvent();
}











