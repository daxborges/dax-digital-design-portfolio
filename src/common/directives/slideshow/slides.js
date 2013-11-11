angular.module( 'dagb.directives.slideshow.slides', [] )

.directive( 'dagbSlides', function() {
  return {
    restrict: 'A',
    controller: 'SlideshowCtrl',
    link: function( scope, element, attrs ) {
    
      scope.$watch(scope.currentSlideIndex, function(value) {
          //scope;
      });
      
    }
  };
})

;