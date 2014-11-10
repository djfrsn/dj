
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

// Disable scrolling
$('#fullpage').on('scroll touchmove mousewheel', function(e){
  e.preventDefault();
  e.stopPropagation();
  return false;
})

// Run code on document.ready
$(document).ready(function(){												

      $('#fullpage').fullpage({
        sectionsColor: ['#F5EDE3', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
        menu: '#menu',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['Home', 'Process', 'Projects', 'About', 'Contact']
      });

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

  // This code runs after 1 second
  setTimeout(function() {
      // Reveal sections after page load to avoid FOUC
      $('.reveal.hidden').removeClass('hidden').fadeIn();
      // Turn scroll back on
      $('#fullpage').off('scroll touchmove mousewheel');
  }, 1000);

      // Reveal Nav
      $('.circle a').removeClass('hidden').addClass('animated fadeIn');


  // Center intro content horizontally
  function inwi() {
      var introWidth = $('.intro').width();
      $('.table__cell').css('width', introWidth + 'px');
  } 

  // Run inwi() on resize
  $(window).resize(function() {
      inwi();
  });

  // Fade in intro content on load
  setTimeout(function() {
  $('.intro').removeClass('hidden').addClass('animated fadeIn');
  inwi();
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

      // sequential calls to run txtl on new text
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

      // run txtl on 'i create' description
      setTimeout(function() {
        t5.removeClass('invisible').addClass('animated fadeIn');
      }, 18800);

  })();

}); 
