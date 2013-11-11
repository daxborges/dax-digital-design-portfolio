angular.module( 'dagb.directives.svg.data', [] )

.directive( 'dagbSvgData', function() {
  return {
    restrict: 'A',
    //priority: 99, // it needs to run after the attributes are interpolated
    link: function( scope, element, attrs ) {
    
      scope.$watch(attrs.dagbSvgData, function() {
        element.attr({data: attrs.dagbSvgData}).removeAttr('dagb-svg-data');
        element.replaceWith(element.clone());
      });
      
    }
  };
})

;

