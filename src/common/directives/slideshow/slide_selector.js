angular.module( 'dagb.directives.slideshow.slideSelector', [])

.directive('dagbSlideSelector', function($parse) {
  return {
    restrict: 'A',
    link: function(scope, element, attrs, selectorsCtrl) {
      
      var manageSelected = function(index) {
        if(scope.isCurrentSlideIndex(attrs.dagbSlideSelector)) 
        {
          element.addClass('selected');
        }
        else 
        {
          element.removeClass('selected');
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