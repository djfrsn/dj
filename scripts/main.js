
// Set height for vertically centered tables
function setTableHeight() {
var winHeight = $(window).height();
$('.table').css('height', winHeight);
$('.table__cell').css('height', winHeight);
}setTableHeight();

// Reset table height on window resize
$(window).resize(function() {
 setTableHeight();
});


// Call functions on document.ready
$(document).ready(function(){												
 
       //Navigation Menu Slider
        $('#nav-expander').on('click',function(e){
      		e.preventDefault();
      		$('body').toggleClass('nav-expanded');
      	});
      	$('#nav-close').on('click',function(e){
      		e.preventDefault();
      		$('body').removeClass('nav-expanded');
      	});
 
      	// Initialize navgoco with default options
        $(".main-menu").navgoco({
            caret: '<span class="caret"></span>',
            accordion: false,
            openClass: 'open',
            save: true,
            cookie: {
                name: 'navgoco',
                expires: false,
                path: '/'
            },
            slide: {
                duration: 300,
                easing: 'swing'
            }
        });
});

// Inititialize texiilate
$(window).bind("load", function() {

    // define our text handler
  var t0 = $('.dynamic_text0'),
      t1 = $('.dynamic_text1'),
      t2 = $('.dynamic_text2'),
      ts = $('.dynamic_text span');

      // init call to textillate
      t0.removeClass('hidden').textillate({ in: { effect: 'flipInY' }});

  // calls to remove and textillate new text
  setTimeout(function() {
      t0.remove();
      t1.removeClass('hidden').textillate({ in: { effect: 'flipInY' }});
  }, 3550);

  setTimeout(function() {
      t1.remove();
      t2.removeClass('hidden').textillate({ in: { effect: 'flipInY' }});
  }, 7500);
}); 
