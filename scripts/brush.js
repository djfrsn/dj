  
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
$('html').on('scroll touchmove mousewheel', function(e){
  e.preventDefault();
  e.stopPropagation();
  return false;
});


// Run code on document.ready
$(document).ready(function(){												

  // Init FullPageJS
  $('#fullpage').fullpage({
    sectionsColor: ['#F5EDE3', '#4BBFC3', '#7BAABE', 'whitesmoke', '#ccddff'],
    anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
    menu: '.main-menu',
  });

  function closeNav() {
      $('body').removeClass('nav-expanded');
  }

   //Navigation Menu Slider
    $('#nav-expander').on('click',function(e){
  		e.preventDefault();
  		$('body').toggleClass('nav-expanded');
  	});
  	$('#nav-close').on('click',function(e){
  		e.preventDefault();
  		closeNav();
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

    // Set Navigation Links
    $('.main-menu-home').on('click', function(e){
      e.preventDefault();
      closeNav();
      $.fn.fullpage.moveTo(1);
    });
    $('.main-menu-about').on('click', function(e){
      e.preventDefault();
      closeNav();
      $.fn.fullpage.moveTo(2);
    });
    $('.main-menu-work').on('click', function(e){
      e.preventDefault();
      closeNav();
      $.fn.fullpage.moveTo(3);
    });
    $('.main-menu-process').on('click', function(e){
      e.preventDefault();
      closeNav();
      $.fn.fullpage.moveTo(4);
    }); 
    $('.main-menu-contact').on('click', function(e){
      e.preventDefault();
      closeNav();
      $.fn.fullpage.moveTo(5);
    }); 
});

// Run code on window load
$(window).bind("load", function() {

  // This code runs after 1 second
  setTimeout(function() {
      // Reveal sections after page load to avoid FOUC
      $('.reveal.hidden').removeClass('hidden').fadeIn();
      // Turn scroll back on
      $('html').off('scroll touchmove mousewheel');
  }, 1000);

  // Reveal Nav
  $('.circle a').removeClass('hidden').addClass('animated fadeIn');

  $('.circle a').on("hover", function() {
    $(this).toggle("hidden");
    $('#fp-nav').addClass('animated fadeIn');
  });


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
      t5 = $('.dynamic_text5'),
      wip = $('.wip');

  // create anon function for our text handler
  (function(){
      
      // create function to run texillate animation
      function txtl(obj) {
        obj.removeClass('hidden').textillate({ in: { effect: 'flipInY' }});
      }

      function invFade(obj) {
        obj.removeClass('invisible').addClass('animated fadeIn')
      }

      // Create runloop for animation timing
      var loop = jQuery.runloop();

      // Note: only use 5% intervals (10% for <500ms durations)!
      loop.addKey('5%', function() { 
        txtl(t0); 
      });
      loop.addKey('20%', function() { 
        t0.addClass('hidden');
        txtl(t1);
      });
      loop.addKey('40%', function() { 
        t1.addClass('hidden');
        txtl(t2);
      });
      loop.addKey('60%', function() { 
        t2.addClass('hidden');
        txtl(t3);
      });
      loop.addKey('80%', function() { 
        t3.addClass('hidden');
        txtl(t4);
      });
      // Run final paragraph text
      loop.addKey('90%', function() { 
        invFade(t5);
      });
      loop.addKey('100%', function() { 
        invFade(wip);
      });
      loop.play(20000);
  })();
}); 
