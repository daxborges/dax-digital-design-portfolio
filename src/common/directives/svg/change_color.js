angular.module( 'dagb.directives.svg.changeColor', [] )

.directive( 'dagbSvgChangeColor', function() {
  return {
    restrict: 'A',
    priority: 100, // it needs to run after the attributes are interpolated
    link: function( scope, element, attrs ) {
    
      scope.$watch(element[0].childElementCount, function(value) {
        value = value;
      });
      
    }
  };
})

;

