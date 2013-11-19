angular.module( 'dagb.directives.slideshow.slideSelector', [])

.directive('dagbSlideSelector', function($parse) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs, selectorsCtrl) {
      
      var shouldAnimate = typeof attrs.dagbSlideSelectorAnimate !== 'undefined';
      var manageSelected = function(index) {
        if(scope.isCurrentSlideIndex(attrs.dagbSlideSelector)) 
        {
          if(shouldAnimate) {
            $(element[0]).fadeIn();
          } else {
            element.addClass('selected');
          }
        }
        else 
        {
          if(shouldAnimate) {
            $(element[0]).fadeOut();
          } else {
            element.removeClass('selected');
          }
          
          
        }
      };
      
      manageSelected();
      
      scope.$on('slideChanged', function(event, args) {
        
          manageSelected();
          
      });
      
    }
  };
})

;