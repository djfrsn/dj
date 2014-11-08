
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

      $('#fullpage').fullpage();


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

// Run code on window load
$(window).bind("load", function() {

  // Reveal sections after page load to avoid FOUC
  setTimeout(function() {
      $('.second.hidden').removeClass('hidden').fadeIn();
  }, 1000);

  // Fade in intro content on load
  setTimeout(function() {
  $('.intro').removeClass('hidden').addClass('animated fadeIn');
  }, 300);

  // Initiliaze variables
  var t0 = $('.dynamic_text0'),
      t1 = $('.dynamic_text1'),
      t2 = $('.dynamic_text2'),
      t3 = $('.dynamic_text3'),
      t4 = $('.dynamic_text4'),
      t5 = $('.dynamic_text5');

  // create anon function for our text handler
  (function(){

      // create function to run texillate animation
      function txtl(obj) {
        obj.removeClass('hidden').textillate({ in: { effect: 'flipInY' }});
      }

      // first call to textillate
      setTimeout(function() {
      txtl(t0);
      }, 1000);


      // sequential calls to textillate new text
      setTimeout(function() {
        t0.addClass('hidden');
        txtl(t1);
      }, 3850);
  
      setTimeout(function() {
        t1.addClass('hidden');
        txtl(t2);
      }, 7800);

      setTimeout(function() {
        t2.addClass('hidden');
        txtl(t3);
      }, 12500);

      setTimeout(function() {
        t3.addClass('hidden');
        txtl(t4);
      }, 17500);

      setTimeout(function() {
        t5.removeClass('invisible').addClass('animated fadeIn');
      }, 18800);

  })();

}); 
