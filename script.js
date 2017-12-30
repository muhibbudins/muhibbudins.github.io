$(document).ready(function() {
	$('.fullpage').fullpage({
		navigation: true,
		scrollingSpeed: 600,
		sectionsColor: ['#FFFFFF', '#5462FF', '#15D5C5', '#2C50B7', '#FF7575'],
		onLeave: function(index, nextIndex, direction) {
			// welcome
			if(nextIndex == 1) {
				setColor('#FF7575', '#FFFFFF', '#5B5B5B');
			}

			// introduction
			if(nextIndex == 2) {
				setColor('#FFFFFF', '#5462FF', '#FFFFFF');
			}

			// design
			if(nextIndex == 3) {
				setColor('#FFFFFF', '#0EC7B7', '#FFFFFF');
			}

			// code
			if(nextIndex == 4) {
				setColor('#FFFFFF', '#2C50B7', '#FFFFFF');
			}

			// contact
			if(nextIndex == 5) {
				setColor('#FFFFFF', '#FF6262', '#FFFFFF');
			}
		}
	});

	function setColor(primary, secondary, addon) {
		var sidebar = $('.sidebar'),
			trigger = $('.sidebar-trigger'),
			bullet  = $('#fp-nav.right ul li a')

			sidebar.css('background-color', primary);
			trigger.css('color', secondary);
			bullet.css({'border-color': addon ? addon : secondary, 'background-color':'transparent'});

		setTimeout(function() {
		  $('#fp-nav.right ul li').find('.active').css('background-color', addon ? addon : secondary);
		}, 300);
	}

	$.fn.typings = function(e) {
		var el = $(this),
			parse = el.html(),
			data = [],
			split = [];

		if (parse.match(/\|/)) {
			split = parse.split('|');
			for (var i in split) {
				data[i] = split[i];
			}
		} else {
			split = parse.split('');
		}

		if (data) {
			var c = 0;
			var erase = false;
			for (var i in data) {
				if (c == data.length) {
					return false;
				}
				var buffer = data[i].split('');
				start(buffer, erase);
				c++;
			}
		} else {
			start(split);
		}

		function start(arr) {
			var len = arr.length,
				count = 0,
				interval = setInterval(function() { tick() }, 200),
				bracket = [];

			el.html('');

			function tick() {
				if (count == len - 1)
					clearInterval(interval);

				bracket.push(arr[count]);
				el.html(count == len - 1 ? bracket.join('') : bracket.join('') + '|');
				count++;
			}
		}
	}

	$('.typings').typings();
});