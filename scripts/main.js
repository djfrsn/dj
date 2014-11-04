
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

// Run code on window load
$(window).bind("load", function() {

  $('.intro').removeClass('hidden').addClass('animated fadeIn');

  // Initiliaze variables
  var t0 = $('.dynamic_text0'),
      t1 = $('.dynamic_text1'),
      t2 = $('.dynamic_text2'),
      t3 = $('.dynamic_text3'),
      t4 = $('.dynamic_text4'),
      t5 = $('.dynamic_text5');

  // define our text handler
  (function(){
  function txtl(obj) {
        obj.removeClass('hidden').textillate({ in: { effect: 'flipInY' }});
      }      
      // first call to textillate
      setTimeout(function() {
      txtl(t0);
    }, 700);

      // sequential calls to textillate new text
      setTimeout(function() {
        t0.addClass('hidden');
        txtl(t1);
      }, 3550);
  
      setTimeout(function() {
        t1.addClass('hidden');
        txtl(t2);
      }, 7500);

      setTimeout(function() {
        t2.addClass('hidden');
        txtl(t3);
      }, 12000);

      setTimeout(function() {
        t3.addClass('hidden');
        txtl(t4);
      }, 17000);

      setTimeout(function() {
        t5.removeClass('invisible').addClass('animated fadeIn');
      }, 18300);
})();



}); 
