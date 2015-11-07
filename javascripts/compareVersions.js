var comapreEngine = function(){

	//var selectedVersion;
	var files = document.getElementsByClassName('file-link');


	$.each(files, function(i, v){
		$(v).click(function(){

			var versionWells = $('.not-selected-version-well');

			selectedVerstion = this.children.item(0).textContent;

			$(this).toggleClass("selected-version");

			/* make the well shack and chabge its text */
			versionWells.toggleClass('shake-little shake-constant selectable');
			versionWells.html('<i class="fa fa-arrow-circle-right"></i> Click here to add!');

            // adding a click event on the well
			versionWells.click(function(){
				$(this).html('<i class="fa fa-check-circle"></i> Version ' + selectedVerstion + ' selected!');
				$(this).removeClass('not-selected-version-well');
				$(this).addClass('selected-version-well');
                $(this).unbind( 'click' );
				versionWells.removeClass('shake-little shake-constant selectable');
                $('.not-selected-version-well').unbind('click');
                $('.not-selected-version-well').text('Nothing selected yet!!');

			})
		});
	});



};

comapreEngine();