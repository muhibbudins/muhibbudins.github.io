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

		$('.nav-pill li .item').addClass('animated');
    })

    $('.overlay-hide').click(function(e) {
    	$('.overlay-show').show();
    	$('.overlay-hide').hide();
		$('.overlay').removeClass('overlay-active');

		$('.nav-pill li .item').removeClass('animated');
    })

    // Navigator
    function navigate() {
	    var page = ["#me",'#article','#design','#project','#contact'],
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
});
