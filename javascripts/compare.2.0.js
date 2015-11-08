/**
 * Created by MoeKatib on 15-11-07.
 */

var CompareModule = function () {
    var s,
        versions = {

            _self: this,

            settings: {
                files: $('.file-link'),
                placeHolders: $('.version-place-holder'),
                activeVersion: 0,
                selectionCounter: 0,
                placeHolderClassName: 'version-place-holder',
                selectablePlaceHolderClassName: 'selectable-version-place-holder',
                selectedRowClassName: 'selected-version-row',
                selectedPlaceHolderClassName: 'selected-version-place-holder',
                placeHolderSelectHtml: '<span class="fa fa-arrow-circle-right bounce"></span> Click here to select version',
                emptyPlaceHolderHtml: 'Nothing selected yet!<br><small class="small-print"><em>Please select version from the table on the left!</em></small>'
            },

            init: function () {
                s = this.settings;
                this.bindUIActions();
            },

            activatePlaceHolder: function () {
                var _self = this;
                s.placeHolders.addClass(s.selectablePlaceHolderClassName);
                s.placeHolders.on('click', function () {
                    _self.selectPlaceHolder(this);

                });
            },

            bindUIActions: function () {
                var _self = this;
                s.files.on('click', function () {
                    s.activeVersion = $(this).data('version');
                    $(this).addClass(s.selectedRowClassName);

                    /* checking if a selection already happened and if so immediately assign the remaining place holder to the version */
                    if (s.selectionCounter === 1) {
                        _self.selectPlaceHolder(s.placeHolders);

                    }
                    else {
                        _self.activatePlaceHolder();
                        $(s.placeHolders).html(s.placeHolderSelectHtml);
                    }
                });
            },

            selectPlaceHolder: function (placeHolder) {
                var _self = this;
                console.log(this);
                $(placeHolder).html('Version ' + s.activeVersion + ' has been selected!')
                $(placeHolder).removeClass(s.placeHolderClassName);
                $(placeHolder).addClass(s.selectedPlaceHolderClassName);
                s.selectionCounter++;
                _self.resetPlaceHolder();
            },

            resetPlaceHolder: function () {
                s.placeHolders.removeClass(s.selectablePlaceHolderClassName);
                s.placeHolders.off('click');
                s.placeHolders = $('.' + s.placeHolderClassName);
                s.placeHolders.html(s.emptyPlaceHolderHtml);

                if (s.selectionCounter > 1) {
                    s.files.removeClass('file-link');
                    s.files.off('click');
                }
            }


        };


    (function () {
        versions.init();
    })();
};

CompareModule();