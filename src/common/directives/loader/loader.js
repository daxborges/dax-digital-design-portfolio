angular.module( 'dagb.directives.loader.loader', [
  
])

.directive( 'dagbLoader', function() {
  return {
    restrict: 'A',
    controller: 'LoaderCtrl',
    link: function( scope, element, attrs ) {
    
      var odds = $(element[0]).children('div:nth-child(1), div:nth-child(4)');
      var evens = $(element[0]).children('div:nth-child(2), div:nth-child(3)');
      var toggle = true;
      var duration = 1000;
      var interval;
      var intervalDelay;
      var intervalDelayDuration = 100;
      
      function toggleAnimate(_duration) {
        if(toggle) {
          odds.animate({ opacity: ".25" }, _duration);
          evens.animate({ opacity: "1" }, _duration);
          toggle = false;
        } else {
          odds.animate({ opacity: "1" }, _duration);
          evens.animate({ opacity: ".25" }, _duration);
          toggle = true;
        }
      }
      
      var startInterval = function() {
      
        odds.css({ opacity: "0" });
        evens.css({ opacity: "0" });
        
        intervalDelay = setTimeout(function() {
          toggleAnimate(0);
          interval = setInterval(function() {
            toggleAnimate(duration);
          }, duration);
        }, intervalDelayDuration);
      };
      
      var stopInterval = function() {
        clearInterval(interval);
        clearTimeout(intervalDelay);
      };
      
      // Turn the interval on and off depending on if loader is showing
      scope.$watch(attrs.dagbLoader, function(value) {
        
        if(typeof value === 'undefined') {
          return;
        }
        
        if(value) {
          startInterval();
        } else {
          stopInterval();
        } 
        
      });
      
    }
  };
})

.controller( 'LoaderCtrl', function SlideshowController( $scope, imagesloaded, inBounds ) {
  
})

;