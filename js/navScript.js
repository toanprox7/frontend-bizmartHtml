

$(document).ready(function() {
	$(".nav-cate li a").each(function() {
		if ($(this).next().length > 0) {
			$(this).addClass("parent");
		};
	})
	

	adjustMenu();
})


var adjustMenu = function() {
		$(".nav-cate li").unbind('mouseenter mouseleave');
		$(".nav-cate li a.parent").unbind('click').bind('click', function(e) {
			// must be attached to anchor element to prevent bubbling
			e.preventDefault();
			$(this).parent("li").toggleClass("hover");
		});
}

