/**
 * Created by MoeKatib on 15-11-06.
 */


(function () {
    "use strict";

    var root = this,
        Trigger = function (version){
        this._self = this;
        this.version = version;
    };

    Trigger.prototype.logVersion = function(){
        console.log( this.version );
    };

    Trigger.prototype.activatePlaceHolder = function(placeHolderClassName, notSelectedClassName, selectedClassName){
        var _self = this;
        var placeHolder = $(placeHolderClassName);

        placeHolder.html('<i class="fa fa-arrow-circle-right"></i> Click here to add!');

        placeHolder.click(function(){
            console.log(_self);
            $(this).html('<i class="fa fa-check-circle"></i> Version ' + _self.version + ' selected!');
            placeHolder.removeClass(notSelectedClassName);
            $(this).addClass(selectedClassName);
        });

        placeHolder.addClass(notSelectedClassName);

    };

    $('.file-link').click(function(){
        var file = $(this);
        var fileNumber = file.find('.version-number').text();

        var fileTrigger = new Trigger(fileNumber);
        fileTrigger.logVersion();
        fileTrigger.activatePlaceHolder('.version-place-holder', 'shake-little shake-constant', 'selected-version-well');
    });



}).call(this)