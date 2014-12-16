/*
	Kerem Sevencan @keremciu
  
  ----------------
	Hello Everyone!
 	- I loved Material Design and I developed the following polymer app without Canvas and Polymer.
  
  You can use Only CSS3 - Pure Javascript!
  
  I hope you like it :)
  
  http://www.polymer-project.org/samples/tutorial/finished/index.html
  
  You can follow me on twitter or dribbble: https://twitter.com/keremciu
  https://dribbble.com/keremciu
  
 */
window.onload = function() {
    var classname = document.getElementsByClassName("tabitem");
    var boxitem = document.getElementsByClassName("box");

    var clickFunction = function(e) {
        e.preventDefault();
        var a = this.getElementsByTagName("a")[0];
        var span = this.getElementsByTagName("span")[0];
        var href = a.getAttribute("href").replace("#","");
        for(var i=0;i<boxitem.length;i++){
            boxitem[i].className =  boxitem[i].className.replace(/(?:^|\s)show(?!\S)/g, '');
        }
        document.getElementById(href).className += " show";
        for(var i=0;i<classname.length;i++){
            classname[i].className =  classname[i].className.replace(/(?:^|\s)active(?!\S)/g, '');
        }
        this.className += " active";
        span.className += 'active';
        var left = a.getBoundingClientRect().left;
        var top = a.getBoundingClientRect().top;
        var consx = (e.clientX - left);
        var consy = (e.clientY - top);
        span.style.top = consy+"px";
        span.style.left = consx+"px";
        span.className = 'clicked';
        span.addEventListener('webkitAnimationEnd', function(event){
            this.className = '';
        }, false);  
    };

    for(var i=0;i<classname.length;i++){
        classname[i].addEventListener('click', clickFunction, false);
    }
}