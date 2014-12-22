$(function(){

	// modal script
	function launch(id) {
        $(id).lightbox_me({
        	centered: true, 
        	onLoad: function() { 
        		$(id).find('input:first').focus()
        	}
        });
    }     
    $('.btn-show-modal').click(function(e) {
    	var id = $(this).attr('modal-id');
        $(id).lightbox_me({
        	centered: true, 
        	preventScroll: true, 
        	onLoad: function() {
				$(id).find("input:first").focus();
			}
		});
        e.preventDefault();
    });
    
	//Dropdow menu script
	if($('.mainMenu').length){
		$('.mainMenu li').hover(
			function(){
            	$(this).find('ul').eq(0).stop(false,true).slideDown(200);
            	$(this).parent().css('overflow', 'visible');
	        },
	        function(){
	            $(this).find('ul').eq(0).stop(false,true).slideUp(200);
	        }
		)
	};

	//Tab script
	if ($('.tab-head').length) {
		$('.tab-head li').click(function(event) {
			$('.tab-head li').removeClass('active');
			$(this).addClass('active');
			tabActive = $(this).attr('data-tab');
			$('.main-tab .content').css({
				display: 'none'
			});
			$('.main-tab ' + tabActive).css({
				display: 'block'
			});
		});
	};

	//slideshow script
	if ($('.slideshow').length) {
		$('.slideshow').bxSlider({
			auto: true,
			pager: false,
		});
	};

	// accordion script
	if ($('.accordion').length) {
		// Ẩn tất cả .accordion trừ accordion
		$('ul.list> div:not(:first)').hide(); 
		$('ul.list> li:first-child').addClass('active');
		// Kiểm tra nếu đang ẩn thì sẽ hiện và ẩn các phần tử khác
		// Nếu đang hiện thì click vào h3 sẽ ẩn
		$('ul.list> li').click(function() {
			if ($(this).attr('class') == 'active') {
				void(0);
			}
			else {
				$('ul.list> li').removeClass('active');
				$(this).addClass('active');
				var $nextDiv = $(this).next();
				if ($nextDiv.is(':hidden') === true) {
					$("ul.list> div").slideUp();
				$nextDiv.slideDown();
				} else {
					$nextDiv.slideUp();
				}
			}
		});
	}

	$(window).bind('resize', function(e){
	    window.resizeEvt;
	    $(window).resize(function(){
	        clearTimeout(window.resizeEvt);
	        window.resizeEvt = setTimeout(function(){
	        	//Code here.......
	        }, 250);
	    });
	});
})