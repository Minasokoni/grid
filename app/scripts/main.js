require.config({
	paths: {
		jquery: '../bower_components/jquery/jquery'
	}
});

require(['jquery', 'grid'], function ($, grid) {
	'use strict';

	grid.init();
	grid.show();
	setTimeout(function(){
		grid.hide();
	}, 5000);

});
