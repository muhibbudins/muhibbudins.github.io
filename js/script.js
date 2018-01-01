$(document).ready(function() {
	navigate();

    $('.anchor-button').click(function() {
        var target = $(this).data('target');
        var redirect = $(this).data('redirect');
        if (!redirect) {
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 500);

            window.location.href = window.location.pathname + target;
            navigate();
            return false;
        } else {
            window.location.href = target;
        }
    });

    $(document).keydown(function(e) {
		if (e.keyCode == 32 || e.keyCode == 40) {
			$('a.navigator-down').trigger('click');
		}
		if (e.keyCode == 38) {
			$('a.navigator-up').trigger('click');
		}
    });

    $('.overlay-show').click(function(e) {
    	$('.overlay-show').hide();
    	$('.overlay-hide').show();
		$('.overlay').addClass('overlay-active');
    });

    $('.overlay-hide').click(function(e) {
    	$('.overlay-show').show();
    	$('.overlay-hide').hide();
		$('.overlay').removeClass('overlay-active');
    });

    // Navigator
    function navigate() {
	    var page = ["#me",'#project','#article','#design','#contact'],
	    	href = window.location.href.substr(loc, 100),
	    	loc  = href.indexOf('#'),
	    	get  = href.substr(loc, 100),
			up   = $('a.navigator-up'),
			down = $('a.navigator-down'),
			numb = page.indexOf(get);

	    if (page[numb]) {
	    	if (numb === page.length) {
	    		down.data('target', page[page.length]);
	    	} else if (numb > 0) {
	    		up.data('target', page[numb - 1]);
	    		down.data('target', page[numb + 1]);
	    	} else if (numb === 0) {
	    		up.data('target', page[numb]);
	    		down.data('target', page[numb + 1]);
	    	}
	    } else {
    		up.data('target', page[0]);
    		down.data('target', page[1]);

    		window.location.href = window.location.pathname + page[0];
	    }
    }

    loadProject();
});

function loadProject() {
	$.ajax({
		"async": true,
		"crossDomain": true,
		"url": "https://api.github.com/users/muhibbudins/repos",
		"method": "GET",
		"headers": {}
	}).done(function (response) {
		var data = response.filter(function(a,b) {
			return a.fork === false && a.forks_count > 0 && a.stargazers_count > 0;
		});

		data.map(function(a,b) {
			// console.log(a)
		});
	});
}