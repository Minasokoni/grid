define(['jquery'], function ($) {
    'use strict';

	var blockWidth = 150,
	blockHeight    = 150,
	win            = $(window),
	winh,
	winw,
	rows,
	blocksPerRow;

	function build(){
		var container = $('#container'),
		grid          = container.find('ul'),
		rows          = Math.ceil(winh / blockHeight),
		i             = 0,
		blocks        = '';

		grid.html('');
		grid.css('width', blocksPerRow * blockWidth);


		while (i < rows * blocksPerRow) {
			blocks += '<li class=\"block-'+parseInt(Math.random() * 3)+'\"></li>';
			i++;
		};

		grid.html(blocks);

	}


	function init(){
		win.resize(function(){
			winw = win.width();
			winh = win.height();
			blocksPerRow = Math.ceil(winw / blockWidth);
			build();
		});

		winw = win.width();
		winh = win.height();
		blocksPerRow = Math.ceil(winw / blockWidth);
		build();

	}


	function show(callback){
		var container = $('#container'),
		grid          = container.find('ul'),
		blocks        = grid.find('li'),
		numofblocks   = blocks.length,
		count         = 0;

		blocks.each(function(i, block){
			setTimeout(function(){
				$(block).addClass('animate');
				$(block).animate({'opacity':1.0}, 250, function(){
					count++;
					//counter in here
					if(numofblocks == count){
						if(callback){
							callback();
						}
					}
				});

			}, (Math.random() * 20) * (10+(i * 1)));
		});
	}

	function hide(){
		var container = $('#container'),
		grid          = container.find('ul'),
		blocks        = grid.find('li');

		blocks.each(function(i, block){
			setTimeout(function(){
				$(block).removeClass('animate');
				$(block).animate({'opacity':0}, 250, function(){
					// counter in here
				});

			}, (Math.random() * 20) * (10+(i * 1)));
		});
	}

	return {
		init: init,
		show: show,
		hide: hide
	}
});